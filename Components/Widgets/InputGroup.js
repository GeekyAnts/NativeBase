/* @flow */
'use strict';

import React, {Text, View, PixelRatio } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from './Icon';
import computeProps from '../../Utils/computeProps';
import Input from './Input';
import _ from 'lodash';


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
				borderColor: '#000'	
			},
			lightborder: {
				borderColor: '#fff'
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
			paddingLeft:  (this.props['border-type'] === 'rounded' && !this.props.children.type == Icon) ? 15 : 
			(this.props.children.type == Icon ) ? this.getTheme().inputPaddingLeftIcon : 10
		}

		var defaultStyle = (this.props['border-type'] === 'regular') ? this.getInitialStyle().bordered : (this.props['border-type'] === 'rounded') ? this.getInitialStyle().rounded : this.getInitialStyle().underline;

		type = _.merge(type, defaultStyle);

		var  addedProps = _.merge(this.getInitialStyle().textInput, type);

		var defaultProps = {
			style: addedProps
		}

		return computeProps(this.props, defaultProps);
	}

	getIconProps(icon) {
		var defaultStyle = {
			color: this.getTheme().inputColor,
			fontSize: 27
		}

		var defaultProps = {
			style: defaultStyle
		}

		return computeProps(icon.props, defaultProps);
	}

	renderIcon() {
		if(!Array.isArray(this.props.children) && this.props.children.type == Icon)
			return React.cloneElement(this.props.children, this.getIconProps(this.props.children));

		else {
			var iconRender =  _.find(this.props.children, function(item) {
				if(item && item.type == Icon) {
					return true;
				}
			});
			return <Text style={{ alignSelf: 'center'}}>{React.cloneElement(iconRender, this.getIconProps(iconRender))}</Text>
		}
	}


	renderInput() {
		var inputProps = {};

		if(!Array.isArray(this.props.children) && this.props.children.type == undefined) {
			inputProps = computeProps(this.props, this.props.children.props);
		}

		else {
			var inp =  _.find(this.props.children, function(item) {
				if(item && item.type == undefined) {
					return true;
				}
			});
			
			if(inp)
				inputProps = computeProps(this.props, inp.props);
			else 
				inputProps = this.props;
		}

		return <Input {...inputProps}/> 
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
