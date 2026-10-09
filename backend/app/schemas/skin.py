from pydantic import BaseModel

from app.schemas.skin_analysis import SkinAnalysisResult


class SkinAnalysisResponse(BaseModel):
    status: str
    analysis_status: str
    message: str
    filename: str | None = None
    content_type: str | None = None
    image_size_bytes: int
    analysis: SkinAnalysisResult