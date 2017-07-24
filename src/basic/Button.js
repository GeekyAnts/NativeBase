import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Platform, View, TouchableNativeFeedback } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import variables from "./../theme/variables/platform";
import { Text } from "./Text";
import computeProps from "../Utils/computeProps";

import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Button extends Component {
	getInitialStyle() {
		return {
			borderedBtn: {
				borderWidth: this.props.bordered ? 1 : undefined,
				borderRadius: this.props.rounded && this.props.bordered ? variables.borderRadiusLarge : 2,
			},
		};
	}

	_root: React$Element<TouchableOpacity | TouchableNativeFeedback>;

	prepareRootProps() {
		const defaultProps = {
			style: this.getInitialStyle().borderedBtn,
		};

		return computeProps(this.props, defaultProps);
	}
	render() {
		const children =
			Platform.OS === "ios"
				? this.props.children
				: React.Children.map(
						this.props.children,
						child =>
							child && child.type === Text
								? React.cloneElement(child, { uppercase: true, ...child.props })
								: child
					);
		if (Platform.OS === "ios" || variables.androidRipple === false || Platform["Version"] <= 21) {
			return (
				<TouchableOpacity
					{...this.prepareRootProps()}
					ref={c => (this._root = c)}
					activeOpacity={this.props.activeOpacity > 0 ? this.props.activeOpacity : 0.5}
				>
					{children}
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableNativeFeedback
					ref={c => (this._root = c)}
					onPress={this.props.onPress}
					background={
						this.props.androidRippleColor
							? TouchableNativeFeedback.Ripple(this.props.androidRippleColor)
							: TouchableNativeFeedback.Ripple(variables.androidRippleColor)
					}
					{...this.prepareRootProps()}
				>
					<View {...this.prepareRootProps()}>
						{children}
					</View>
				</TouchableNativeFeedback>
			);
		}
	}
}

Button.propTypes = {
	...TouchableOpacity.propTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
	block: PropTypes.bool,
	primary: PropTypes.bool,
	transparent: PropTypes.bool,
	success: PropTypes.bool,
	danger: PropTypes.bool,
	warning: PropTypes.bool,
	info: PropTypes.bool,
	bordered: PropTypes.bool,
	disabled: PropTypes.bool,
	rounded: PropTypes.bool,
	large: PropTypes.bool,
	small: PropTypes.bool,
	active: PropTypes.bool,
};

const StyledButton = connectStyle("NativeBase.Button", {}, mapPropsToStyleNames)(Button);
export { StyledButton as Button };
