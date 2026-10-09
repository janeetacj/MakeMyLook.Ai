from io import BytesIO

import cv2
import numpy as np
from PIL import Image, UnidentifiedImageError

from app.schemas.outfit_analysis import OutfitAnalysisResult


def decode_with_opencv(image_data: bytes) -> np.ndarray:
    image_array = np.frombuffer(image_data, dtype=np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

    if image is None:
        raise ValueError("The uploaded outfit image could not be decoded.")

    if image.size == 0:
        raise ValueError("The uploaded outfit image contains no pixel data.")

    return image


def preprocess_image(image_data: bytes) -> Image.Image:
    try:
        image = Image.open(BytesIO(image_data))
        image.verify()

        image = Image.open(BytesIO(image_data))

    except (UnidentifiedImageError, OSError):
        raise ValueError("The uploaded outfit file is not a valid image.")

    return image.convert("RGB")


def rgb_to_hex(red: float, green: float, blue: float) -> str:
    return "#{:02X}{:02X}{:02X}".format(
        int(round(red)),
        int(round(green)),
        int(round(blue)),
    )


def get_colour_name(red: float, green: float, blue: float) -> str:
    brightness = (red + green + blue) / 3

    if red > 180 and green > 160 and blue < 140:
        return "Warm Beige"

    if red > 150 and green > 100 and blue < 100:
        return "Warm Brown"

    if brightness > 210:
        return "Ivory"

    if brightness > 180:
        return "Light Neutral"

    if brightness > 140:
        return "Medium Neutral"

    if brightness > 100:
        return "Deep Neutral"

    return "Deep Tone"


def analyze_image(image_data: bytes) -> OutfitAnalysisResult:
    opencv_image = decode_with_opencv(image_data)
    image = preprocess_image(image_data)

    image_array = np.array(image)

    pixels = image_array.reshape(-1, 3)

    average_red = float(np.mean(pixels[:, 0]))
    average_green = float(np.mean(pixels[:, 1]))
    average_blue = float(np.mean(pixels[:, 2]))

    dominant_hex = rgb_to_hex(
        average_red,
        average_green,
        average_blue,
    )

    dominant_colour = get_colour_name(
        average_red,
        average_green,
        average_blue,
    )

    hsv_image = cv2.cvtColor(
        opencv_image,
        cv2.COLOR_BGR2HSV,
    )

    saturation = hsv_image[:, :, 1]

    accent_pixels = pixels[
        saturation.reshape(-1) > 100
    ]

    if len(accent_pixels) > 0:
        accent_red = float(np.mean(accent_pixels[:, 0]))
        accent_green = float(np.mean(accent_pixels[:, 1]))
        accent_blue = float(np.mean(accent_pixels[:, 2]))
    else:
        accent_red = average_red
        accent_green = average_green
        accent_blue = average_blue

    accent_hex = rgb_to_hex(
        accent_red,
        accent_green,
        accent_blue,
    )

    accent_colour = get_colour_name(
        accent_red,
        accent_green,
        accent_blue,
    )

    confidence = 0.75

    return OutfitAnalysisResult(
        analysis_status="completed",
        analysis_version="outfit-v1",
        analysis_engine="computer_vision",
        dominant_colour=dominant_colour,
        dominant_hex=dominant_hex,
        accent_colour=accent_colour,
        accent_hex=accent_hex,
        confidence=confidence,
        image_width=image.width,
        image_height=image.height,
    )