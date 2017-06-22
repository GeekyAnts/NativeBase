
# Contributing to NativeBase

Thank you for your interest in contributing to the [NativeBase](http://nativebase.io/) project!

In favor of active development, we accept contributions from everyone. NativeBase team is constantly marking issues and features that the community can implement. You can contribute by submitting a bug, creating pull requests or even by improving documentation. Beneath is the manual to be accompanied strictly earlier than submitting your pull requests / issues.

Take a look at [NativeBase on StackOverflow](http://stackoverflow.com/questions/tagged/native-base)


## Manual

1. [Coding Style](#1-coding-style)
2. [Git Flow](#2-git-flow)
	- [Reporting Bugs](#a-reporting-bugs)
    - [Request for New Feature](#b-request-for-new-feature)
    - [Code Fixes and Enhancements](#c-code-fixes-and-enhancements)
3. [Development Environment](#3-development-environment)


### 1. Coding Style

To keep project away from disputes we make use of **ESLint**, which is really a handy linting tool that enforces strict coding styles and makes sure your files are free from dead code. Each module of NativeBase has bundled ESLint as a dev dependency.

In order to lint your code run following command. 

```
cd AwesomeNativeBase

npm install eslint
```


### 2. Git Flow

NativeBase is an infant and growing rapidly, so we planned to stick to Git Flow. Below are the rules you need to follow:

#### a. Reporting Bugs

-	Always update to the most recent `master` release; the bug may already be resolved.
-	Search for similar issues in the issues list for this repo. It may already be an identified problem.
-	If you want to contribute to an issue that is not part of this list, you are welcome to submit [new issue](https://github.com/GeekyAnts/NativeBase/issues/new) to our GitHub Repository.
	-	In that case, provide a short description of the visible symptoms. Include error messages, screen shots, and stack traces.
	-	If applicable, submit a step-by-step walkthrough of how to reproduce the issue.
-	In any case, a **closed issue** is not necessarily the end of the story! If more info becomes available after an issue is closed, it can be reopened for further consideration.


#### b. Request for New Feature

-	Use [Github Issues](https://github.com/GeekyAnts/NativeBase/issues) to submit feature requests.
-	Search for a similar request and extend it if applicable. This way it would be easier for the NativeBase community to track the features.
-	When a fresh new feature is requested, try to give as many details on your need as feasible. We prefer that you explain the need rather than explaining a technical solution for it. That might trigger a nice conversation on finding the best and broadest technical solution to a specific need.


#### c. Code Fixes and Enhancements

-	Before submitting a pull request, we appreciate if you create an issue first to discuss the change.
-	Fork the repo you are planning to work on.
-	Create a new branch from branch `master`.
    -  Example: `my-new-feature`
    -  Note: Please have your branch named apart from `master` and `development`.
-	Work on your branch until you are confident enough to create a pull request.
-	Conclude working on your branch and push to your forked repo.
-	Create a pull request of your branch to NativeBase repo `master` branch.
-	Provide a short description of the necessity and functionality of your PR. Include a step-by-step walkthrough of it with an use case example.
-	Link the issues that are related to your PR in the body.
-	If you have perfectly accompanied our contribution guide and that if your new feature / bug fixes sounds good to us, then we will merge the changes and you are free to delete your branch.
-	After your contribution is merged, it’s not immediately available to all users. Your change will be shipped as part of the next release.

Check the procedure to setup the Development Environment for NativeBase.

**Note:** NativeBase changes a lot and is in constant mutation. We usually merge multiple PRs per day, so sometimes when we are done reviewing, your code might not work with the latest `master` branch anymore. To prevent this, before you make any changes after your code has been reviewed, you should always rebase the latest changes from the `master` branch.


### 3. Development Environment

-	Clone NativeBase

	```
	git clone git@github.com:GeekyAnts/NativeBase.git
	```
  
-	Init new app to test NativeBase
  
	```
	react-native init NativeBaseTestApp
	```
  
-	Navigate to your app

	```
	cd NativeBaseTestApp
	```
   
-	Add `native-base` to the project
  
	```
	npm i --save native-base
	```

	The reason we are installing `native-base` is to install its dependencies into NativeBaseTestApp.
  
-	Delete `/node_modules/native-base` from NativeBaseTestApp
  
	```
	rm -rf /node_modules/native-base
	```
  
-	Install `wml` globally
  	
  	```
	npm install -g wml
	```
	
	A lot of people get messed up while working directly from the node_modules folder.

	Wml makes use of Facebook's ultra-fast Watchman to watch for changes in your source folder and copy them (and only them) into your destination folder.

	Wml is a CLI tool that works pretty much like `ln -s`. You first set up your links (wml add) and then run the wml service (wml start) to start listening.
  
-	Add link of `NativeBase` repo cloned earlier to your app i.e., NativeBaseTestApp
   
	```
	wml add ../NativeBase node_modules/native-base
	```
   
-	Run wml in NativeBase folder
  
	```
	wml start
	```
  
-	Run your NativeBaseTestApp
  
	```
	react-native link

	react-native run-ios

	react-native run-android
	```
  
-	In NativeBase's `package.json`, modify `main` from `dist/src/index.js` to `src/index.js` before you start with the development.

-	Add new components / do changes in NativeBase repo which will be reflected in the native-base created in `node_modules` through the wml link.

-	Once done with the development / changes, from NativeBase repo run the following before you push or send a PR.
  
	```
	npm install

	npm run transpile
	```
  
-	Revert back the changes done to `package.json`.

You are now ready to send PR to NativeBase!



