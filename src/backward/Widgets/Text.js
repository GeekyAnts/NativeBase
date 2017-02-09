/* @flow */


import React from 'react';
import { Text as TextRN } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';


class Text extends NativeBaseComponent {

  render() {
    return (
      <TextRN ref={c => this._root = c} {...this.props}>{this.props.children}</TextRN>
    );
  }

}

Text.propTypes = {
  ...TextRN.propTypes,
  style: React.PropTypes.object,
};

const StyledText = connectStyle('NativeBase.Text', {}, mapPropsToStyleNames)(Text);

export {
  StyledText as Text,
};
