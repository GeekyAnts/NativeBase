import React, { Component } from "react";
import PropTypes from "prop-types";
import { Picker } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Item extends Component {
	render() {
		return <Picker.Item ref={c => (this._root = c)} {...this.props} />;
	}
}

Item.propTypes = {
	...Picker.Item.propTypes,
};

const StyledItem = connectStyle("NativeBase.Item", {}, mapPropsToStyleNames)(Item);

export { StyledItem as Item };
