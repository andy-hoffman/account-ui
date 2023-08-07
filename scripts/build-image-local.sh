#! /bin/bash

. scripts/env.sh


echo "Building $DESTINATION"
echo "Service: $SERVICE"


docker buildx build -t $DESTINATION/$SERVICE-server:$VERSION  --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_ed25519)" --build-arg SSH_PUBLIC_KEY="$(cat ~/.ssh/id_ed25519.pub)" --push --target server  .
docker buildx build -t $DESTINATION/$SERVICE-handlers:$VERSION  --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_ed25519)" --build-arg SSH_PUBLIC_KEY="$(cat ~/.ssh/id_ed25519.pub)" --push --target handlers  .
