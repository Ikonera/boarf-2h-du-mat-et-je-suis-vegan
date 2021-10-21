FROM node:lts-bullseye as build
LABEL maintainer="Gabriel MILLET" contact="gabrielmlt@protonmail.ch"

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production

COPY . /frontend
WORKDIR /frontend

RUN npm i --production
RUN npm run build


FROM nginx:latest

COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]