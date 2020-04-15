import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type FooterTabProps = {
  style?: StyleProp<ViewStyle>;
};

class FooterTab extends Component<FooterTabProps, {}> {
  render() {
    return <View {...this.props}>{this.props.children}</View>;
  }
}
const StyledFooterTab = connectStyle('NativeBase.FooterTab', {}, mapPropsToStyleNames)(FooterTab);

export { StyledFooterTab as FooterTab };
