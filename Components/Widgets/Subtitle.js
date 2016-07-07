/* @flow */
'use strict';

import React from 'react';
import {Text, View, Platform } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';


export default class Subtitle extends NativeBaseComponent {

	render() {
		return(
			<View><Text style={{color: this.getTheme().subtitleColor , fontSize: this.getTheme().subTitleFontSize, alignSelf: (Platform.OS === 'ios' ) ? 'center' : 'flex-start'}}>{this.props.children}</Text></View>
		);
	}
}
