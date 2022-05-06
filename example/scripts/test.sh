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

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

#TODO:- run script with nvm use/ facing issues with yarn test working with npm run test
# script to be added
#unset PREFIX
# . ~/.nvm/nvm.sh
# nvm install v14.19.0
# nvm use

if [ $# -eq 0 ]
  then
    jest --config jest-ios.config.js --silent
    jest --config jest-android.config.js --silent
    NODEVERSION=$(node -v)
    echo "you are using node version $NODEVERSION"
    if [ $NODEVERSION != "v14.19.0" ]
      then
        echo "${red}Error! Node module v14.19.0 is not present or nvm is not installed
        ${green}If you have node v14.19.0 run 'nvm use'
        Else run 'nvm install v14.19.0'${reset} "
      else
        jest --silent
    fi 
    
  else
    echo "Tests will be updated!"
    jest --config jest-ios.config.js -u --silent
    jest --config jest-android.config.js -u --silent
      NODEVERSION=$(node -v)
    echo "you are using node version $NODEVERSION"
    if [ $NODEVERSION != "v14.19.0" ]
      then
        jest -u --silent
        echo "${red}Error! Node module v14.19.0 is not present or nvm is not installed
        ${green}If you have node v14.19.0 run 'nvm use'
        Else run 'nvm install v14.19.0'${reset} "
      else
        jest -u --silent
    fi 
    
fi

yarn install  --check-files