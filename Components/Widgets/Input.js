/* @flow */
'use strict';

import React, {Component, Text, View, TextInput } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import {brandPrimary as primary} from '../Styles/variable';
import Icon from 'react-native-vector-icons/Ionicons';
import bootstrap from '../Styles/bootstrap';
import computeProps from '../../Utils/computeProps';

export default class Input extends NativeBaseComponent {
	static childContextTypes = {
        theme: React.PropTypes.object
    }
    
    getChildContext() {
        return {theme: this.props.theme ? this.props.theme : this.getTheme()};
    }
    
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

