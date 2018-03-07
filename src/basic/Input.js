import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import variables from "../theme/variables/platform";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import NativeBaseComponent from "./Base/NativeBaseComponent";

class Input extends NativeBaseComponent {
	render() {
		return (
			<TextInput
				ref={c => {
					this._textInput = c;
					this._root = c;
				}}
				editable={this.props.disabled ? false : true}
				underlineColorAndroid="rgba(0,0,0,0)"
				placeholderTextColor={
					this.props.placeholderTextColor ? this.props.placeholderTextColor : variables.inputColorPlaceholder
				}
				{...this.props}
			/>
		);
	}
}

Input.propTypes = {
	...TextInput.propTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

const StyledInput = connectStyle("NativeBase.Input", {}, mapPropsToStyleNames)(Input);

export { StyledInput as Input };
