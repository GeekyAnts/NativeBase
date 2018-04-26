import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { ViewPropTypes } from "../utils";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";
import { ToastContainer as Toast } from "./ToastContainer";
import { ActionSheetContainer as ActionSheet } from "./Actionsheet";
import { Text } from "./Text";

class Container extends Component {
	render() {
		return (
			<View ref={c => (this._root = c)} {...this.props}>
				{this.props.children}
			</View>
		);
	}
}

Container.propTypes = {
	...ViewPropTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

const StyledContainer = connectStyle("NativeBase.Container", {}, mapPropsToStyleNames)(Container);

export { StyledContainer as Container };
