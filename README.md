# Marcheli: Ecosistema de Gestión Clínica y Soporte Emocional

Marcheli es una plataforma de alta precisión diseñada para conectar a estudiantes en riesgo con profesionales de la salud mental. Utiliza inteligencia artificial y datos estructurados para permitir una intervención proactiva y personalizada.

---

## Visión del Proyecto
Marcheli busca romper el silencio tecnológico en la salud mental universitaria. No es solo una app de ayuda, es un puente que utiliza un **Sentinel Engine** para detectar señales de alerta (depresión, ansiedad, riesgo suicida) y notificarlas de inmediato al especialista.

## Arquitectura del Sistema
El proyecto sigue los principios de **Clean Architecture** y **Domain-Driven Design (DDD)** en una estructura de **Monolito Modular**.

### Componentes Core:
1.  **Chatbot Inteligente:** NLP con memoria y detección de crisis en tiempo real.
2.  **Screening Engine:** Constructor de cuestionarios dinámicos con persistencia en **MongoDB**.
3.  **Dashboard Clínico:** Panel de triaje automatizado y seguimiento para especialistas.
4.  **Telemedicina:** Videollamadas seguras e integración de agenda.

Para más detalles, consulta la [Documentación de Arquitectura](docs/arquitectura_marcheli.idea.md).

---

## Hoja de Ruta (Roadmap)
El desarrollo está planificado en 5 Sprints (10 semanas):
*   **Sprint 1:** Fundaciones, Auth (Google OAuth 2.0) y Seguridad.
*   **Sprint 2:** Evaluación Dinámica y NoSQL.
*   **Sprint 3:** Inteligencia Conversacional (IA Sentinel).
*   **Sprint 4:** Dashboard y Analítica.
*   **Sprint 5:** Telemedicina y Lanzamiento.

Detalles en el [Roadmap](docs/marcheli_roadmap.idea.md).

---

## Cómo Colaborar e Inicio Rápido

### 1. Configuración Inicial
*   Clonar el repositorio.
*   Configurar el entorno: `cp .env.example .env` y rellenar las credenciales (Google OAuth, Secrets).

### 2. Iniciar todo el Ecosistema
Ejecuta el siguiente comando para levantar el Dashboard y las bases de datos:
```bash
docker compose up --build
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### 3. Sincronizar Base de Datos (Solo la primera vez)
Mientras el contenedor está corriendo, prepara las tablas en una nueva terminal:
```bash
docker exec -it marcheli-web npx prisma db push --schema=packages/database/prisma/schema.prisma
```

---

## Requisitos Técnicos
*   Docker y Docker Compose.
*   Proyecto en Google Cloud Console (para OAuth).

---

## Seguridad y Privacidad
La privacidad es nuestra prioridad. Implementamos cifrado de grado médico **AES-256** y un sistema robusto de **RBAC** para asegurar que solo el especialista asignado acceda a datos sensibles.

---
*Desarrollado para transformar la salud mental universitaria.*
