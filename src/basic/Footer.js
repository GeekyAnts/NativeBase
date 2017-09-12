import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import _ from "lodash";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import { ViewPropTypes } from '../Utils';

class Footer extends Component {
	render() {
		return <View ref={c => (this._root = c)} {...this.props} />;
	}
}

Footer.propTypes = {
	...ViewPropTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

const StyledFooter = connectStyle("NativeBase.Footer", {}, mapPropsToStyleNames)(Footer);
export { StyledFooter as Footer };
