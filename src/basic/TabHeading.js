import React, { Component, PropTypes } from "react";
import { View, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class TabHeadingNB extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

TabHeadingNB.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledTabHeadingNB = connectStyle(
  "NativeBase.TabHeading",
  {},
  mapPropsToStyleNames
)(TabHeadingNB);
export { StyledTabHeadingNB as TabHeading };
