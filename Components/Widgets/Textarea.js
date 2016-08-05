/* @flow */
'use strict';

import React from 'react';
import {View, TextInput} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class Textarea extends NativeBaseComponent {

	propTypes: {
        style : React.PropTypes.object
    }

	getInitialStyle() {
		return {
			input: {
				height: this.props.rowSpan*25,
				color: this.getTheme().textColor,
				paddingLeft: 5,
				paddingRight: 5,
				fontSize: 18
			}
		}
	}
	getBorderStyle(){
		return {
			underline: {
				borderTopWidth: 0,
				borderRightWidth: 0,
				borderLeftWidth: 0,
				marginTop: 5
			},

			bordered: {
				marginTop: 5
			},

			rounded: {
				borderRadius: 30,
				marginTop: 5
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
			<TextInput {...this.prepareRootProps()} multiline={true} placeholderTextColor={ this.getTheme().inputColorPlaceholder} underlineColorAndroid='rgba(0,0,0,0)' />
			</View>
			);
	}

}
