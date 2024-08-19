docker-compose down

docker build -t backend-inkispire:latest ./API

docker build -t frontend-inkispire:latest ./frontend

docker-compose up --build --force-recreate --remove-orphans