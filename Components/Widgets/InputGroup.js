/* @flow */
'use strict';

import React, {Text, View, TextInput, PixelRatio } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Input from './Input';


export default class InputGroup extends NativeBaseComponent {

	getInitialStyle() {
	    return {
	        textInput: {
	        	height: this.getTheme().inputHeightBase, 
	        	backgroundColor: 'transparent',
	        	flex: 1,
	        	flexDirection: 'row',
	        	borderColor: this.getTheme().inputBorderColor
	        },	
	        outerBorder: {
	        	position:'relative',
	        	borderColor: 'white', 
	        	borderWidth: 1 / PixelRatio.get(),
	        	borderTopWidth: 0, 
	        	borderRightWidth: 0, 
	        	borderLeftWidth: 0, 
	        	margin: 15,
	        	marginTop: 5
	        },
	        darkborder: {
	        	borderColor: '#000',		
	        },
	        lightborder: {
	        	borderColor: '#fff',		
	        },
	        underline: {
	        	position:'relative',
	        	borderWidth: 1 / PixelRatio.get(),
	        	borderTopWidth: 0, 
	        	borderRightWidth: 0, 
	        	borderLeftWidth: 0, 
	        	margin: 15,
	        	marginTop: 5
	        },

	        bordered: {
	        	position:'relative',
	        	borderWidth: 1 / PixelRatio.get(),
	        	margin: 15,
	        	marginTop: 5
	        },

	        rounded: {
	        	position:'relative',
	        	borderWidth: 1 / PixelRatio.get(),
	        	borderRadius: 30,
	        	margin: 15,
	        	marginTop: 5
	        }
	    }
	}

	prepareRootProps() {

	    var type = {
	    	paddingLeft:  (this.props.borderType === 'rounded' && !this.props.children.type == Icon) ? 15 : 
			(this.props.children.type == Icon ) ? this.getTheme().inputPaddingLeftIcon : 10
	    }

	    var defaultStyle = (this.props.borderType === 'regular') ? this.getInitialStyle().bordered : (this.props.borderType === 'rounded') ? this.getInitialStyle().rounded : this.getInitialStyle().underline;

	    type = _.merge(type, defaultStyle);
	  
	    var  addedProps = _.merge(this.getInitialStyle().textInput, type);

	    var defaultProps = {
	        style: addedProps
	    }

	    console.log("input group style", computeProps(this.props, defaultProps));

	    return computeProps(this.props, defaultProps);

	}

	renderIcon() {
		if(!Array.isArray(this.props.children) && this.props.children.type == Icon)
			return this.props.children;

		else {
			var iconRender =  _.find(this.props.children, function(item) {
	            if(item && item.type == Icon) {
	                return true;
	            }
	        });
			return <Text style={{ alignSelf: 'center'}}>{iconRender}</Text>
		}
	}


	renderInput() {
		if(!Array.isArray(this.props.children) && this.props.children.type == undefined) {
			console.log(11111);
			var inputProps = {};

	        inputProps = computeProps(this.props, this.props.children.props);

	        return <Input {...inputProps}/> 
		}

		else {
			console.log(2222);
			var inp =  _.find(this.props.children, function(item) {
	            if(item && item.type == undefined) {
	                return true;
	            }
	        });
	        console.log(this.props.children, "awaw909000990909");

			var inputProps = {};
			
			if(inp)
	        	inputProps = computeProps(this.props, inp.props);
	        else 
	        	inputProps = this.props;

	        return <Input {...inputProps}/> 
		}
	}

	render() {
        return (
           	<View {...this.prepareRootProps()} >   

              	{this.renderIcon()}
              	{this.renderInput()}
          	</View>  
        );
    }    

}
