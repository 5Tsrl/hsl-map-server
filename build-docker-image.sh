#!/bin/bash

# Set these environment variables
DOCKER_TAG=0.1
DOCKER_EMAIL=aguiraf@gmail.com
DOCKER_USER=aguiraf
#DOCKER_AUTH=

# Build image
SNAP_IMAGE="5tdev/matp-server:$DOCKER_TAG"
LATEST_IMAGE="5tdev/matp-server:latest"

docker build --tag=$SNAP_IMAGE .
docker login -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_AUTH
docker push $SNAP_IMAGE
docker tag  $SNAP_IMAGE $LATEST_IMAGE
docker push $LATEST_IMAGE
