FROM node:12.20.1-alpine

WORKDIR /app

RUN apk update && apk upgrade

EXPOSE 5000

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 5000

CMD npm install && npm run dev
