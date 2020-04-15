import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type RightProps = {
  style?: StyleProp<ViewStyle>;
};

class Right extends Component<RightProps, {}> {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledRight = connectStyle('NativeBase.Right', {}, mapPropsToStyleNames)(Right);

export { StyledRight as Right };
