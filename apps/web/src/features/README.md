# Feature-Sliced Design (FSD)

Cada feature es un slice auto-contenido del panel del psicólogo. Solo se importa
desde su `index.ts` (API pública). Estructura por slice:

```
<feature>/
  ui/      componentes presentacionales
  model/   estado, tipos, lógica de vista
  api/     llamadas al BFF vía shared/api/client.ts
  index.ts API pública del slice
```

## Slices (alineados al spec MindCare — panel web del psicólogo)

| Slice            | Función del spec                                             |
| ---------------- | ----------------------------------------------------------- |
| `auth`           | Login del especialista (Google @unmsm.edu.pe)               |
| `waiting-list`   | Lista de espera con semáforo (riesgo alto / "Muy mal" arriba) |
| `student-file`   | Ficha: gráficos de ánimo, resumen del chatbot, resultados de encuestas |
| `session-notes`  | Notas privadas de cada sesión                               |
| `survey-builder` | Creador de cuestionarios para enviar a la app del alumno    |

Los datos se obtienen del orquestador (`apps/api`) a través de
`src/shared/api/client.ts`; el panel no toca la base de datos directamente.
