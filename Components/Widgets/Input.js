/* @flow */
'use strict';

import React, {Component, Text, View, TextInput } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';

export default class Input extends NativeBaseComponent {
	
	getInitialStyle() {
	    return {
	       input: {
	       		height: this.getTheme().inputHeightBase,
	       		color: this.getTheme().inputColorPlaceholder,
	       		paddingLeft: 10
	       } 
	    }
	}

	prepareRootProps() {

	    var defaultProps = {
	        style: this.getInitialStyle().input
	    }

	    return computeProps(this.props, defaultProps);

	}

	render() {

        return (
        	<View style={{ flex: 1,}}>
           	<TextInput {...this.prepareRootProps()} placeholderTextColor={this.getTheme().inputColorPlaceholder} /> 
        	</View>
        );
    }    

}

