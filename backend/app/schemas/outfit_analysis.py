from pydantic import BaseModel, Field


class OutfitAnalysisResult(BaseModel):
    analysis_status: str = "completed"
    analysis_version: str = "outfit-v1"
    analysis_engine: str = "computer_vision"

    dominant_colour: str | None = None
    dominant_hex: str | None = None

    accent_colour: str | None = None
    accent_hex: str | None = None

    confidence: float | None = Field(
        default=None,
        ge=0.0,
        le=1.0,
    )

    image_width: int | None = None
    image_height: int | None = None