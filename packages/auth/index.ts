import type { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma, Role } from "@marcheli/database";

// Dominio institucional permitido (configurable por entorno). Solo correos
// @unmsm.edu.pe pueden iniciar sesión.
const ALLOWED_DOMAIN = process.env.ALLOWED_EMAIL_DOMAIN ?? "unmsm.edu.pe";

/**
 * Configuración única de NextAuth para todo el ecosistema MindCare.
 * La consumen el panel web (apps/web) y el orquestador (apps/api) usando el
 * mismo NEXTAUTH_SECRET, de modo que el JWT del estudiante (móvil) y del
 * psicólogo (web) son válidos en ambos.
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Restringe el acceso al dominio institucional UNMSM.
    async signIn({ user }) {
      const email = user.email ?? "";
      return email.toLowerCase().endsWith(`@${ALLOWED_DOMAIN}`);
    },
    async jwt({ token, user }) {
      if (user) {
        // El rol por defecto es STUDENT (schema). El aprovisionamiento de
        // SPECIALIST/ADMIN se hará en una iteración posterior.
        token.role = (user as any).role ?? Role.STUDENT;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Redirigir por defecto al dashboard del estudiante si no hay un destino específico
      if (url === baseUrl || url === `${baseUrl}/`) {
        return `${baseUrl}/dashboard/student`;
      }
      // Permitir URLs relativas dentro del mismo sitio
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      // Permitir URLs del mismo origen
      if (new URL(url).origin === baseUrl) {
        return url;
      }
      return `${baseUrl}/dashboard/student`;
    },
  },
};

/**
 * Helper RBAC reutilizable por web y api. Lanza si la sesión no tiene un rol
 * permitido. Devuelve el rol cuando la verificación pasa.
 */
export function requireRole(
  session: Session | null,
  roles: Role[]
): Role {
  const role = (session?.user as any)?.role as Role | undefined;
  if (!role || !roles.includes(role)) {
    throw new Error("FORBIDDEN");
  }
  return role;
}

export { Role };
