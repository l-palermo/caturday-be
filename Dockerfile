FROM node:14-buster
WORKDIR /caturday-be
COPY package.json package-lock.json ./
RUN npm install --only=prod
ARG JWT_ISSUER
ENV JWT_ISSUER $JWT_ISSUER
COPY . .
CMD ["node", "src/index.js"]