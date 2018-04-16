import React, { Component } from "react";
import PropTypes from "prop-types";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import { Text } from './Text'

class Label extends Component {
	render() {
		return <Text ref={c => (this._root = c)} {...this.props} />;
	}
}

Label.propTypes = {
	...Text.propTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

const StyledLabel = connectStyle("NativeBase.Label", {}, mapPropsToStyleNames)(Label);

export { StyledLabel as Label };
