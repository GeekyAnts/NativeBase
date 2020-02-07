import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

import NativeBaseComponent from './Base/NativeBaseComponent';

class Input extends NativeBaseComponent {

  render() {

    const { renderInput, ...textInputProps } = this.props;

    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    if (renderInput) {
      const inputComp = renderInput(this.props);
      if (inputComp) {
        return inputComp;
      }
    }

    return (
      <TextInput
        ref={c => {
          this._textInput = c;
          this._root = c;
        }}
        editable={!this.props.disabled}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor={
          this.props.placeholderTextColor
            ? this.props.placeholderTextColor
            : variables.inputColorPlaceholder
        }
        {...textInputProps}
      />
    );
  }
}

Input.propTypes = {
  ...TextInput.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  renderInput: PropTypes.func
};

const StyledInput = connectStyle('NativeBase.Input', {}, mapPropsToStyleNames)(
  Input
);

export { StyledInput as Input };
