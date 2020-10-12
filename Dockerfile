FROM node:14-buster
WORKDIR /caturday-be
COPY package.json package-lock.json ./
RUN npm install --only=prod
COPY . .
CMD ["node", "src/index.js"]