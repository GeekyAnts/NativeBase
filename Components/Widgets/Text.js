/* @flow */
'use strict';

import React, {Text } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';


export default class TextNSP extends NativeStarterComponent {

	prepareRootProps() {

	    var type = { 
	    	color: this.getTheme().textColor
	    }
	  
	    var defaultProps = {
	        style: type
	    }	  
	  
	    return computeProps(this.props, defaultProps);

	}
    render() {
        return(
            <Text {...this.prepareRootProps()}>{this.props.children}</Text>
        );
    }    

}

