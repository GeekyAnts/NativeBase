import React, { Component, createRef } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type BodyProps = {
  style?: StyleProp<ViewStyle>;
};

class Body extends Component<BodyProps, {}> {
  _root = createRef<View>();
  render() {
    return <View ref={this._root} {...this.props} />;
  }
}
const StyledBody = connectStyle('NativeBase.Body', {}, mapPropsToStyleNames)(Body);

export { StyledBody as Body };
