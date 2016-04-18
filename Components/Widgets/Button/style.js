/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions,
  PixelRatio
} = React;
var deviceHeight = Dimensions.get('window').height;

module.exports = {
	button: {
	    padding: 10,
	    borderColor: 'transparent',
	    alignSelf: 'stretch',
		height: 45,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		alignItems: 'center'
	},
	buttonText: {
		fontSize: 18,
		flex: 1,
		color: '#fff'
	}
};

