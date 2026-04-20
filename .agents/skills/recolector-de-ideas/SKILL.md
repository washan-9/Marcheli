---
name: recolector-de-ideas
description: "Centraliza y gestiona el conocimiento, visiones e ideas del proyecto en un repositorio accesible para la IA (.brain/)."
---

# Recolector de Ideas

Esta habilidad permite capturar el "alma" del proyecto, extrayendo ideas dispersas en el código y documentos específicos para consolidarlas en un repositorio central que sirve como memoria a largo plazo para cualquier IA que trabaje en el proyecto.

## Cuándo usar
- Cuando tengas una nueva idea de funcionalidad o arquitectura.
- Al inicio de una sesión de trabajo para "poner al día" a la IA con el estado actual de las ideas.
- Para documentar decisiones críticas de forma rápida sin salir del flujo de trabajo.

## Cómo usar

### 1. Documentar una Idea
Tienes dos formas de registrar conocimiento:

- **Archivos de Idea:** Crea un archivo con extensión `.idea.md` en cualquier lugar del proyecto. Puedes usar la plantilla en `resources/plantilla_idea.md`.
- **Comentarios en Código:** Añade un comentario en cualquier archivo de código usando el prefijo `@idea:`.
  ```python
  # @idea: Implementar caché de Redis para las consultas pesadas
  ```

### 2. Recolectar Conocimiento
Ejecuta el script de recolección para actualizar el "cerebro" del proyecto:
```bash
python3 .agents/skills/recolector-de-ideas/scripts/recolectar_ideas.py
```

### 3. Acceso de la IA
Una vez ejecutado, se creará una carpeta `.brain/` en la raíz del proyecto. 
**Importante:** Siempre que me pidas analizar el proyecto o proponer mejoras, recuérdame que consulte el archivo `.brain/BRAIN_MANIFEST.md`.

## Estructura del Repositorio (.brain/)
- `BRAIN_MANIFEST.md`: Índice principal de todo el conocimiento recolectado.
- `ideas/`: Copias de todos los archivos `.idea.md` encontrados, renombrados para evitar colisiones.

## Recomendaciones
- Usa etiquetas en tus ideas (ej: #urgente, #futuro) para ayudar a la IA a priorizar.
- Ejecuta la recolección después de cada lluvia de ideas o cambios arquitectónicos.
