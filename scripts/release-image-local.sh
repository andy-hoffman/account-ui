#! /bin/bash

. scripts/env.sh


echo "Releasing $DESTINATION"
echo "Service: $SERVICE"


docker buildx build -t $DESTINATION/$SERVICE:$VERSION --platform=linux/amd64 --push .
