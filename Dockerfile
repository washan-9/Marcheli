FROM --platform=linux/amd64 node:20-slim AS builder

WORKDIR /app

# Instalar openssl, que es necesario para Prisma en Debian/Ubuntu
RUN apt-get update && apt-get install -y openssl

# Copiar todo el código
COPY . .

# Instalar dependencias
RUN npm install

# Generar el cliente de Prisma dentro del contenedor
RUN npx prisma generate --schema=packages/database/prisma/schema.prisma

# Imagen de desarrollo
FROM --platform=linux/amd64 node:20-slim AS runner
WORKDIR /app

# Instalar openssl para el entorno de runtime también
RUN apt-get update && apt-get install -y openssl

ENV NODE_ENV=development

# Copiar todo el código y las dependencias instaladas
COPY --from=builder /app ./

EXPOSE 3000
EXPOSE 3001

# El comando por defecto sincroniza la base de datos (Prisma) y luego levanta web y api
CMD ["sh", "-c", "npx prisma db push --schema=packages/database/prisma/schema.prisma --accept-data-loss && npm run dev -w apps/api & npm run dev -w apps/web & wait"]
