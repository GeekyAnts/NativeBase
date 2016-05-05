/* @flow */
'use strict';

import React from 'react';
import {Text, View } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';


export default class Title extends NativeBaseComponent {   

	render() {
		return(
			<View><Text style={{color: '#fff', fontSize: this.getTheme().fontSizeH3, fontWeight: "500", alignSelf: 'center'}}>{this.props.children}</Text></View>
		);
	}   
}

