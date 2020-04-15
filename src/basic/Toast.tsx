import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type ToastProps = {
  style?: StyleProp<ViewStyle>;
};

class Toast extends Component<ToastProps, {}> {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledToast = connectStyle('NativeBase.Toast', {}, mapPropsToStyleNames)(Toast);

export { StyledToast as Toast };
