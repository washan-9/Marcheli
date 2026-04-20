# Proyecto Marcheli: Visión General

**Fecha:** 2026-04-19
**Estado:** Activo
**Etiquetas:** #salud-mental, #ia, #blockchain, #mvp, #arquitectura

## Resumen
Ecosistema de Gestión Clínica y Soporte Emocional de Alta Precisión. Marcheli conecta estudiantes en riesgo con profesionales de salud mediante IA y datos estructurados.

## Módulos Core
1. **Inteligencia Conversacional (Chatbot):** NLP con memoria, Sentinel Engine (detección de riesgo).
2. **Evaluación Dinámica (Screening Engine):** Constructor de cuestionarios, persistencia en MongoDB.
3. **Gestión Clínica (Dashboard):** Triaje automatizado, agenda, historial clínico.
4. **Telemedicine:** Videollamadas y notificaciones push.
5. **Auth Service:** RBAC y cifrado AES-256.

## Flujo de Valor
1. Registro y vinculación.
2. Interacción diaria (Chatbot/Cuestionarios).
3. Detección proactiva de riesgos.
4. Intervención inmediata del especialista.

@idea: Usar una arquitectura de microservicios o un monorepo para separar el Auth Service, el Chatbot y el Screening Engine, facilitando el escalado independiente.
