#!/bin/sh
PLOP="./node_modules/react-styled-component-generator/node_modules/.bin/plop"
PLOP_FILE="./node_modules/react-styled-component-generator/plopfile.js"

${PLOP} --plopfile ${PLOP_FILE} "$@"
