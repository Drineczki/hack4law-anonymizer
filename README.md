# Drineczki Template

## Overview

Template for future projects, consisting of:

- NodeJS API with NestJS framework
- Python API with FastApi framework
- Java API with Spring Boot framework
- Postgres with initial queries and PG Admin
- React Client
- Flutter Client

## Requirements

- Docker installed
- Flutter dependencies and android emulator for running flutter aps

## Getting started

To start the development server use:

```
docker-compose up
```

To rebuild containers on startup use:

```
docker-compose up --build
```

To rebuild containers from scratch use:

```
docker-compose up --build --no-cache
```

To run or build single container use:

```
docker-compose [run/build] [container name]
```

## Known Issues:

- Spring hot-reload not working on windows - use ./recompile after changes
- Flutter is not connected to docker - to be done

## Java API run
* `cd java-api`
* `sudo chmod +x ./gradlew`
* `./gradlew bootRun`