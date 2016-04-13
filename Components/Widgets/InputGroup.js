/* @flow */
'use strict';

import React, {Text, View, TextInput } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import {brandPrimary as primary} from '../Styles/variable';
import {dark} from '../Styles/variable';
import {light} from '../Styles/variable';
import Icon from 'react-native-vector-icons/Ionicons';
import input from '../Styles/input';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class IconInput extends NativeStarterComponent {

		prepareRootProps() {

		    var type = {
		    	paddingLeft:  (this.props.borderType === 'rounded' && !this.props.icon) ? 15 : 
				(this.props.icon) ? 40 : 5,
				color: (this.props.dark) ? '#000' : '#fff'
		    }

		  
		    var  addedProps = _.merge(input.textInput,type);

		    var defaultProps = {
		        style: addedProps
		    }

		    console.log("input style", computeProps(this.props, defaultProps));

		    return computeProps(this.props, defaultProps);

		}

    	render() {
	        return (
	           	<View style={[(this.props.dark) ? input.darkborder : input.lightborder, (this.props.borderType === 'regular') ? input.bordered : (this.props.borderType === 'rounded') ? input.rounded : input.underline]}>   
	              	<View>{this.props.children}</View>
	          	</View>  
	        );
    }    

}

