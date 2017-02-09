import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import variables from '../theme/variables/platform';
import computeProps from '../Utils/computeProps';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Textarea extends Component {

  getStyle() {
    return {
      textarea: {
        height: (this.props.rowSpan) ? this.props.rowSpan * 25 : 60,
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
        ref={(c) => { this._textInput = c; this._root = c; }} {...this.prepareRootProps()}
        multiline
        placeholderTextColor={this.props.placeholderTextColor ? this.props.placeholderTextColor : variables.inputColorPlaceholder} underlineColorAndroid="rgba(0,0,0,0)"
      />
    );
  }
}

Textarea.propTypes = {
  ...TextInput.propTypes,
  style: React.PropTypes.object,
  rowSpan: React.PropTypes.number,
  bordered: React.PropTypes.bool,
  underline: React.PropTypes.bool,
};

const StyledTextarea = connectStyle('NativeBase.Textarea', {}, mapPropsToStyleNames)(Textarea);

export {
  StyledTextarea as Textarea,
};
