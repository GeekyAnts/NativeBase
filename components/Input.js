import React, { Component } from 'react';
import { TextInput } from 'react-native';
import variables from '../variables';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Input extends Component {
  render() {
    return (
      <TextInput ref={(c) => { this._textInput = c; this._root = c; }} {...this.props} placeholderTextColor={this.props.placeholderTextColor ? this.props.placeholderTextColor : variables.inputColorPlaceholder} underlineColorAndroid="rgba(0,0,0,0)" />
    );
  }
}

Input.propTypes = {
  ...TextInput.propTypes,
};

const StyledInput = connectStyle('NativeBase.Input', {}, mapPropsToStyleNames)(Input);

export {
  StyledInput as Input,
};
