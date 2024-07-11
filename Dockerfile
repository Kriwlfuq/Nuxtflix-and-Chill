ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install --force
RUN npm run build
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]