/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prefer-es6-class */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import createReactClass from 'create-react-class';
import { Picker } from '@react-native-picker/picker';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

export default class PickerNB extends Component {
  constructor(props) {
    super(props);
    // Receives placeholder-related attributes defined by the user, if any.
    this.placeholder = props.placeholder && typeof props.placeholder === 'string' ? props.placeholder : null;
    this.placeholderColor = props.placeholderColor && typeof props.placeholderColor === 'string' ? props.placeholderColor : "#c8c8cb";
  }

  render() {
    const placeholderText = this.placeholder;
    return (
      <Picker ref={c => (this._root = c)} {...this.props}>
        {placeholderText !== null && <Picker.Item value={null} label={placeholderText} color={this.placeholderColor} />}
        {this.props.children}
      </Picker>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
PickerNB.Item = createReactClass({
  render() {
    return <Picker.Item {...this.props} />;
  }
});

PickerNB.propTypes = {
  ...Picker.propTypes
};

const StyledPickerNB = connectStyle(
  'NativeBase.PickerNB',
  {},
  mapPropsToStyleNames
)(PickerNB);

export { StyledPickerNB as PickerNB };