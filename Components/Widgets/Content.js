/* @flow */
'use strict';

import React, {Text, View, ScrollView } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';


export default class Content extends NativeStarterComponent {
	prepareRootProps() {

	    var type = { 
	    	backgroundColor: 'transparent',
	    	flex: 1
	    }

	    var defaultProps = {
	        style: type
	    }

	    console.log("content style", computeProps(this.props, defaultProps));

	    return computeProps(this.props, defaultProps);

	}
    render() {
        return(
            <ScrollView {...this.prepareRootProps()}>{this.props.children}</ScrollView>
        );
    }    

}

