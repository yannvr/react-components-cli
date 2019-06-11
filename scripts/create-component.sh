#!/bin/sh
LODASH_DIR=`yarn global dir`/node_modules/lodash
REACT_COMPONENT_CLI=`yarn global dir`/node_modules/react-components-cli

echo $LODASH_DIR
echo $PLOP_DIR

if [ ! -d $LODASH_DIR ]; then
    echo "Installing lodash.."
    yarn global add lodash
fi

if [ ! -d $PLOP_DIR ]; then
    echo "Installing plop.."
    yarn global add plop
fi

echo ${REACT_COMPONENT_CLI}/plopfile.js

plop --plopfile ${REACT_COMPONENT_CLI}/plopfile.js "$@"
