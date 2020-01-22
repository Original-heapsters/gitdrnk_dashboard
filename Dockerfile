FROM node:12.2.0-alpine as build

RUN npm install webpack -g

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install --silent

COPY . .

RUN npm run build-prod

FROM nginx:1.13.12-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
