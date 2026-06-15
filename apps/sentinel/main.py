"""Punto de entrada del Sentinel Engine (FastAPI).

Servicio privado: solo accesible desde el orquestador (apps/api).
Arranque local: `uvicorn main:app --reload --port 8000`
"""
from fastapi import FastAPI

from src.adapters.http.health import router as health_router

app = FastAPI(title="MindCare Sentinel", version="0.1.0")
app.include_router(health_router)

# TODO: registrar routers de chat / detección de riesgo / resumen.
