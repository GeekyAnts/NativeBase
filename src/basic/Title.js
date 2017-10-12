import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Title extends Component {
	render() {
		return <Text ref={c => (this._root = c)} numberOfLines={1} {...this.props} />;
	}
}

Title.propTypes = {
	...Text.propTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

const StyledTitle = connectStyle("NativeBase.Title", {}, mapPropsToStyleNames)(Title);
export { StyledTitle as Title };
