# Usar uma imagem base do OpenJDK para a fase de execução
#FROM openjdk:17-jdk-slim

# Definir o diretório de trabalho dentro do container
#WORKDIR /app

# Copiar o arquivo jar para o diretório de trabalho no container
#COPY target/InkIspireApi-0.0.1-SNAPSHOT.jar app.jar

# Expor a porta que a aplicação Spring Boot irá rodar
#EXPOSE 8080

# Definir o comando de inicialização do container
#ENTRYPOINT ["java", "-jar", "app.jar"]

FROM eclipse-temurin:17.0.8.1_1-jdk-jammy
COPY . .
RUN ./mvnw clean install -DskipTests
ENTRYPOINT ["java", "-jar", "target/InkIspireApi-0.0.1-SNAPSHOT.jar app.jar"]