import React, { Component } from 'react';
import { Image, StyleProp, ImageSourcePropType, ImageStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type ThumbnailProps = {
  style?: StyleProp<ImageStyle>;
  square?: boolean;
  circular?: boolean;
  size?: number;
  source: ImageSourcePropType;
};

class Thumbnail extends Component<ThumbnailProps, {}> {
  render() {
    return <Image ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledThumbnail = connectStyle('NativeBase.Thumbnail', {}, mapPropsToStyleNames)(Thumbnail);

export { StyledThumbnail as Thumbnail };
