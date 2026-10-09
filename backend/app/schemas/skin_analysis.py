from typing import Literal

from pydantic import BaseModel, Field


class SkinAnalysisResult(BaseModel):
    analysis_status: str = "completed"
    analysis_version: str = "heuristic-v1"
    analysis_engine: str = "rule_based"
    skin_tone: Literal["fair", "light", "medium", "tan", "deep"] | None = None
    skin_type: Literal["normal", "dry", "oily", "combination"] | None = None
    confidence: float | None = Field(default=None, ge=0.0, le=1.0)
    skin_tone_confidence: float | None = Field(default=None, ge=0.0, le=1.0)
    skin_type_confidence: float | None = Field(default=None, ge=0.0, le=1.0)
    concern_confidence: float | None = Field(default=None, ge=0.0, le=1.0)
    is_confident: bool = False
    confidence_level: Literal["high", "medium", "low"] = "low"
    concerns: list[Literal["dryness", "oiliness", "uneven_tone", "redness"]] = []
    image_width: int | None = None
    image_height: int | None = None
    image_mode: str | None = None
    average_red: float | None = None
    average_green: float | None = None
    average_blue: float | None = None
    skin_pixel_count: int | None = None