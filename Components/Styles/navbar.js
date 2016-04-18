/* @flow */
'use strict';

var React = require('react-native');
var primary = require('./variable').brandPrimary;
var secondary = require('./variable').brandSecondary;

var {
  StyleSheet,
  Platform
} = React;

module.exports = {
	navbar: {
		backgroundColor: secondary,
		justifyContent: 'space-between',
		flexDirection: 'row',
		padding: 15,	
		paddingTop: 25,	
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		height: 65
	},
	title : {
		color: '#fff',
		fontSize: 20,
		fontWeight: "500",
		alignSelf: 'center'
	},
	subtitle : {
		color: '#fff',
		fontSize: 16,
		alignSelf: 'center'
	}
};