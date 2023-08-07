#! /bin/bash

set +x

# This script is used to release a new version of the component charts.
# It is intended to be run from the the repo root

export HELM_REPO_URL="oci://us-central1-docker.pkg.dev/shared-svcs-artifacts-prod/circonus"

mkdir -p build/charts
cd build/charts
rm -rf *
echo "Packageing Charts"

for dir in ../../deploy/charts/*;
do
  echo "----------------------------------------"
  echo "Processing $dir"
  
  export CHART_VERSION=`yq .version < $dir/Chart.yaml`
  echo "Chart version: $CHART_VERSION"

  export LAST_RELEASE=`yq .latest < $dir/.version.yaml`

  
  if [ "$CHART_VERSION" == "$LAST_RELEASE" ]; then
    echo "Chart version $CHART_VERSION is already released. Skipping."
    continue
  fi

  helm package -u $dir
  echo "latest: \"$CHART_VERSION\"" > $dir/.version.yaml

  echo "----------------------------------------"
done

echo "Pushing Charts"
for file in *.tgz 
do
  echo "----------------------------------------"
  echo "Processing $file"
  helm push $file $HELM_REPO_URL
  cp $file ~/code/charts
done

cd ../../