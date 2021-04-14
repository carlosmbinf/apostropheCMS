FROM node:latest

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Bundle app source
COPY . /app
RUN npm install

# Mount persistent storage
VOLUME /app/data
VOLUME /app/public/uploads

# Add the environment variable 
# to copy files rather than use symlinks
ENV APHE_BASE_URL=http://localhost:3000 \
    FUSIONAUTH_URL=http://localhost:9011 \
    MONGODB_TCP_ADDR=mongo \
    MONGODB_TCP_PORT=27017 \
    APOS_ALWAYS_COPY_ASSETS=1

EXPOSE 3000
CMD [ "npm", "start" ]
