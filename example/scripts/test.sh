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
    jest --config jest-ios.config.js
    jest --config jest-android.config.js
  else
    jest --config jest-ios.config.js -u
    jest --config jest-android.config.js -u
fi

yarn install  --check-files