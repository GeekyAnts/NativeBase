import React, { Component } from 'react';
import { Picker, PickerProps } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

export default class PickerNB extends Component<PickerProps, {}> {
  render() {
    return <Picker {...this.props}>{this.props.children}</Picker>;
  }
}

const StyledPickerNB = connectStyle('NativeBase.PickerNB', {}, mapPropsToStyleNames)(PickerNB);

export { StyledPickerNB as PickerNB };
