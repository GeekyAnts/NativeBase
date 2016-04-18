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
	           	<View style={[(this.props.dark) ? bootstrap.darkborder : bootstrap.lightborder, (this.props.borderType === 'regular') ? bootstrap.bordered : (this.props.borderType === 'rounded') ? bootstrap.rounded : bootstrap.underline]}>   
	              	<TextInput
						style={[(this.props.dark) ? bootstrap.dark : bootstrap.light, 
							(this.props.icon) ? bootstrap.textIconInput : bootstrap.textInput, 
							{ paddingLeft:  (this.props.borderType === 'rounded' && !this.props.icon) ? 15 : 
								(this.props.icon) ? 40 : 5
							}] }
						placeholderTextColor={(this.props.dark) ? dark : light}
						{...this.props}
						/>
						{ (this.props.icon) ?
							<Icon name={this.props.icon} size={27} color={(this.props.dark) ? dark : light} style={{position:'absolute',top: (this.props.borderType === 'rounded') ? 4.5 : 6, left: (this.props.borderType === 'rounded') ? 10 : 6}}/>							
		    		    	:
		    		    	<View ></View>
	    		    	}
	          	</View>  
	        );
    }    

}

