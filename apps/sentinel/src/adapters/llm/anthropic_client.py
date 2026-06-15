"""Outbound adapter: cliente LLM Anthropic (implementa LLMPort).

Modelo por defecto: claude-sonnet-4-6.
TODO: implementar usando el SDK `anthropic`. Antes de implementar, consultar la
referencia de la API de Claude (skill `claude-api`) para params y manejo de tools.
"""

DEFAULT_MODEL = "claude-sonnet-4-6"


class AnthropicClient:
    def complete(self, system: str, messages: list[dict]) -> str:
        raise NotImplementedError
