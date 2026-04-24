# Arquitectura: Controller-Service-Repository

Esta API (`apps/api`) actúa como Orquestador (BFF) y Core API usando Next.js exclusivamente para rutas backend.

Estructura:
- `controllers/`: Manejadores de las rutas (Next.js Route Handlers). Reciben la petición HTTP y envían la respuesta.
- `services/`: Lógica de negocio pura. Orquestación, validación compleja y llamadas a otros servicios (ej. FastAPI).
- `repositories/`: Capa de acceso a datos. Aquí se importa Prisma desde `packages/database` para interactuar con PostgreSQL y MongoDB.
