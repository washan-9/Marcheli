# Marcheli: Épicas y Hoja de Ruta (Roadmap)

**Fecha:** 2026-04-19
**Estado:** Propuesta / Planificación
**Etiquetas:** #roadmap, #epicas, #sprints, #gestion-clinica

## 4. Definición de Épicas

| Épica | Descripción | Historias Incluidas | Valor de Negocio / Clínico |
| :--- | :--- | :--- | :--- |
| **E1. Gestión de Identidad (IAM)** | Seguridad y control de acceso. | Registro, login, roles (RBAC), recuperación y activación. | Garantizar confidencialidad de datos sensibles. |
| **E2. Expediente Clínico Digital** | Centralización de información del paciente. | Registro de datos, historial de sesiones y observaciones. | Trazabilidad del **21%** de casos reincidentes. |
| **E3. Motor de Evaluación (Tamizaje)** | Recolección de datos diagnósticos. | Cuestionarios dinámicos, MongoDB, asignación de tests. | Identificar Depresión (OR 2.46) y Angustia (OR 2.50). |
| **E4. Asistente Terapéutico (IA)** | Interacción natural y monitoreo 24/7. | Chatbot en tiempo real, resumen de contexto, detección de riesgo. | Romper el silencio del **62%** de estudiantes. |
| **E5. Business Intelligence (Dashboard)** | Capa visual para el especialista. | Gráficos de evolución, alertas de riesgo, triaje prioritario. | Priorizar estudiantes con plan suicida activo (**1.6%**). |
| **E6. Sistema de Telemedicina** | Canal de intervención directa. | Programación de sesiones, videollamadas y agenda. | Facilitar acceso al **16%** que busca ayuda profesional. |
| **E7. Engagement y Notificaciones** | Conexión con el tratamiento. | Recordatorios push, alertas de sesiones y de riesgo. | Evitar el abandono del tratamiento en universitarios. |

---

## 5. Planificación de Sprints (Roadmap)

### Sprint 1: Fundaciones, Auth y Seguridad (Semana 1-2)
*   **Hitos:** Google OAuth 2.0, RBAC, Base de datos relacional.
*   **Entregable:** Sistema de autenticación funcional.

### Sprint 2: Evaluación Dinámica y NoSQL (Semana 3-4)
*   **Hitos:** MongoDB para flexibilidad, constructor de cuestionarios.
*   **Entregable:** Módulo de evaluación híbrido.

### Sprint 3: Inteligencia Conversacional (Semana 5-6)
*   **Hitos:** Integración de LLM, Sentinel Engine (Detección de riesgo).
*   **Entregable:** Chatbot preventivo.

### Sprint 4: Dashboard y Analítica (Semana 7-8)
*   **Hitos:** Visualización de datos, Alertas de triaje, Notificaciones push.
*   **Entregable:** Panel administrativo profesional.

### Sprint 5: Telemedicina y Cierre (Semana 9-10)
*   **Hitos:** Agenda, Videollamadas (WebRTC), QA Final.
*   **Entregable:** Sistema completo listo para producción.

---

## 6. Matriz de Priorización y Mapeo 

### Análisis de Riesgo vs. Importancia

| Sprint | Enfoque | Riesgo Técnico | Importancia Clínica |
| :--- | :--- | :--- | :--- |
| **S1** | Infraestructura | Media | Alta (Privacidad) |
| **S2** | Flexibilidad de Datos | Alta (MongoDB) | Media (Tamizaje) |
| **S3** | Inteligencia Artificial | **Muy Alta** | **Crítica (Prevención)** |
| **S4** | Gestión Clínica | Media | Alta (Seguimiento) |
| **S5** | Comunicación | Alta (WebRTC) | Media (Tratamiento) |

---

### Mapeo Visual: Épicas vs. Sprints

| Sprint | Épicas en las que se trabaja | Por qué se hace así |
| :--- | :--- | :--- |
| **Sprint 1** | **E1** (Acceso) + **E2** (Expediente) | Necesitamos saber quién entra y crear su ficha básica. |
| **Sprint 2** | **E3** (Cuestionarios) + **E7** (Notificaciones) | Empezamos a recolectar datos y a recordar al usuario que responda. |
| **Sprint 3** | **E4** (Chatbot) | Nos enfocamos 100% en la IA porque es el riesgo técnico más alto. |
| **Sprint 4** | **E5** (Dashboard) + **E4** (Ajustes IA) | El especialista ya puede ver lo que la IA detectó en el sprint anterior. |
| **Sprint 5** | **E6** (Telemedicina) + Cierre de todas | Habilitamos las citas y cerramos flecos de seguridad. |

@idea: Considerar el uso de WebRTC con servicios como Twilio o Agora para el Sprint 5 para reducir la complejidad técnica del manejo de streams de video.
