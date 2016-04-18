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
import bootstrap from '../Styles/bootstrap';
import Input from './Input'

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

		renderLabel() {
			if(!Array.isArray(this.props.children) && this.props.children.type == Text)
				return this.props.children;

			else 
				return _.find(this.props.children, function(item) {
		            if(item && item.type == Text) {
		                return true;
		            }
		        });
		}

		renderIcon() {
			if(!Array.isArray(this.props.children) && this.props.children.type == Icon)
				return this.props.children;

			else 
				return _.find(this.props.children, function(item) {
		            if(item && item.type == Icon) {
		                return true;
		            }
		        });
		}

		renderInput() {
			if(!Array.isArray(this.props.children) && this.props.children.type == Input)
				return this.props.children;

			else 
				return _.find(this.props.children, function(item) {
		            if(item && item.type == Input) {
		                return true;
		            }
		        });
		}

    	render() {
	        return (
	           	<View {...this.prepareRootProps()} style={[(this.props.dark) ? bootstrap.darkborder : bootstrap.lightborder, (this.props.borderType === 'regular') ? bootstrap.bordered : (this.props.borderType === 'rounded') ? bootstrap.rounded : bootstrap.underline]} >   

	              	{this.renderIcon()}
	              	{this.renderLabel()}
	              	{this.renderInput()}

	          	</View>  
	        );
    }    

}

