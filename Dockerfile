FROM node:alpine
WORKDIR /usr/app
COPY package.json ./ package-lock.json ./
COPY ./ ./
RUN apk add --no-cache bash 
RUN chmod +x ./env.sh

ENTRYPOINT ["npm", "start"]
