FROM node:16-slim

WORKDIR /usr/src/app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV HOST 0.0.0.0

COPY package*.json ./

RUN apt-get update -y && \
  apt-get upgrade -y && \
  npm install npm@latest && \
  npm install 

COPY . .

RUN npm run build

EXPOSE 8080

CMD npm run start