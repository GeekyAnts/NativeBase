import React, { Component } from 'react';
import { TextInput, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import variables from '../theme/variables/platform';
import computeProps from '../utils/computeProps';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type TextareaProps = {
  style?: StyleProp<ViewStyle>;
  rowSpan?: number;
  bordered?: boolean;
  underline?: boolean;
};

class Textarea extends Component<TextareaProps, {}> {
  getStyle() {
    return {
      textarea: {
        height: this.props.rowSpan ? this.props.rowSpan * 25 : 60,
      },
    };
  }
  prepareRootProps() {
    const defaultProps = {
      style: this.getStyle().textarea,
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    return (
      <TextInput
        ref={c => {
          this._textInput = c;
          this._root = c;
        }}
        {...this.prepareRootProps()}
        multiline
        placeholderTextColor={
          this.props.placeholderTextColor ? this.props.placeholderTextColor : variables.inputColorPlaceholder
        }
        underlineColorAndroid="rgba(0,0,0,0)"
        editable={!this.props.disabled}
      />
    );
  }
}
const StyledTextarea = connectStyle('NativeBase.Textarea', {}, mapPropsToStyleNames)(Textarea);

export { StyledTextarea as Textarea };
