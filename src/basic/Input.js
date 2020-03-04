import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

import NativeBaseComponent from './Base/NativeBaseComponent';

import { defaultStyles } from '../theme/components/Input';

class Input extends NativeBaseComponent {

  render() {

    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;


    let style = this.props.style;
    let flattenedStyles = StyleSheet.flatten(this.props.style);
    style = StyleSheet.compose(
      defaultStyles(variables),
      flattenedStyles
    );

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
        {...this.props}
        style={style}
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
  ])
};

const StyledInput = connectStyle('NativeBase.Input', {}, mapPropsToStyleNames)(
  Input
);

export { StyledInput as Input };
