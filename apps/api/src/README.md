# Arquitectura: Controller-Service-Repository

Esta API (`apps/api`) actúa como Orquestador (BFF) y Core API usando Next.js
exclusivamente para rutas backend (sin UI).

## Flujo de una petición

```
app/api/<dominio>/route.ts   →  controllers/<dominio>.controller.ts
        (HTTP entry, thin)        (valida, autoriza, arma la respuesta)
                                          ↓
                                  services/<dominio>.service.ts
                                  (lógica de negocio / orquestación)
                                          ↓
                                  repositories/<dominio>.repository.ts
                                  (acceso a datos: Prisma / Mongo)
```

## Capas

- `app/api/**/route.ts`: Route Handlers de Next.js. Punto de entrada HTTP fino;
  delega de inmediato en el controller. Ej: `app/api/health/route.ts`.
- `controllers/`: Reciben la petición, validan, aplican RBAC (`requireRole` de
  `@marcheli/auth`) y delegan en el service.
- `services/`: Lógica de negocio, orquestación y llamadas a Sentinel
  (`lib/sentinel.ts`).
- `repositories/`: Acceso a datos. Prisma (`@marcheli/database`) para PostgreSQL;
  Mongoose (`repositories/mongo/`) para MongoDB.

## Dominios (alineados al spec MindCare)

| Dominio          | Fuente de datos                         | Pantalla / Panel |
| ---------------- | --------------------------------------- | ---------------- |
| `auth`           | Postgres (User) + `@marcheli/auth`      | Login            |
| `mood`           | Postgres (MoodLog)                      | Ánimo diario     |
| `chat`           | Mongo (ChatLog) + proxy a Sentinel      | Chatbot          |
| `appointments`   | Postgres (Appointment)                  | Citas / Telemed. |
| `signaling`      | — (WebRTC)                              | Videollamada     |
| `questionnaires` | Mongo (Questionnaire / Response)        | Encuestas        |
| `notes`          | Postgres (SessionNote)                  | Notas (panel)    |
| `triage`         | Postgres (Triage)                       | Semáforo (panel) |

> **Next.js 16:** antes de escribir un `route.ts` consulta los docs de la versión
> instalada (`node_modules/next/dist/docs/`). Hay breaking changes respecto a
> versiones anteriores.
