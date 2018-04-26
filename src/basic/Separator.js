import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Separator extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Separator.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledSeparator = connectStyle(
  "NativeBase.Separator",
  {},
  mapPropsToStyleNames
)(Separator);

export { StyledSeparator as Separator };
