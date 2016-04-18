/* @flow */
'use strict';

import React, {Component, View} from 'react-native';
import lightTheme from '../Themes/light';


export default class NativeStarterComponent extends Component {			
	static contextTypes = {
	    theme: React.PropTypes.object
	  }

	getTheme() {
   		return this.context.theme || lightTheme
	}  
}