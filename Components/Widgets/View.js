/* @flow */
'use strict';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';


export default class ViewNB extends NativeBaseComponent {
	propTypes: {
        style : React.PropTypes.object,
        padder : React.PropTypes.bool
    }
	render() {
		return(
			<View style={{padding: (this.props.padder) ? this.getTheme().contentPadding : 0, flex: 1}} {...this.props}></View>
			);
	}
}

