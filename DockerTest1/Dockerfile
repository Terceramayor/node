FROM alpine
RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN mkdir myfolder
COPY index.js /myfolder 
CMD node /myfolder/index.js

