FROM node:20-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY --chown=node:node index.js /app
COPY --chown=node:node controllers /app/controllers
COPY --chown=node:node routes /app/routes


USER node

CMD ["node", "index.js"]

EXPOSE 5000