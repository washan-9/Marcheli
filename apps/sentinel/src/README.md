# Arquitectura: Hexagonal (Ports & Adapters)
Microservicio privado de Inteligencia Artificial (FastAPI) para el Sentinel Engine.

Estructura:
- `core/` (Domain): Contiene las entidades, modelos NLP y lógica de negocio dura de detección de riesgos. Independiente de frameworks.
- `ports/`: Interfaces abstractas de entrada (ej. Use Cases) y salida (ej. interfaces para repositorios o LLMs).
- `adapters/`: Implementación de los puertos.
  - *Inbound Adapters*: Endpoints de FastAPI que reciben peticiones de `apps/api`.
  - *Outbound Adapters*: Clientes HTTP para OpenAI/Anthropic, clientes de base de datos vectorial.
