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

module.exports = {
	textInput: {
		height: 40, 
		backgroundColor: 'transparent',
	},	
	outerBorder: {
		position:'relative',
		borderColor: 'white', 
		borderWidth: 1 / PixelRatio.get(),
		borderTopWidth: 0, 
		borderRightWidth: 0, 
		borderLeftWidth: 0, 
		margin: 15,
		marginTop: 5
	},
	darkborder: {
		borderColor: '#000',		
	},
	lightborder: {
		borderColor: '#fff',		
	},
	underline: {
		position:'relative',
		borderWidth: 1 / PixelRatio.get(),
		borderTopWidth: 0, 
		borderRightWidth: 0, 
		borderLeftWidth: 0, 
		margin: 15,
		marginTop: 5
	},

	bordered: {
		position:'relative',
		borderWidth: 1 / PixelRatio.get(),
		margin: 15,
		marginTop: 5
	},

	rounded: {
		position:'relative',
		borderWidth: 1 / PixelRatio.get(),
		borderRadius: 30,
		margin: 15,
		marginTop: 5
	}
};

