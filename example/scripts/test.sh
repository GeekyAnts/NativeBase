#!/bin/bash

lowercase(){
    echo "$1" | sed "y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/"
}

OS=`lowercase \`uname\``

case "$OS" in
  msys*)    rmdir /s /q node_modules/react node_modules/react-native ;;
  cygwin*)  rmdir /s /q node_modules/react node_modules/react-native ;;
  *)        rm -fR node_modules/react node_modules/react-native ;;
esac

if [ $# -eq 0 ]
  then
    jest --config jest-ios.config.js --silent
    jest --config jest-android.config.js --silent
    jest --silent
  else
    echo "Tests will be updated!"
    jest --config jest-ios.config.js -u --silent
    jest --config jest-android.config.js -u --silent
    jest -u --silent
fi

yarn install  --check-files