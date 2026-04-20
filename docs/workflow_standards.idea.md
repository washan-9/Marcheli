# Estándares de Flujo de Trabajo: Marcheli

**Fecha:** 2026-04-19
**Estado:** Mandatorio
**Etiquetas:** #workflow, #git, #docker, #professional

## 1. Gestión de Versiones (Git)
*   **Rama Principal:** `main` es sagrada. No se realizan commits directos aquí para nuevas funcionalidades.
*   **Ramas de Trabajo:** Cada nueva tarea o User Story debe tener su propia rama descriptiva.
    *   Formato: `feat/nombre-tarea`, `fix/nombre-error`, `refactor/nombre-mejora`.
*   **Proceso de Integración:** Se debe proponer un Pull Request o revisión antes de fusionar con `main`.

## 2. Herramientas de Orquestación
*   Se utiliza exclusivamente la sintaxis de **Docker Compose V2** (`docker compose`).
*   El proyecto debe ser "Zero Install": todo el entorno de desarrollo debe poder levantarse desde Docker.

## 3. Estándares de Comunicación
*   **Tono:** Profesional y técnico.
*   **Emojis:** Estrictamente prohibidos en toda la documentación y mensajes de la IA.

## 4. Arquitectura y Código
*   Se respetarán los principios de **Clean Architecture** y **Modular Monolith**.
*   Las ideas nuevas deben registrarse mediante etiquetas `@idea` en el código o archivos `.idea.md`.

---
*Este documento es la fuente de verdad para el comportamiento del asistente y el equipo.*
