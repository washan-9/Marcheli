// La configuración de autenticación vive en el paquete compartido
// @marcheli/auth (fuente única para web y api). Se re-exporta aquí para no
// romper los imports existentes (@/lib/auth).
export { authOptions, requireRole, Role } from "@marcheli/auth";
