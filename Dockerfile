FROM node:10.10.0-alpine

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install app dependencies
COPY package.json /usr/src/
COPY package-lock.json /usr/src/

RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    && npm install \
    && apk del .gyp
RUN npm config set unsafe-perm true

# Bundle app source
COPY . /usr/src
ENV NODE_ENV "production"
ENV BABEL_ENV "production"
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]