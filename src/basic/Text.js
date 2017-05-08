import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import { connectAnimation } from '@shoutem/animation';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Text extends Component {
  render() {
    return (
      <RNText
        ref={c => this._root = c}
        {...this.props}
      >
        {this.props.capitalize ? this.props.children.toUpperCase() : this.props.children}
      </RNText>
    );
  }
}

Text.propTypes = {
  ...RNText.propTypes,
  uppercase: React.PropTypes.bool,
  style: React.PropTypes.object,
};

const AnimatedText = connectAnimation(Text);
const StyledText = connectStyle('NativeBase.Text', {}, mapPropsToStyleNames)(Text);

export {
  StyledText as Text,
};
