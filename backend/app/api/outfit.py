from fastapi import APIRouter, File, HTTPException, UploadFile

from app.schemas.outfit_analysis import OutfitAnalysisResult
from app.services.outfit_service import analyze_outfit_image


router = APIRouter(
    prefix="/outfit",
    tags=["Outfit Analysis"],
)

ALLOWED_IMAGE_TYPES = {
    "image/jpeg",
    "image/png",
    "image/webp",
}

MAX_IMAGE_SIZE = 10 * 1024 * 1024


@router.post(
    "/analyze",
    response_model=OutfitAnalysisResult,
)
async def analyze_outfit(
    file: UploadFile = File(...),
):
    if file.content_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Unsupported image format. Please upload a JPG, PNG, or WEBP image.",
        )

    image_data = await file.read()

    if len(image_data) > MAX_IMAGE_SIZE:
        raise HTTPException(
            status_code=413,
            detail="Image is too large. Please upload an image smaller than 10 MB.",
        )

    try:
        result = analyze_outfit_image(
            filename=file.filename,
            content_type=file.content_type,
            image_data=image_data,
        )
    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )

    return result["analysis"]