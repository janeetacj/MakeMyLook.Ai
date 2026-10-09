from app.ai.skin_analyzer import analyze_image
from app.schemas.skin_analysis import SkinAnalysisResult


def analyze_skin_image(
    filename: str | None,
    content_type: str | None,
    image_data: bytes,
) -> dict:
    try:
        analysis: SkinAnalysisResult = analyze_image(image_data)
    except ValueError as error:
        raise ValueError(str(error))

    return {
        "analysis_status": "completed",
        "message": "Image received and processed by the skin analysis service.",
        "filename": filename,
        "content_type": content_type,
        "image_size_bytes": len(image_data),
        "analysis": analysis,
    }