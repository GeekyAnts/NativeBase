/* @flow */
'use strict';

import React from 'react';
import {View, TextInput} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class Input extends NativeBaseComponent {

	getInitialStyle() {
		console.log("this.getContextForegroundColor()", this.getContextForegroundColor());
		console.log("this.getTheme().borderWidth", this.getTheme().borderWidth);
		return {
			input: {
				height: this.getTheme().inputHeightBase,
				color: this.getTheme().textColor,
				paddingLeft: 5,
				paddingRight: 5
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
			<View style={{ flex: 1, borderColor: this.getContextForegroundColor(),borderBottomWidth: this.getTheme().borderWidth }}>
				<TextInput {...this.prepareRootProps()} placeholderTextColor={ this.getTheme().inputColorPlaceholder} />
			</View>
		);
	}

}
