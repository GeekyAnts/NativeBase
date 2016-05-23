/* @flow */
'use strict';

import React from 'react';
import {Text, View, PixelRatio} from 'react-native';
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
				borderColor: this.getContextForegroundColor(),
				paddingRight: 5
			},
			outerBorder: {
				position:'relative',
				borderColor: 'white',
				borderWidth: this.getTheme().borderWidth,
				borderTopWidth: 0,
				borderRightWidth: 0,
				borderLeftWidth: 0,
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
				borderWidth: this.getTheme().borderWidth,
				borderTopWidth: 0,
				borderRightWidth: 0,
				borderLeftWidth: 0,
				marginTop: 5
			},

			bordered: {
				position:'relative',
				borderWidth: this.getTheme().borderWidth,
				marginTop: 5
			},

			rounded: {
				position:'relative',
				borderWidth: this.getTheme().borderWidth,
				borderRadius: 30,
				marginTop: 5
			}
		}
	}

	prepareRootProps() {

		var type = {
			paddingLeft:  (this.props.borderType === 'rounded' && !this.props.children.type == Icon) ? 15 :
			(this.props.children.type == Icon ) ? this.getTheme().inputPaddingLeftIcon : 5
		}

		var defaultStyle = (this.props.borderType === 'regular') ? this.getInitialStyle().bordered : (this.props.borderType === 'rounded') ? this.getInitialStyle().rounded : this.getInitialStyle().underline;

		type = _.merge(type, defaultStyle);

		var  addedProps = _.merge(this.getInitialStyle().textInput, type);

		var defaultProps = {
			style: addedProps
		}

		return computeProps(this.props, defaultProps);
	}

	getIconProps(icon) {
		var defaultStyle = {
			color: this.getContextForegroundColor(),
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
			if (iconRender) {
				return <Text style={{ alignSelf: 'center'}}>{React.cloneElement(iconRender, this.getIconProps(iconRender))}</Text>

			}
		}
	}


	renderChildren() {
		var inputProps = {};
		var newChildren = [];
		var childrenArray = React.Children.toArray(this.props.children);

		var iconElement = [];
		iconElement = _.remove(childrenArray, function(item) {
				if(item.type == Icon) {
						return true;
				}
		});

		var inp =  _.find(childrenArray, function(item) {
			if(item && item.type == undefined) {
				return true;
			}
		});

		if(inp)
		inputProps = computeProps(this.props, inp.props);
		else
		inputProps = this.props;
		
		if(Array.isArray(this.props.children)) {
			if(this.props.iconRight) {
				newChildren.push(<Input {...inputProps}/>);
				newChildren.push(<Text style={{paddingTop: 3}}>{React.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))}</Text>);
			}
			else {
				newChildren.push(<Text style={{paddingTop: 3}}>{React.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))}</Text>);
				newChildren.push(<Input {...inputProps}/>);
			}
		}

		else {
			newChildren.push(<Input {...inputProps}/>);
		}


		return newChildren;
	}

	render() {
		return (
			<View {...this.prepareRootProps()} >
				{this.renderChildren()}
			</View>
		);
	}
}
