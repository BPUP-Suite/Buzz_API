FROM node:16
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "src/index.js"]