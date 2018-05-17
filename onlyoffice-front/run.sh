#!/usr/bin/env bash
BASEDIR="$(cd "$(dirname "$0")" && pwd)"
echo $BASEDIR

echo "Install nodejs modules "
npm install

echo "Run server  "
export NODE_CONFIG_DIR=$BASEDIR/config && export NODE_ENV=development && node bin/www