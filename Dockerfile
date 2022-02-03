FROM alpine
RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN apk add git
RUN mkdir myfolder
COPY . /myfolder 
RUN cd /myfolder/ && git clone https://github.com/Terceramayor/node.git && npm install
CMD cd /myfolder/node && node index.js && npm test