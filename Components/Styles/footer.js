/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;
var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
	footer: {
		position: 'absolute',
		flexDirection : 'row',
		bottom: 0,
		left: 0,
		right: 0,
		height: 55,
		justifyContent: 'space-around',
		backgroundColor: 'rgba(255,255,255,0.2)'
	},
});

