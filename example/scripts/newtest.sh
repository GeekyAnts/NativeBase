#!/bin/bash

# jest --config jest-ios.config.js --silent
# jest --config jest-android.config.js --silent
# NODEVERSION=$(node -v)
# echo "you are using node version $NODEVERSION"
# if [ $NODEVERSION != "v14.19.0" ]
#   then
#     echo "${red}Error! Node module v14.19.0 is not present or nvm is not installed
#     ${green}If you have node v14.19.0 run 'nvm use'
#     Else run 'nvm install v14.19.0'${reset} "
#   else
jest --silent
# fi 

  