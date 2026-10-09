from fastapi import APIRouter

router = APIRouter()


@router.get("/status")
def api_status():
    return {
        "status": "API is working",
        "service": "MakeMyLook.Ai",
    }