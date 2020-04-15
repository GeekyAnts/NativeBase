import React, { Component } from 'react';
import { Text, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type H3Props = {
  style?: StyleProp<ViewStyle>;
};

class H3 extends Component<H3Props, {}> {
  render() {
    return <Text ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledH3 = connectStyle('NativeBase.H3', {}, mapPropsToStyleNames)(H3);

export { StyledH3 as H3 };
