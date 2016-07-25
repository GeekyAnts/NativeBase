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
			flex: 1
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);
	}

	render() {
		const contentContainerStyle = this.props.contentContainerStyle || {};
		contentContainerStyle.padding = (this.props.padder) ? this.getTheme().contentPadding : 0;
		return(
			<ScrollView {...this.prepareRootProps()} contentContainerStyle={contentContainerStyle}>{this.props.children}</ScrollView>
		);
	}
}
