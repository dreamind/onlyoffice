#!/usr/bin/env bash
set -e
node ${BASE_DIR}/reconfig.js
export NODE_CONFIG_DIR=${BASE_DIR}/config && node bin/www

