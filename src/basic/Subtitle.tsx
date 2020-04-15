import React, { Component } from 'react';
import { Text, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type SubtitleProps = {
  style?: StyleProp<ViewStyle>;
};

class Subtitle extends Component<SubtitleProps, {}> {
  render() {
    return <Text ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledSubtitle = connectStyle('NativeBase.Subtitle', {}, mapPropsToStyleNames)(Subtitle);

export { StyledSubtitle as Subtitle };
