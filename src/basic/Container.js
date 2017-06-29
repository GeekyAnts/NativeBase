import React, { Component } from "react";
import { View, ViewPropTypes } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import { ToastContainer as Toast } from "./ToastContainer";
import { ActionSheetContainer as ActionSheet } from "./Actionsheet";
import { Text } from "./Text";

class Container extends Component {
  // componentWillUnmount() {
  //   Toast.toastInstance = null;
  // }

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
  style: React.PropTypes.object
};

const StyledContainer = connectStyle(
  "NativeBase.Container",
  {},
  mapPropsToStyleNames
)(Container);

export { StyledContainer as Container };
