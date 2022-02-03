FROM alpine
RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN apk add git
RUN mkdir myfolder
COPY . /myfolder 
# RUN cd /myfolder/ && git clone https://github.com/Terceramayor/node.git && npm install
# CMD cd /myfolder/node && node index && npm test

CMD cd /myfolder && git clone https://github.com/Terceramayor/node.git && cd /myfolder/node && npm install && node index && npm test