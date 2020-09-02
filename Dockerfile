FROM node:14-buster
WORKDIR /caturday-be
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
CMD ["npm", "start"]