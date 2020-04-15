import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type SeparatorProps = {
  style?: StyleProp<ViewStyle>;
};

class Separator extends Component<SeparatorProps, {}> {
  _root = React.createRef<View>();
  render() {
    return <View ref={this._root} {...this.props} />;
  }
}
const StyledSeparator = connectStyle('NativeBase.Separator', {}, mapPropsToStyleNames)(Separator);

export { StyledSeparator as Separator };
