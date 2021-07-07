# https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

FROM node:16-slim

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV HOST 0.0.0.0

COPY package*.json /app

RUN apt-get update -y && \
  apt-get upgrade -y && \
  apt-get install -y \
  libssl-dev && \
  npm install npm@latest && \
  npm install

RUN npx prisma introspect

COPY . /app

RUN npm run build

CMD npm run start