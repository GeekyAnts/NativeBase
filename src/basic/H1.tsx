import React, { Component } from 'react';
import { Text, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type H1Props = {
  style?: StyleProp<ViewStyle>;
};

class H1 extends Component<H1Props, {}> {
  render() {
    return <Text ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledH1 = connectStyle('NativeBase.H1', {}, mapPropsToStyleNames)(H1);

export { StyledH1 as H1 };
