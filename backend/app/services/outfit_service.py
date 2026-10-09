from app.ai.outfit_analyzer import analyze_image
from app.schemas.outfit_analysis import OutfitAnalysisResult


def analyze_outfit_image(
    filename: str | None,
    content_type: str | None,
    image_data: bytes,
) -> dict:
    try:
        analysis: OutfitAnalysisResult = analyze_image(image_data)
    except ValueError as error:
        raise ValueError(str(error))

    return {
        "analysis_status": "completed",
        "message": "Outfit image received and processed by the outfit analysis service.",
        "filename": filename,
        "content_type": content_type,
        "image_size_bytes": len(image_data),
        "analysis": analysis,
    }