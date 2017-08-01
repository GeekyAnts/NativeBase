import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { ViewPropTypes } from '../Utils';

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Form extends Component {
	render() {
		return <View ref={c => (this._root = c)} {...this.props} />;
	}
}

Form.propTypes = {
	...ViewPropTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

const StyledForm = connectStyle("NativeBase.Form", {}, mapPropsToStyleNames)(Form);

export { StyledForm as Form };
