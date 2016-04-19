/* @flow */
'use strict';

import React, {Component, Text, View, TextInput } from 'react-native';
import {brandPrimary as primary} from '../Styles/variable';
import Icon from 'react-native-vector-icons/Ionicons';
import bootstrap from '../Styles/bootstrap';
import computeProps from '../../Utils/computeProps';

export default class Input extends Component {

	getInitialStyle() {
	    return {
	       input: {
	       		height: 40
	       } 
	    }
	}

	prepareRootProps() {

	    var defaultProps = {
	        style: this.getInitialStyle().input
	    }

	    console.log("awdaw*(^(( ", this.props);

	    console.log("input style *&*(*&(", computeProps(this.props, defaultProps));

	    return computeProps(this.props, defaultProps);

	}

	render() {

        return (
           	<TextInput {...this.prepareRootProps()} /> 
        );
    }    

}

