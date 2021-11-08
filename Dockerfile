FROM node:14

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm i -g @nestjs/cli && npm install

COPY . .

EXPOSE 3000