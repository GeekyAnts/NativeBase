import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type TabHeadingNBProps = {
  style?: StyleProp<ViewStyle>;
};

class TabHeadingNB extends Component<TabHeadingNBProps, {}> {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledTabHeadingNB = connectStyle('NativeBase.TabHeading', {}, mapPropsToStyleNames)(TabHeadingNB);

export { StyledTabHeadingNB as TabHeading };
