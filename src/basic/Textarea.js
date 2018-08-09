import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import variables from "../theme/variables/platform";
import computeProps from "../utils/computeProps";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Textarea extends Component {
	getStyle() {
		return {
			textarea: {
				height: this.props.rowSpan ? this.props.rowSpan * 25 : 60,
			},
		};
	}

	prepareRootProps() {
		const defaultProps = {
			style: this.getStyle().textarea,
		};
		return computeProps(this.props, defaultProps);
	}
	render() {
		return (
			<TextInput
				ref={c => {
					this._textInput = c;
					this._root = c;
				}}
				{...this.prepareRootProps()}
				multiline
				placeholderTextColor={
					this.props.placeholderTextColor ? this.props.placeholderTextColor : variables.inputColorPlaceholder
				}
				underlineColorAndroid="rgba(0,0,0,0)"
				editable={this.props.disabled ? false : true}
			/>
		);
	}
}

Textarea.propTypes = {
	...TextInput.propTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
	rowSpan: PropTypes.number,
	bordered: PropTypes.bool,
	underline: PropTypes.bool,
};

const StyledTextarea = connectStyle("NativeBase.Textarea", {}, mapPropsToStyleNames)(Textarea);

export { StyledTextarea as Textarea };
