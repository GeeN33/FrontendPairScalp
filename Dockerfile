FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY vite.config.js .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8070

CMD [ "npm", "run", "preview" ]

