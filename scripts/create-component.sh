#!/bin/sh
LODASH_DIR=`npm root`/lodash
REACT_COMPONENT_CLI=`npm root`/react-components-cli

if [ ! -d $LODASH_DIR ]; then
    echo "Installing lodash.."
    yarn global add lodash
fi

if [ ! -d $PLOP_DIR ]; then
    echo "Installing plop.."
    yarn global add plop
fi

plop --plopfile ${REACT_COMPONENT_CLI}/plopfile.js "$@"
