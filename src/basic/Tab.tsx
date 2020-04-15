import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type TabProps = {
  style?: StyleProp<ViewStyle>;
};

class Tab extends Component<TabProps, {}> {
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}
const StyledTab = connectStyle('NativeBase.Tab', {}, mapPropsToStyleNames)(Tab);

export { StyledTab as Tab };
