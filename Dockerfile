FROM node:20-alpine AS base

# 1. Instalar dependencias solo cuando sea necesario
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de configuración del monorepo
COPY package.json package-lock.json* ./
COPY apps/web/package.json ./apps/web/
COPY packages/database/package.json ./packages/database/

# Instalar dependencias
RUN npm install

# 2. Reconstruir el código fuente solo cuando sea necesario
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generar el cliente de Prisma dentro del contenedor
RUN npx prisma generate --schema=packages/database/prisma/schema.prisma

# 3. Imagen de desarrollo
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=development

# Copiar todo el código y las dependencias instaladas
COPY --from=builder /app ./

EXPOSE 3000

# El comando por defecto inicia el modo desarrollo del workspace web
CMD ["npm", "run", "dev", "--workspace=web"]
