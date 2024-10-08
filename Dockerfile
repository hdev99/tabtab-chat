FROM node:16.15.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install

COPY . /usr/src/app
EXPOSE 8080
CMD [ "yarn", "start" ]
