import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch as SwitchNB } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Switch extends Component {
  render() {
    return <SwitchNB ref={c => (this._root = c)} {...this.props} />;
  }
}

Switch.propTypes = {
  ...Switch.propTypes,
};

const StyledSwitch = connectStyle("NativeBase.Switch", {}, mapPropsToStyleNames)(Switch);

export { StyledSwitch as Switch };
