# Besthingscms
Is Apostrophe Boilerplate with fusionauth authentication support.

## Configuration for Fusionauth Identity Provider
apostrophe-passport works together with passport-fusionaauth and similar passport strategy modules to let users log in to Apostrophe CMS sites via Fusionauth and other authentication providers. This feature is often called federation or single sign-on.
```javascript
  // in app.js
  
  // YOU MUST CONFIGURE baseUrl. For local dev testing
  // you can set it to http://localhost:3000, for production
  // it must be real
  
  baseUrl: 'http://myproductionurl.com',
  
  modules: {
    'apostrophe-passport': {
      strategies: [
        {
          // fusionauth login
          module: 'passport-fusionauth',
          options: {
            // Options for passport-fusionauth
            authorizationURL: 'https://fusionauth_site/oauth2/authorize',
            tokenURL: 'https://fusionauth_site/oauth2/token',
            userProfileURL: 'https://fusionauth_site/api/user/',
            clientID: 'xxxxx',
            clientSecret: 'yyyyy',
            callbackURL: '/auth/oauth2/callback',
            passReqToCallback: false,
            response_type: 'code',
            skipUserProfile: false
          }
        }
      ]
    }
  }
```
## Passing enviroment variables to besthings container
The file var.env contain all the enviroment variables that configure the conexion with fusionauth service and mongodb database. 
```
APHE_BASE_URL=http://localhost:3000 
FUSIONAUTH_URL=https://auth.vrewardsapps.com
CLIENT_ID=/run/secrets/client_id
CLIENT_SECRET=/run/secrets/client_secret
MONGODB_TCP_ADDR=mongo
MONGODB_TCP_PORT=27017
APOS_ALWAYS_COPY_ASSETS=1
```
The docker-compose.yml file use this file and pass to besthings container this variables. This is a good practice. In this way all the configuration is in an external file and not in the application code.

```yml
    env_file:
      - var.env
```
## Managing client_id and client_secret
The client_id and client_secret is a sensitive information that is not recomended put on enviroment variables to passing to besthings container. The secure way to manage this information is the docker secrets. When we deploy besthings service we attach the secret to them.
```yml
  besthingscms:
    ...
    secrets:
      - client_id
      - client_secret
    restart: always

secrets:
  client_id:
    file: ./client_info/clientID.txt
  client_secret:
    file: ./client_info/clientSecret.txt
```
## Building docker image
You will need the following things properly installed on your computer.

* [Docker](http://www.docker.com/)

Now that we have a Dockerfile, it's time to build an image for your project. You can do this with docker-compose build.

```bash
$ cd ~/Projects/besthingscms
$ docker-compose build
```
## Docker Swarm
We use docker secrets to send sensitive information to container. For that reason we need to run docker engine in swarm mode. Swarm is the cluster manager integrated with docker engine since 1.12.0 version. To init docker in swarm mode use this:

```bash
$ docker swarm init
```
## Run containers with docker-compose
To run containers with docker-compose:
```bash
$ docker-compose up -d
```
To stop the docker-compose services:
```bash
$ docker-compose down
```
## Deploy docker stacks
To deploy the containers with docker in swarm mode we can use docker stack. Stacks allow for multiple services, which are containers distributed across a swarm, to be deployed and grouped logically. To get a stack up and running just requires a docker-compose file.

## Deploy besthings stack
We're almost ready to deploy a new stack called besthings

```bash
$ docker stack deploy -c docker-compose.yml besthings
```
Check that your services are deployed:
```bash
$ docker service ls
```
this is the output:
```bash
ID              NAME                     MODE          REPLICAS    IMAGE                 PORTS
xpsqdnzc0zar    besthings_besthingscms   replicated    1/1         besthingscms:latest   *:3000->3000/tcp
dql5axsdexcs    besthings_mongo          replicated    1/1         mongo:latest          *:27017->27017/tcp
```
