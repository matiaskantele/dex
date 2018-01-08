FROM node:carbon-alpine

LABEL maintainer="matias.kantele@siili.com"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080

ENTRYPOINT [ "yarn", "start" ]

