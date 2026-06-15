# Progreso de Desarrollo — MindCare UNMSM (monorepo `marcheli`)

> Tablero de avance vivo. Actualizar al cerrar cada bloque de trabajo.
> Leyenda: ✅ hecho · 🟡 en progreso · ⬜ pendiente

**Última actualización:** 2026-06-14
**Fase actual:** Cimientos (estructura + schema + config + placeholders)

---

## Decisiones base (locked)
- **Auth:** Google OAuth restringido a `@unmsm.edu.pe` (sin recuperación propia; la gestiona Google). Centralizado en `@marcheli/auth`.
- **Nombre:** `marcheli` = codename interno del monorepo/paquetes; "MindCare" = nombre de producto.
- **Datos:** PostgreSQL (Prisma) para lo estructural + MongoDB (Mongoose) para chat/encuestas.
- **Alcance vigente:** solo cimientos. Sin lógica de negocio todavía.

---

## Estado por aplicación

| App / paquete        | Patrón                       | Estado de cimientos |
| -------------------- | ---------------------------- | ------------------- |
| `packages/database`  | Prisma (PostgreSQL)          | ✅ schema completo del dominio |
| `packages/auth`      | NextAuth compartido + RBAC   | ✅ config + dominio UNMSM + `requireRole` |
| `apps/api`           | Controller–Service–Repository | ✅ estructura por dominios (stubs) |
| `apps/web`           | Feature-Sliced Design        | ✅ slices del panel (stubs) |
| `apps/mobile`        | Expo + MVVM                  | ✅ 5 pantallas + nav + VM/models (stubs) |
| `apps/sentinel`      | FastAPI + Hexagonal          | ✅ core/ports/adapters (stubs) |
| Infra (Docker/env)   | docker-compose + Dockerfiles | ✅ web/api/postgres/mongo/sentinel |

---

## Cimientos completados (2026-06-14)

- [x] **Schema Prisma**: `StudentProfile` (renombrado, +`studentCode`/`faculty`), `MoodLog` (+enum `Mood` 5 niveles), `SessionNote`, `Triage` enriquecido (`source`, `acknowledged`), `Appointment`.
- [x] **Mongo**: `ChatLog` (+`summary`), `Questionnaire`, `QuestionnaireResponse` (nuevo).
- [x] **`@marcheli/auth`**: Google OAuth + guard de dominio `@unmsm.edu.pe` + propagación de rol + `requireRole`. `apps/web` re-exporta desde aquí.
- [x] **`apps/api`**: convertida en API pura (sin UI), capas C-S-R con stubs para 8 dominios, `health` route, `lib/sentinel.ts`.
- [x] **`apps/web`**: slices FSD (`auth`, `waiting-list`, `student-file`, `session-notes`, `survey-builder`) + `shared/api/client.ts`.
- [x] **`apps/mobile`**: Expo desde cero (config, navegación, 5 pantallas, viewmodels, models).
- [x] **`apps/sentinel`**: FastAPI desde cero (casos de uso, ports, adapters Anthropic + detector de crisis, Dockerfile).
- [x] **Infra**: `sentinel` en docker-compose (red interna), `web` espera a Mongo, Prisma unificado a `^6.1.0`, `.env.example` y `Dockerfile` actualizados.
- [x] **Docs**: roles corregidos en `permisos.idea.md`.

### Verificación pendiente de correr (requiere Node/Docker)
- [ ] `npm install` (resuelve workspace `@marcheli/auth`)
- [ ] `npx prisma validate` + `npx prisma generate`
- [ ] `docker compose up --build` (web :3000 · api :3001 · sentinel interno)
- [ ] `apps/sentinel`: `pip install -r requirements.txt` + `uvicorn main:app` → `GET /health`

---

## Pendiente por feature (post-cimientos)

### App del estudiante (`apps/mobile`)
- [ ] **P1 — Ingreso/Registro:** login Google @unmsm, detección de rol, sesión persistida.
- [ ] **P2 — Ánimo diario:** 5 caritas → `MoodLog`, gráfico de líneas de 7 días.
- [ ] **P3 — Chatbot MindCare:** chat, memoria de 10 mensajes, detección de crisis (Sentinel) → alerta al psicólogo.
- [ ] **P4 — Mis Citas:** próxima cita, videollamada (WebRTC), reprogramar/cancelar.
- [ ] **P5 — Recursos:** guías/ejercicios, líneas de ayuda (1 clic), notificaciones push.

### Panel del psicólogo (`apps/web`)
- [ ] Lista de espera con semáforo (riesgo alto / "Muy mal" arriba, rojo).
- [ ] Ficha del alumno (gráficos de ánimo + resumen del chatbot + resultados de encuestas).
- [ ] Notas de sesión privadas.
- [ ] Creador de encuestas → envío a la app del alumno.

### Orquestador (`apps/api`)
- [ ] Implementar dominios C-S-R: `auth`, `mood`, `chat`, `appointments`, `signaling`, `questionnaires`, `notes`, `triage`.
- [ ] Aprovisionamiento de roles `SPECIALIST`/`ADMIN`.
- [ ] Servidor de señalización WebRTC + WebSockets de alertas de riesgo.

### Servicio IA (`apps/sentinel`)
- [ ] Detección de crisis (léxico ES determinista + LLM).
- [ ] Sentimiento, resumen de chat, scoring de riesgo agregado.
- [ ] Integración real con Anthropic (`claude-sonnet-4-6`) — consultar skill `claude-api` antes de implementar.

---

## Mapeo a Sprints (ver `docs/marcheli_roadmap.idea.md`)

| Sprint | Foco                              | Estado |
| ------ | --------------------------------- | ------ |
| S1     | Fundaciones, Auth, RBAC, BD        | 🟡 cimientos listos; falta auth funcional E2E |
| S2     | Evaluación dinámica + NoSQL        | ⬜ |
| S3     | IA conversacional (Sentinel)       | ⬜ |
| S4     | Dashboard y analítica              | ⬜ |
| S5     | Telemedicina (WebRTC) y cierre     | ⬜ |

---

## Convenciones / recordatorios
- **Next.js 16** tiene breaking changes: antes de escribir `route.ts` consultar `node_modules/next/dist/docs/` (ver `apps/*/AGENTS.md`).
- El panel web y el móvil **no tocan la BD directamente**: todo pasa por el orquestador (`apps/api`).
- `apps/sentinel` es privado: solo accesible desde `apps/api` por la red interna de Docker.
