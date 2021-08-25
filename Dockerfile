FROM node:16.7.0

WORKDIR /app

COPY package*.json ./ 

COPY . .

RUN npm install

CMD ["node", "src/index.js"]