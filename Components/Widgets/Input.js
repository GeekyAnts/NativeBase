/* @flow */
'use strict';

import React, {Component, Text, View, TextInput } from 'react-native';
import {brandPrimary as primary} from '../Styles/variable';
import {dark} from '../Styles/variable';
import {light} from '../Styles/variable';
import Icon from 'react-native-vector-icons/Ionicons';
import bootstrap from '../Styles/bootstrap';

export default class IconInput extends Component {

    	render() {

	        return (
	           	<TextInput
					style={[(this.props.dark) ? bootstrap.dark : bootstrap.light, 
						(this.props.icon) ? bootstrap.textIconInput : bootstrap.textInput, 
						{ paddingLeft:  (this.props.borderType === 'rounded' && !this.props.icon) ? 15 : 
							(this.props.icon) ? 40 : 5
						}] }
					placeholderTextColor={(this.props.dark) ? dark : light}
					{...this.props}
				/> 
	        );
    }    

}

