FROM alpine
RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN apk add git
WORKDIR /home
CMD git clone https://github.com/Terceramayor/node.git && cd node && npm install && npm test && node index.js