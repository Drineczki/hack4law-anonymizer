# Base image
FROM node:alpine

# Setting up workdir
WORKDIR '/app'

# Copying dependency files
COPY './package.json' '.'
COPY './package-lock.json' '.'

# Installing dependencies
RUN npm install

# Copy source code
COPY '.' '/app'
COPY './.env.prod' '/app/.env'

ENV NODE_ENV=production

# Building optimized build
RUN npm run build

# Specifying startup command
CMD ["npm", "start"]