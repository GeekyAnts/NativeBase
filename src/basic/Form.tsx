import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type FormProps = {
  style?: StyleProp<ViewStyle>;
};

class Form extends Component<FormProps, {}> {
  render() {
    return <View {...this.props} />;
  }
}
const StyledForm = connectStyle('NativeBase.Form', {}, mapPropsToStyleNames)(Form);

export { StyledForm as Form };
