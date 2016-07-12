/* @flow */
'use strict';

import React from 'react';
import { View, Platform } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Text from "./Text";


export default class Title extends NativeBaseComponent {

	render() {
		return(
			<View><Text style={{color: this.getContextForegroundColor() , fontSize: this.getTheme().titleFontSize, fontWeight: (this.getTheme().fontFamily===undefined) ? "500" : "400", alignSelf: (Platform.OS === 'ios' ) ? 'center' : 'flex-start'}}>{this.props.children}</Text></View>
		);
	}
}
