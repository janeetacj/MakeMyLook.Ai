from dataclasses import dataclass

SKIN_TONE_LABELS = [
    "fair",
    "light",
    "medium",
    "tan",
    "deep",
]

SKIN_TYPE_LABELS = [
    "normal",
    "dry",
    "oily",
    "combination",
]

MIN_CONFIDENCE = 0.50

MAX_ANALYSIS_DIMENSION = 1024
MIN_SKIN_PIXEL_COUNT = 1000
SKIN_TONE_BRIGHTNESS_THRESHOLDS = {
    "fair": 195,
    "light": 165,
    "medium": 140,
    "tan": 110,
}

SKIN_TYPE_BRIGHTNESS_THRESHOLDS = {
    "dry": 120,
    "oily": 180,
}

SKIN_TYPE_COLOR_VARIATION_THRESHOLD = 70

SKIN_TYPE_OILY_COLOR_VARIATION_MAX = 35

SKIN_CONCERN_LABELS = [
    "dryness",
    "oiliness",
    "uneven_tone",
    "redness",
]

SKIN_CONCERN_BRIGHTNESS_THRESHOLDS = {
    "dryness": 120,
    "oiliness": 180,
}

SKIN_CONCERN_COLOR_VARIATION_THRESHOLDS = {
    "oiliness_max": 35,
    "uneven_tone": 70,
}

SKIN_CONCERN_REDNESS_THRESHOLD = 45

SKIN_ANALYSIS_VERSION = "heuristic-v1"
SKIN_ANALYSIS_ENGINE = "rule_based"

@dataclass(frozen=True)
class SkinAnalysisConfig:
    version: str
    engine: str


SKIN_ANALYSIS_CONFIG = SkinAnalysisConfig(
    version=SKIN_ANALYSIS_VERSION,
    engine=SKIN_ANALYSIS_ENGINE,
)

CONFIDENCE_LEVEL_THRESHOLDS = {
    "high": 0.80,
    "medium": 0.60,
}
