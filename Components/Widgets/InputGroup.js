/* @flow */
'use strict';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from './Icon';
import Button from './Button';
import computeProps from '../../Utils/computeProps';
import Input from './Input';
import _ from 'lodash';

export default class InputGroup extends NativeBaseComponent {

	getInitialStyle() {
		return {
			textInput: {
				backgroundColor: 'transparent',
				flexDirection: 'row',
				borderColor: this.getTheme().inputBorderColor,
				paddingRight: 5,
				alignItems: 'center'
			},
			outerBorder: {
				position:'relative',
				borderColor: 'white',
				borderWidth: this.getTheme().borderWidth,
				borderTopWidth: 0,
				borderRightWidth: 0,
				borderLeftWidth: 0
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
				borderLeftWidth: 0
			},

			bordered: {
				position:'relative',
				borderWidth: this.getTheme().borderWidth
			},

			rounded: {
				position:'relative',
				borderWidth: this.getTheme().borderWidth,
				borderRadius: 30
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

		var addedProps = _.merge(this.getInitialStyle().textInput, type);

		var defaultProps = {
			style: addedProps,
			key: 'inpGroup'
		}

		return computeProps(this.props, defaultProps);
	}

	getIconProps(icon) {

		var defaultStyle = {
			fontSize: (this.props.toolbar || this.props.atoolbar) ? this.getTheme().toolbarIconSize : 27,
			alignSelf: 'center',
			lineHeight: (this.props.toolbar || this.props.atoolbar) ? 24 : undefined,
			paddingRight: 5,
			marginLeft: (this.props.toolbar || this.props.atoolbar) ? 5 : undefined
		}

		var defaultProps = {
			style: defaultStyle,
			key: 'icon'
		}

		return computeProps(icon.props, defaultProps);
	}
	getButtonProps(button) {

		var defaultStyle = {
			alignSelf: 'center',
			paddingRight: 5,
			marginLeft: (this.props.toolbar || this.props.atoolbar) ? 5 : undefined,
			height: this.props.toolbar ? 30 : undefined,
			fontSize: this.props.toolbar ? 15 : undefined
		}

		var defaultProps = {
			style: defaultStyle,
			key: 'button',
			inputButton: true
		}

		return computeProps(button.props, defaultProps);
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

		var buttonElement = [];

		buttonElement = _.remove(childrenArray, function(item) {
			if(item.type == Button) {
				return true;
			}
		});

		var inp = _.find(childrenArray, function(item) {
			if(item && item.type == Input) {
				return true;
			}
		});

		if(inp) {
			inputProps = computeProps(this.props, inp.props);
		}
		else {
			inputProps = this.props;
		}

		if(Array.isArray(this.props.children)) {

			if(this.props.iconRight) {
				newChildren.push(<Input key='inp' {...inputProps} />);
				newChildren.push(React.cloneElement(iconElement[0],this.getIconProps(iconElement[0])));
			}
			else if(buttonElement.length>0) {
				newChildren.push(React.cloneElement(
					iconElement[0],
					{
						...this.getIconProps(iconElement[0]),
						key: 'icon0'
					}
				));
				newChildren.push(<Input key='inp' {...inputProps} />);
				newChildren.push(React.cloneElement(
					buttonElement[0],
					{
						...this.getButtonProps(buttonElement[0]),
						key: 'button1'
					}
				));
			}
			else {
				if (iconElement.length > 1) {
					newChildren.push(React.cloneElement(
						iconElement[0],
						{
							...this.getIconProps(iconElement[0]),
							key: 'icon0'
						}
					));
					newChildren.push(<Input key='inp' {...inputProps} />);
					newChildren.push(React.cloneElement(
						iconElement[1],
						{
							...this.getIconProps(iconElement[1]),
							key: 'icon1'
						}
					));
				} else {
					newChildren.push(React.cloneElement(iconElement[0], this.getIconProps(iconElement[0])));
					newChildren.push(<Input key='inp' {...inputProps} />);
				}
			}
		}

		else {
			newChildren.push(<Input key='inp' {...inputProps} />);
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
