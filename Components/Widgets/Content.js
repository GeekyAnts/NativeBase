/* @flow */
'use strict';

import React from 'react';
import {ScrollView} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class Content extends NativeBaseComponent {
	
	prepareRootProps() {

		var type = { 
			backgroundColor: 'transparent',
			flex: 1,
			padding: (this.props.padder) ? this.getTheme().contentPadding : 0
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);
	}

	render() {
		return(
			<ScrollView {...this.prepareRootProps()}>{this.props.children}</ScrollView>
		);
	}    
}

