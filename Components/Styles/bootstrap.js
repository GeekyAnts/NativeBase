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
	button: {
	    padding: 10,
	    borderColor: 'transparent',
	    alignSelf: 'stretch',
		height: 45,
		marginTop: 18,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		alignItems: 'center'
	},
	buttonText: {
		fontSize: 18
	},
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
	textIconInput: {
		height: 40, 
		backgroundColor: 'transparent',
		paddingLeft: 40
	},
	textInput: {
		height: 40, 
		backgroundColor: 'transparent',
	},
	light: {
		color: '#fff'
	},
	dark: {
		color: '#000'
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
});

