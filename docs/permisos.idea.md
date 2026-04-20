# Sistema de Gestión de Permisos

**Fecha:** 2026-04-19
**Estado:** Propuesta
**Etiquetas:** #backend, #seguridad

## Resumen
Implementar un sistema de RBAC (Role-Based Access Control) robusto.

## Descripción Detallada
Necesitamos que los usuarios tengan roles específicos (Admin, Editor, Visor) para proteger las rutas de la API de gestión.
@idea: Usar JWT con claims de roles para evitar consultas constantes a la DB.
