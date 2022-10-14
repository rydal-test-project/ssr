FROM node:14.12.0-alpine

WORKDIR /usr/app

COPY . .

RUN npm i
RUN npm rebuild node_sass

RUN echo 'npm run prod:launch:server' > entrypoint.sh

RUN chmod +x entrypoint.sh


VOLUME /usr/app

EXPOSE 8080


ENTRYPOINT './entrypoint.sh'
