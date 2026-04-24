# Arquitectura: Model-View-ViewModel (MVVM)
Aplicación React Native / Expo centrada en la experiencia del paciente.

Estructura:
- `models/`: Definiciones de tipos (importadas del monorepo) y configuración de React Query para gestión de estado remoto.
- `views/`: Componentes UI y pantallas presentacionales.
- `viewmodels/`: Custom Hooks que contienen la lógica de presentación y consumen las APIs del orquestador (`apps/api`).
