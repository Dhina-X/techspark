# Backend Stage
FROM maven:3.8.6-openjdk-11 as backend
WORKDIR /app
COPY backend .
RUN mvn package

# Frontend Stage
FROM node:18 as frontend
WORKDIR /app
COPY frontend .
RUN npm install
RUN npm run build

# Final Image
FROM openjdk:11-jre
WORKDIR /app
COPY --from=backend /app/target/*.jar app.jar
COPY --from=frontend /app/dist /app/public
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
