import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type TabContainerProps = {
  style?: StyleProp<ViewStyle>;
};

class TabContainer extends Component<TabContainerProps, {}> {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledTabContainer = connectStyle('NativeBase.TabContainer', {}, mapPropsToStyleNames)(TabContainer);

export { StyledTabContainer as TabContainer };
