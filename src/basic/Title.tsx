import React, { Component } from 'react';
import { Text, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type TitleProps = {
  style?: StyleProp<ViewStyle>;
};

class Title extends Component<TitleProps, {}> {
  render() {
    return <Text ref={c => (this._root = c)} numberOfLines={1} {...this.props} />;
  }
}
const StyledTitle = connectStyle('NativeBase.Title', {}, mapPropsToStyleNames)(Title);

export { StyledTitle as Title };
