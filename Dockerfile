FROM alpine:latest AS base

RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY package.json .

FROM base AS dependencies

# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production

FROM base AS release

# copy production node_modules
COPY --from=dependencies /app/node_modules ./node_modules

# copy app sources
COPY . .

# expose port and define CMD
EXPOSE 3000
CMD export LISTEN=0.0.0.0 && npm run start
