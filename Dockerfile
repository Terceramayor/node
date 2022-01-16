FROM alpine
RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN apk add git
RUN git clone https://github.com/Terceramayor/node.git home/node
WORKDIR /home/node
CMD npm install && npm test
