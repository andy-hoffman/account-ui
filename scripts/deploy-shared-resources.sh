#! /bin/bash

helm dependency build ./deploy/account-shared-resources
helm upgrade --install -n account account ./deploy/account-shared-resources -f ./deploy/account-shared-resources/values.yaml
