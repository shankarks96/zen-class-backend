# Stage 1: Build
FROM node:latest AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:latest
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm install --production

EXPOSE 3000
CMD ["node", "server.js"]
