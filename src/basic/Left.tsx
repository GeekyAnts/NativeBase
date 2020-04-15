import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type LeftProps = {
  style?: StyleProp<ViewStyle>;
};

class Left extends Component<LeftProps, {}> {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledLeft = connectStyle('NativeBase.Left', {}, mapPropsToStyleNames)(Left);

export { StyledLeft as Left };
