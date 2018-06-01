import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import variable from "../theme/variables/platform";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Spinner extends Component {
	static contextTypes = {
		theme: PropTypes.object,
	};
	render() {
		const variables = this.context.theme ? this.context.theme["@@shoutem.theme/themeStyle"].variables : variable;
		return (
			<ActivityIndicator
				ref={c => (this._root = c)}
				{...this.props}
				color={
					this.props.color
						? this.props.color
						: this.props.inverse ? variables.inverseSpinnerColor : variables.defaultSpinnerColor
				}
				size={this.props.size ? this.props.size : "large"}
			/>
		);
	}
}

Spinner.propTypes = {
	...ActivityIndicator.propTypes,
	color: PropTypes.string,
	inverse: PropTypes.bool,
};

const StyledSpinner = connectStyle("NativeBase.Spinner", {}, mapPropsToStyleNames)(Spinner);

export { StyledSpinner as Spinner };
