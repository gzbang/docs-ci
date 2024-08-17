FROM node:18.14.1 as Builder

RUN npm install pnpm -g
RUN pnpm install
RUN pnpm build