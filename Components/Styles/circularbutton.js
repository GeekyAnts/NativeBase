

/* @flow */
'use strict';

var React = require('react-native');
var primary = require('./variable').brandPrimary
var secondary = require('./variable').brandSecondary

var {
  StyleSheet,
  Dimensions,
  PixelRatio
} = React;
var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
	circularButton: {
	    padding: 25,
	    alignSelf: 'center',
		borderRadius: 40,
		width: 80,
		height: 80,
		marginTop: 28,
		paddingRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 2, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 4
	},
	circularButtonText: {
		color: '#fff',
		fontSize: 10,
		marginTop: -12,
		marginLeft: -5
	},
});

