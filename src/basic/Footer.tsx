import React, { Component } from 'react';
import { View, SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import getStyle from '../utils/getStyle';
type FooterProps = {
  style?: StyleProp<ViewStyle>;
};

class Footer extends Component<FooterProps, {}> {
  render() {
    const { style } = this.props;

    return (
      <SafeAreaView
        style={{
          backgroundColor: getStyle(style).backgroundColor,
        }}
      >
        <View {...this.props} />
      </SafeAreaView>
    );
  }
}
const StyledFooter = connectStyle('NativeBase.Footer', {}, mapPropsToStyleNames)(Footer);

export { StyledFooter as Footer };
