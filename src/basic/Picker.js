import React, { Component } from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import { Picker } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

export default class PickerNB extends Component {
  render() {
    return (
      <Picker ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </Picker>
    );
  }
}

PickerNB.Item = createReactClass({
  render() {
    return <Picker.Item {...this.props} />;
  }
});

PickerNB.propTypes = {
  ...Picker.propTypes
};

const StyledPickerNB = connectStyle(
  "NativeBase.PickerNB",
  {},
  mapPropsToStyleNames
)(PickerNB);

export { StyledPickerNB as PickerNB };
