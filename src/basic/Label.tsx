import React, { Component } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type LabelProps = {
  style?: StyleProp<TextStyle>;
  floatBack?: number;
};

class Label extends Component<LabelProps, {}> {
  render() {
    return <Text ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledLabel = connectStyle('NativeBase.Label', {}, mapPropsToStyleNames)(Label);

export { StyledLabel as Label };
