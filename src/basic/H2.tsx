import React, { Component } from 'react';
import { Text, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type H2Props = {
  style?: StyleProp<ViewStyle>;
};

class H2 extends Component<H2Props, {}> {
  render() {
    return <Text ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledH2 = connectStyle('NativeBase.H2', {}, mapPropsToStyleNames)(H2);

export { StyledH2 as H2 };
