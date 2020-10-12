FROM node:12.16-alpine as builder
WORKDIR /build
COPY . .
RUN rm -rf node_modules && npm i
RUN npm build

FROM node:12.16-alpine
COPY --from=builder /build/node_modules/ ./node_modules
COPY --from=builder /build/app/ ./app
COPY --from=builder /build/package.json .
COPY --from=builder /build/proto ./proto
CMD ["node", "app/index.js"]
