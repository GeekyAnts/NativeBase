/* @flow */
'use strict';

import React, {View, TextInput} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class Input extends NativeBaseComponent {
	
	getInitialStyle() {
		return {
			input: {
				height: this.getTheme().inputHeightBase,
				color: this.getTheme().textColor,
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
			<View style={{ flex: 1 }}>
				<TextInput {...this.prepareRootProps()} placeholderTextColor={this.getTheme().inputColorPlaceholder} /> 
			</View>
		);
	}    

}

