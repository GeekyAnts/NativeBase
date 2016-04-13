/* @flow */
'use strict';

import React, {Component, Text, View, TextInput } from 'react-native';
import styles from '../../Styles/button';
import {brandPrimary as primary} from '../../Styles/variable';
import {dark} from '../../Styles/variable';
import {light} from '../../Styles/variable';
import Icon from 'react-native-vector-icons/Ionicons';
import bootstrap from '../../Styles/bootstrap';

export default class IconInput extends Component {

    	render() {

	        return (
	           	<View style={(this.props.dark) ? bootstrap.outerBorderDark : bootstrap.outerBorder}>   
	              	<TextInput
						style={(this.props.dark) ? bootstrap.textInputDark : bootstrap.textInput}
						placeholderTextColor={(this.props.dark) ? dark : light}
						{...this.props}
						/>
						<Icon name={this.props.icon} size={27} color={(this.props.dark) ? dark : light} style={{position:'absolute',top:6, left: 6}}/>
	          	</View>  
	        );
    }    

}

