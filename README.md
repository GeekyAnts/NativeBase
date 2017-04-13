# NativeBase [![Build Status](https://travis-ci.org/GeekyAnts/NativeBase.svg?branch=master)](https://travis-ci.org/GeekyAnts/NativeBase) [![npm version](https://badge.fury.io/js/native-base.svg)](https://badge.fury.io/js/native-base)
[![NPM](https://nodei.co/npm/native-base.png?downloads=true)](https://nodei.co/npm/native-base/)

[![NPM](https://nodei.co/npm-dl/native-base.png?height=2)](https://nodei.co/npm/native-base/)

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
6. [Native Starter Kit](#6-native-starter-kit)
7. [Featured Apps](#7-featured-apps)
  - [Native Starter Pro](#a-native-starter-pro---v600)
  - [Ecommerce Starter](#b-ecommerce-starter---v510)
  - [Flat App Theme](#c-flat-app-theme---v510)
  - [Taxi App with Backend](#d-taxi-app-with-backend---v400)
  - [Dating App Theme](#e-dating-app-theme---v100)
8. [Documentation](#8-documentation)
9. [Website](#9-website)
10. [Quick Links to NativeBase](#10-quick-links-to-nativebase)
11. [About the creators](#11-about-the-creators)



## 1. What is NativeBase?
[NativeBase](https://nativebase.io/) is a sleek, ingenious and dynamic front-end framework created by passionate React Loving team at [Geekyants.com](https://geekyants.com/) to build cross platform Android & iOS mobile apps using ready to use generic components of React Native.



## 2. Why NativeBase?
What is really great with [NativeBase](https://nativebase.io/) is that you can use shared UI cross-platform components, which will drastically increase your productivity. When using NativeBase, you can use any native third-party libraries out of the box.<br />

**Recommended by** *Microsoft*
> If you're looking to get started with React Native + CodePush, and are looking for an awesome starter kit, you should check out Native Starter Pro - [Microsoft's react-native-code-push repo](https://github.com/Microsoft/react-native-code-push#example-apps--starters)

**Recommended by [Awesome React Native](https://github.com/jondot/awesome-react-native)**
>NativeBase added into the list of [Frameworks](https://github.com/jondot/awesome-react-native#frameworks) of Awesome React Native and are also used by many other React lovers across the world.


## 4. Getting Started
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


## Setup with CRNA
*Create React Native project using the CRNA cli.* <br />
CRNA helps you make React Native apps with no build configuration. Create React App works on macOS, Windows, and Linux. <br />
Refer to this link for additional information [CRNA](https://github.com/react-community/create-react-native-app)

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
Synatx <br />
```js
async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
```
<br />

Check out the [KitchenSink](https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/CRNA/js/setup.js) with CRNA for an example of the implementation.<br />

## 5. Components

[NativeBase](https://nativebase.io/) is made from effective building blocks referred to as components. The Components are constructed in pure [React Native](https://github.com/facebook/react-native) platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.

## 6. [Native Starter Kit](https://github.com/start-react/native-starter-kit)

A simple starter project for [React Native](https://github.com/facebook/react-native) + [NativeBase](https://nativebase.io/) + [Redux](http://redux.js.org/) + [CodePush](https://github.com/Microsoft/react-native-code-push) + [React Native Navigator](https://facebook.github.io/react-native/docs/navigator.html) apps on iOS and Android.
[Take a look at the demo](https://github.com/start-react/native-starter-kit#screens)


## 7. NativeBase Market

Having tried with the free version, [Native Starter Kit](https://github.com/start-react/native-starter-kit) and appreciate our product?

Get on the mobile fast track with the featured apps of [NativeBase](https://nativebase.io/), to build high-quality iOS and Android mobile apps.<br />
A [marketplace](https://market.nativebase.io/) for premium React Native app themes to build high-quality iOS and Android mobile apps. <br />

## 8. Documentation

Go through [NativeBase Docs](https://docs.nativebase.io/) to play with [NativeBase](https://nativebase.io/).



## 9. Website
[https://nativebase.io/](https://nativebase.io/)



## 10. Quick Links to NativeBase

*	[NativeBase Documentation](https://docs.nativebase.io/)
*	[NativeBase Blog](https://blog.nativebase.io)
*	[NativeBase on Twitter](https://twitter.com/NativeBaseIO)
*	[NativeBase on FaceBook](https://www.facebook.com/nativebaseio/)


## 11. About the creators

We are [GeekyAnts](https://geekyants.com/), a startup based in Bangalore, India with 50+ developers in strength. We have been very active in the React / React Native community where we have developed [StrapUI](https://www.strapui.com/) and [StartReact](https://startreact.com/). Our other products include StartLaravel and StartAngular.
