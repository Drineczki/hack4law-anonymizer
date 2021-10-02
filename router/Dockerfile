FROM node:alpine

ARG PYTHON_API_PORT
ENV PYTHON_API_PORT $PYTHON_API_PORT

ARG JAVA_API_PORT
ENV JAVA_API_PORT $JAVA_API_PORT

ARG NODE_API_PORT
ENV NODE_API_PORT $NODE_API_PORT

ARG REACT_CLIENT_PORT
ENV REACT_CLIENT_PORT $REACT_CLIENT_PORT

WORKDIR /app

COPY ./scripts/build_config.js .
COPY ./config.json .

RUN ls -alt
RUN cat ../.dockerenv

RUN node ./build_config.js

FROM nginx

COPY --from=0 /app/default.conf /etc/nginx/conf.d/default.conf