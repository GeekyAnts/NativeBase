/* @flow */
'use strict';

import React, {Component, Text, View, TextInput } from 'react-native';
import {brandPrimary as primary} from '../Styles/variable';
import computeProps from '../../Utils/computeProps';

export default class InputLabel extends Component {

	getInitialStyle() {
	    return {
	       inputLabel: {
	       		color: "green"
	       } 
	    }
	}

	prepareRootProps() {

	    var defaultProps = {
	        style: this.getInitialStyle().inputLabel
	    }

	    console.log("input style", computeProps(this.props, defaultProps));

	    return computeProps(this.props, defaultProps);

	}

	render() {

        return (
           	<Text {...this.prepareRootProps()} >
           		{this.props.children}
           	</Text>  
        );
    }    

}

