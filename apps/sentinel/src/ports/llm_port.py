"""Puerto de salida hacia un proveedor LLM."""
from typing import Protocol


class LLMPort(Protocol):
    def complete(self, system: str, messages: list[dict]) -> str:
        """Genera una respuesta del modelo. TODO: definir contrato final."""
        ...
