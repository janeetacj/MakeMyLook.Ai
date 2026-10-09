from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import router

from app.api.skin import router as skin_router
from app.api.outfit import router as outfit_router

app = FastAPI(
    title="MakeMyLook.Ai API",
    description="Backend API for the MakeMyLook.Ai beauty and personal styling application.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")
app.include_router(skin_router, prefix="/api")
app.include_router(outfit_router, prefix="/api")

@app.get("/")
def root():
    return {
        "message": "MakeMyLook.Ai API is running",
        "status": "success",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
    }