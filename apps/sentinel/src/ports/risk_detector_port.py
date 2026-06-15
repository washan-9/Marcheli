"""Puerto de salida para detección de riesgo."""
from typing import Protocol


class RiskDetectorPort(Protocol):
    def detect(self, text: str) -> dict:
        """Devuelve nivel de riesgo y banderas detectadas. TODO: definir contrato."""
        ...
