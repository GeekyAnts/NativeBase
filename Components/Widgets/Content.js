/* @flow */
'use strict';

import React, {Text, View, ScrollView } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';


export default class Content extends NativeBaseComponent {
	static childContextTypes = {
	    theme: React.PropTypes.object
	}
	
	getChildContext() {
	    return {theme: this.props.theme ? this.props.theme : this.getTheme()};
	}
	
	prepareRootProps() {

	    var type = { 
	    	backgroundColor: 'transparent',
	    	flex: 1,
	    	padding: (this.props.padder) ? this.getTheme().contentPadding : 0
	    }

	    var defaultProps = {
	        style: type
	    }

	    // console.log("content style", computeProps(this.props, defaultProps));

	    return computeProps(this.props, defaultProps);

	}
    render() {
        return(
            <ScrollView {...this.prepareRootProps()}>{this.props.children}</ScrollView>
        );
    }    

}

