#! /bin/bash

helm dependency build ./deploy/account-shared-api
helm upgrade --install -n account account ./deploy/account-control-api -f ./deploy/account-control-api/values.yaml
