#!/bin/sh
PLOP_BIN="./node_modules/.bin/plop"
PLOP_FILE="./node_modules/react-components-cli/plopfile.js"

${PLOP_BIN} --plopfile ${PLOP_FILE} "$@"
