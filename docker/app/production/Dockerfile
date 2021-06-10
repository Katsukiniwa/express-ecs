# https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

FROM node:16-slim

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build

CMD npm run start