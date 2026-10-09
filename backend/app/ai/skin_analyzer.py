from io import BytesIO

import cv2
import numpy as np

from PIL import Image, UnidentifiedImageError

from app.core.skin_config import (
    MAX_ANALYSIS_DIMENSION,
    MIN_SKIN_PIXEL_COUNT,
    SKIN_TONE_BRIGHTNESS_THRESHOLDS,
    SKIN_TYPE_BRIGHTNESS_THRESHOLDS,
    SKIN_TYPE_COLOR_VARIATION_THRESHOLD,
    SKIN_TYPE_OILY_COLOR_VARIATION_MAX,
    SKIN_CONCERN_BRIGHTNESS_THRESHOLDS,
    SKIN_CONCERN_COLOR_VARIATION_THRESHOLDS,
    SKIN_CONCERN_REDNESS_THRESHOLD,
    SKIN_ANALYSIS_CONFIG,
    CONFIDENCE_LEVEL_THRESHOLDS,
)

from app.schemas.skin_analysis import SkinAnalysisResult

def decode_with_opencv(image_data: bytes) -> np.ndarray:
    image_array = np.frombuffer(image_data, dtype=np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

    if image is None:
        raise ValueError("The uploaded file could not be decoded by OpenCV.")

    if image.size == 0:
        raise ValueError("The uploaded image contains no pixel data.")

    return image

def preprocess_image(image_data: bytes) -> Image.Image:
    try:
        image = Image.open(BytesIO(image_data))
        image.verify()

        image = Image.open(BytesIO(image_data))

    except (UnidentifiedImageError, OSError):
        raise ValueError("The uploaded file is not a valid image.")

    image = image.convert("RGB")

    width, height = image.size
    largest_dimension = max(width, height)

    if largest_dimension > MAX_ANALYSIS_DIMENSION:
        scale = MAX_ANALYSIS_DIMENSION / largest_dimension

        new_width = int(width * scale)
        new_height = int(height * scale)

        image = image.resize(
            (new_width, new_height),
            Image.Resampling.LANCZOS,
        )

    return image

def estimate_skin_tone(
    average_red: float | None,
    average_green: float | None,
    average_blue: float | None,
    skin_pixel_count: int,
) -> str | None:
    if skin_pixel_count < MIN_SKIN_PIXEL_COUNT:
        return None


    if (
        average_red is None
        or average_green is None
        or average_blue is None
    ):
        return None

    brightness = (
        average_red + average_green + average_blue
    ) / 3

    if brightness >= SKIN_TONE_BRIGHTNESS_THRESHOLDS["fair"]:
        return "fair"

    if brightness >= SKIN_TONE_BRIGHTNESS_THRESHOLDS["light"]:
        return "light"

    if brightness >= SKIN_TONE_BRIGHTNESS_THRESHOLDS["medium"]:
        return "medium"

    if brightness >= SKIN_TONE_BRIGHTNESS_THRESHOLDS["tan"]:
        return "tan"

    return "deep"

def estimate_skin_type(
    average_red: float | None,
    average_green: float | None,
    average_blue: float | None,
) -> str | None:
    if (
        average_red is None
        or average_green is None
        or average_blue is None
    ):
        return None

    brightness = (
        average_red + average_green + average_blue
    ) / 3

    color_variation = max(
        average_red,
        average_green,
        average_blue,
    ) - min(
        average_red,
        average_green,
        average_blue,
    )

    if brightness < SKIN_TYPE_BRIGHTNESS_THRESHOLDS["dry"]:
        return "dry"

    if (
        brightness > SKIN_TYPE_BRIGHTNESS_THRESHOLDS["oily"]
        and color_variation < SKIN_TYPE_OILY_COLOR_VARIATION_MAX
    ):
        return "oily"

    if color_variation > SKIN_TYPE_COLOR_VARIATION_THRESHOLD:
        return "combination"

    return "normal"

def detect_skin_concerns(
    average_red: float | None,
    average_green: float | None,
    average_blue: float | None,
) -> list[str]:
    if average_red is None or average_green is None or average_blue is None:
        return []

    concerns: list[str] = []

    brightness = (average_red + average_green + average_blue) / 3

    color_variation = (
        max(average_red, average_green, average_blue)
        - min(average_red, average_green, average_blue)
    )

    if brightness < SKIN_CONCERN_BRIGHTNESS_THRESHOLDS["dryness"]:
        concerns.append("dryness")

    if (
        brightness > SKIN_CONCERN_BRIGHTNESS_THRESHOLDS["oiliness"]
        and color_variation < SKIN_CONCERN_COLOR_VARIATION_THRESHOLDS["oiliness_max"]
    ):
        concerns.append("oiliness")

    if color_variation > SKIN_CONCERN_COLOR_VARIATION_THRESHOLDS["uneven_tone"]:
        concerns.append("uneven_tone")

    if average_red > average_green + SKIN_CONCERN_REDNESS_THRESHOLD:
        concerns.append("redness")

    return concerns

def calculate_confidence(
    skin_pixel_count: int,
    average_red: float | None,
    average_green: float | None,
    average_blue: float | None,
) -> float | None:
    if (
        skin_pixel_count < MIN_SKIN_PIXEL_COUNT
        or average_red is None
        or average_green is None
        or average_blue is None
    ):
        return None

    pixel_score = min(
        skin_pixel_count / 50000,
        1.0,
    )

    brightness = (
        average_red + average_green + average_blue
    ) / 3

    if 80 <= brightness <= 220:
        brightness_score = 1.0
    else:
        brightness_score = 0.5

    confidence = (
        pixel_score * 0.7
        + brightness_score * 0.3
    )

    return round(min(confidence, 1.0), 2)

def is_confident_analysis(confidence: float | None) -> bool:
    if confidence is None:
        return False

    from app.core.skin_config import MIN_CONFIDENCE

    return confidence >= MIN_CONFIDENCE

def get_usable_classification(
    value: str | None,
    confidence: float | None,
) -> str | None:
    if not is_confident_analysis(confidence):
        return None

    return value

def get_confidence_level(confidence: float | None) -> str:
    if confidence is None:
        return "low"

    if confidence >= CONFIDENCE_LEVEL_THRESHOLDS["high"]:
        return "high"

    if confidence >= CONFIDENCE_LEVEL_THRESHOLDS["medium"]:
        return "medium"

    return "low"

def create_skin_mask(opencv_image: np.ndarray) -> np.ndarray:
    hsv_image = cv2.cvtColor(opencv_image, cv2.COLOR_BGR2HSV)

    lower_skin = np.array([0, 20, 50], dtype=np.uint8)
    upper_skin = np.array([25, 255, 255], dtype=np.uint8)

    skin_mask = cv2.inRange(
        hsv_image,
        lower_skin,
        upper_skin,
    )

    return skin_mask

def calculate_skin_rgb_statistics(
    image: Image.Image,
    skin_mask: np.ndarray,
) -> tuple[float | None, float | None, float | None, int]:
    image_array = np.array(image)

    skin_pixels = image_array[skin_mask > 0]

    skin_pixel_count = len(skin_pixels)

    if skin_pixel_count == 0:
        return None, None, None, 0

    average_red = float(np.mean(skin_pixels[:, 0]))
    average_green = float(np.mean(skin_pixels[:, 1]))
    average_blue = float(np.mean(skin_pixels[:, 2]))

    return (
        round(average_red, 2),
        round(average_green, 2),
        round(average_blue, 2),
        skin_pixel_count,
    )

def build_skin_analysis_result(
    image: Image.Image,
    average_red: float | None,
    average_green: float | None,
    average_blue: float | None,
    skin_pixel_count: int,
) -> SkinAnalysisResult:

    confidence = calculate_confidence(
        skin_pixel_count,
        average_red,
        average_green,
        average_blue,
    )

    is_confident = is_confident_analysis(confidence)

    skin_tone = estimate_skin_tone(
        average_red,
        average_green,
        average_blue,
        skin_pixel_count,
    )

    skin_tone_confidence = confidence

    skin_tone = get_usable_classification(
        skin_tone,
        skin_tone_confidence,
    )

    skin_type = estimate_skin_type(
        average_red,
        average_green,
        average_blue,
    )

    skin_type_confidence = confidence

    skin_type = get_usable_classification(
        skin_type,
        skin_type_confidence,
    )

    concerns = detect_skin_concerns(
        average_red,
        average_green,
        average_blue,
    )

    if not is_confident:
        concerns = []

    confidence_level = get_confidence_level(confidence)
    confidence_level = get_confidence_level(confidence)

    return SkinAnalysisResult(
        analysis_status="completed",
        analysis_version=SKIN_ANALYSIS_CONFIG.version,
        analysis_engine=SKIN_ANALYSIS_CONFIG.engine,
        skin_tone=skin_tone,
        skin_tone_confidence=skin_tone_confidence,
        skin_type=skin_type,
        skin_type_confidence=skin_type_confidence,
        confidence=confidence,
        concerns=concerns,
        concern_confidence=confidence,
        is_confident=is_confident,
        confidence_level=confidence_level,
        image_width=image.width,
        image_height=image.height,
        image_mode=image.mode,
        average_red=average_red,
        average_green=average_green,
        average_blue=average_blue,
        skin_pixel_count=skin_pixel_count,
    )

def analyze_image(image_data: bytes) -> SkinAnalysisResult:
    opencv_image = decode_with_opencv(image_data)
    image = preprocess_image(image_data)

    skin_mask = create_skin_mask(
        cv2.cvtColor(
            np.array(image),
            cv2.COLOR_RGB2BGR,
        )
    )

    average_red, average_green, average_blue, skin_pixel_count = (
        calculate_skin_rgb_statistics(
            image,
            skin_mask,
        )
    )

    return build_skin_analysis_result(
        image=image,
        average_red=average_red,
        average_green=average_green,
        average_blue=average_blue,
        skin_pixel_count=skin_pixel_count,
    )
