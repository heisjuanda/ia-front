FROM node:18.17.1-alpine

RUN npm install -g http-server

RUN mkdir /app

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "http-server", "dist" ]

## Commands
# docker build -t IA-FRONT .

# docker images
# docker run -p 5000:5173 IA-FRONT (localhost:5000)