"""Inbound adapter: endpoint de salud."""
from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health() -> dict:
    return {"status": "ok", "service": "sentinel"}
