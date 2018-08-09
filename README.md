# NativeBase [![](http://slack.nativebase.io/badge.svg)](http://slack.nativebase.io/) [![Build Status](https://travis-ci.org/GeekyAnts/NativeBase.svg?branch=master)](https://travis-ci.org/GeekyAnts/NativeBase) [![npm version](https://badge.fury.io/js/native-base.svg)](https://badge.fury.io/js/native-base) [![npm downloads](https://img.shields.io/npm/dt/native-base.svg)](https://npm-stat.com/charts.html?package=native-base&from=2016-04-01&to=2018-02-17)

[![NPM](https://nodei.co/npm/native-base.png?downloads=true)](https://nodei.co/npm/native-base/)

Essential cross-platform UI components for React Native

 Updated docs [here!](https://docs.nativebase.io/)

![Demo](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/iOS.gif)
![Demo](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/Android.gif)


# Table of Content

1. [What is NativeBase?](#1-what-is-nativebase)
2. [Why NativeBase?](#2-why-nativebase)
3. [KitchenSink App](https://github.com/GeekyAnts/NativeBase-KitchenSink)
4. [Getting Started](#4-getting-started)
5. [Components](#5-components)
6. [NativeBase for Web](#6-nativebase-for-web)
7. [Compatibility Versions](#7-compatibility-versions)
8. [React Native Seed](#8-react-native-seed)
9. [NativeBase Market](#9-nativebase-market)
10. [Documentation](#10-documentation)
11. [Website](#11-website)
12. [Quick Links to NativeBase](#12-quick-links-to-nativebase)
13. [About the creators](#13-about-the-creators)



## 1. What is NativeBase?
[NativeBase](https://nativebase.io/) is a sleek, ingenious and dynamic front-end framework created by passionate React Loving team at [Geekyants.com](https://geekyants.com/) to build cross platform Android & iOS mobile apps using ready to use generic components of React Native.



## 2. Why NativeBase?
What is really great with [NativeBase](https://nativebase.io/) is that you can use shared UI cross-platform components, which will drastically increase your productivity. When using NativeBase, you can use any native third-party libraries out of the box.<br />

**Recommended by** *Microsoft*
> If you're looking to get started with React Native + CodePush, and are looking for an awesome starter kit, you should check out Native Starter Pro - [Microsoft's react-native-code-push repo](https://github.com/Microsoft/react-native-code-push#example-apps--starters)

**Recommended by [Awesome React Native](https://github.com/jondot/awesome-react-native)**
>NativeBase added into the list of [Frameworks](https://github.com/jondot/awesome-react-native#frameworks) of Awesome React Native and are also used by many other React lovers across the world.


## 4. Getting Started

**a. Setup with pure React Native app**

*Install NativeBase*

```js
npm install native-base --save
```
*Install Peer Dependencies*<br />
The peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly.

```js
react-native link
```

You've successfully setup [NativeBase](https://nativebase.io/) with your [React Native](https://facebook.github.io/react-native/) app. Your React Native app is now all set to run on iOS and Android simulator.


**b. Setup with CRNA**

*Create React Native project using the CRNA cli.* <br />
CRNA helps you make React Native apps with no build configuration. Create React App works on macOS, Windows, and Linux. <br />
Refer this link for additional information [CRNA](https://github.com/react-community/create-react-native-app)

*Install NativeBase*
```js
npm install native-base --save
```
*Install @expo/vector-icons*
```js
npm install @expo/vector-icons --save
```
<br />

**Note** <br />
[NativeBase](https://nativebase.io/) uses some custom fonts that can be loaded using **loadAsync** function. Check out [this](https://docs.expo.io/versions/v15.0.0/sdk/font.html#expofontloadasyncname-url) expo link.
<br />
Syntax <br />
```js
async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
      });
```
<br />

Check out the [KitchenSink](https://expo.io/@geekyants/nativebasekitchensink) with CRNA for an example of the implementation.<br />
Find the [KitchenSink repo here](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/CRNA)

**c. Setup with ignite-native-base-boilerplate**

You can run the following command to create the boilerplate, provided you have [Ignite CLI](https://github.com/infinitered/ignite) installed.

```
ignite new appname --boilerplate native-base-boilerplate
```
Go to app location
```sh
cd appname
```
For iOS run
```sh
react-native run-ios
```
For Android run
```sh
react-native run-android
```
Refer [ignite-native-base-boilerplate](https://github.com/GeekyAnts/ignite-native-base-boilerplate) page for additional information

## 5. Components

[NativeBase](https://nativebase.io/) is made from effective building blocks referred to as components. The Components are constructed in pure [React Native](https://github.com/facebook/react-native) platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.

## 6. NativeBase for Web

NativeBase is now available for React web lovers. Check the [demo](https://nativebase.io/kitchen-sink-web-app/)
Find the repo [here](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/web-support)


## 7. Compatibility Versions

| NativeBase   |      React Native      |
|----------|-------------|
| v0.1.1	| v0.22 to v0.23 |
| v0.2.0 to v0.3.1 | v0.24 to v0.25 |
| v0.4.6 to v0.4.9 | v0.26.0 - v0.27.1 |
| v0.5.0 to v0.5.15 | v0.26.0 - v0.37.0 |
| v0.5.16 to v0.5.20 | v0.38.0 - v0.39.0 |
| v2.0.0-alpha1 to v2.1.3 | v0.38.0 to v0.43.0 |
| v2.1.4 to v2.1.5 | v0.44.0 to v0.45.0 |
| v2.2.0 | v0.44.0 to v0.45.0 |
| v2.2.1 | v0.46.0 and above |
| v2.3.0 to 2.6.1 | v0.46.0 and above *(does not support React 16.0.0-alpha.13)*|
| v2.7.0 | v0.56.0 and above |

## 8. [React Native Seed](https://reactnativeseed.com/)


React Native Seed provides you React Native starter kits for your base app with the technologies that you love.

Based on the feedback we received from our users, people had trouble sorting out the right boilerplate for them with the desired technologies and contacted us to enquire. We realized that many people were particular about the technologies they want in the app and that a minimal, neat solution was required to solve this, and hence, React Native Seed.

React Native Seed is for learners and professionals alike, those who want to experiment, learn all aspects and those who already know enough, just want a starter kit to quickly start working on their project.


## 9. NativeBase Market

Having tried with the free version, [Native Starter Kit](https://github.com/start-react/native-starter-kit) and appreciate our product?

Get on the mobile fast track with the featured apps of [NativeBase](https://nativebase.io/), to build high-quality iOS and Android mobile apps.<br />
A [marketplace](https://market.nativebase.io/) for premium React Native app themes to build high-quality iOS and Android mobile apps. <br />

## 10. Documentation

Go through [NativeBase Docs](https://docs.nativebase.io/) to play with [NativeBase](https://nativebase.io/).



## 11. Website
[https://nativebase.io/](https://nativebase.io/)



## 12. Quick Links to NativeBase

*	[NativeBase Documentation](https://docs.nativebase.io/)
*	[NativeBase Blog](https://blog.nativebase.io)
*	[NativeBase on Twitter](https://twitter.com/NativeBaseIO)
*	[NativeBase on FaceBook](https://www.facebook.com/nativebaseio/)


## 13. About the creators

We are [GeekyAnts](https://geekyants.com/), a startup based in Bangalore, India with 50+ developers in strength. We have been very active in the React / React Native community where we have developed [StrapUI](https://www.strapui.com/) and [StartReact](https://startreact.com/). Our other products include [StartLaravel](http://startlaravel.com) and [StartAngular](http://startangular.com).

Another major project by us is [BuilderX](https://builderx.io/?utm_source=github&utm_medium=nativebase&utm_campaign=nativebase), a screen design tool which codes React Native for you.
