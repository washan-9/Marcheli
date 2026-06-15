"""Outbound adapter: detector determinista de crisis por palabras clave.

Implementa RiskDetectorPort. Es la red de seguridad inmediata: si el estudiante
escribe términos de autolesión/daño, se marca crisis sin depender del LLM.
TODO: definir el léxico (ES) y la lógica de coincidencia.
"""

CRISIS_KEYWORDS: list[str] = [
    # TODO: completar con asesoría clínica
]


class KeywordRiskDetector:
    def detect(self, text: str) -> dict:
        raise NotImplementedError
