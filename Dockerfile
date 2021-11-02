FROM node:16

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN yarn

COPY . /usr/src
RUN yarn build

CMD ["yarn", "start"]