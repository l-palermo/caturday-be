FROM node:14-buster
WORKDIR /src
COPY . .
RUN yarn install
CMD ["yarn", "start"]