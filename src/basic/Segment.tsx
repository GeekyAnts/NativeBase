import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type SegmentProps = {
  style?: StyleProp<ViewStyle>;
};

class Segment extends Component<SegmentProps, {}> {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledSegment = connectStyle('NativeBase.Segment', {}, mapPropsToStyleNames)(Segment);

export { StyledSegment as Segment };
