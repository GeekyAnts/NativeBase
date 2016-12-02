import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Text extends Component {
  render() {
    return (
      <RNText ref={c => this._root = c} {...this.props} />
    );
  }
}

Text.propTypes = {
  ...RNText.propTypes,
};

const AnimatedText = connectAnimation(Text);
const StyledText = connectStyle('NativeBase.Text', {}, mapPropsToStyleNames)(AnimatedText);

export {
  StyledText as Text,
};
