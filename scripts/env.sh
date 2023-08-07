#! /bin/bash

export ARTIFACT_REPO="us-central1-docker.pkg.dev/shared-svcs-artifacts-prod/circonus"
export VERSION=`yq .version.serviceVersion < version.yaml`
export SERVICE=`yq .service.name < version.yaml`
export DESTINATION=$ARTIFACT_REPO
