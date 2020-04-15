import React from 'react';
import { Image, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';
import _ from 'lodash';
import md5 from 'blueimp-md5';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import computeProps from '../utils/computeProps';
import NativeBaseComponent from './Base/NativeBaseComponent';
const GRAVATAR_URI = 'https://www.gravatar.com/avatar/';

type GravatarProps = {
  email: string;
  style?: StyleProp<ViewStyle>;
  size?: number;
  circular?: boolean;
  square?: boolean;
  contain?: boolean;
};

class Gravatar extends NativeBaseComponent<GravatarProps, {}> {
  getInitialStyle() {
    return {
      gravatar: {
        borderRadius: this.props.size ? this.props.size / 2 : 15,
        width: this.props.size ? this.props.size : 30,
        height: this.props.size ? this.props.size : 30,
        resizeMode: this.props.contain ? 'contain' : undefined,
      },
    };
  }
  prepareRootProps = () => {
    const gravatarStyle = {
      width: this.props.size,
      height: this.props.size,
      borderRadius: 0,
    };

    if (this.props.circular) {
      gravatarStyle.width = this.props.size;
      gravatarStyle.height = this.props.size;
      gravatarStyle.borderRadius = this.props.size / 2;
    }
    const defaultProps = {
      style: _.merge(this.getInitialStyle().gravatar, gravatarStyle),
    };

    return computeProps(this.props, defaultProps);
  };
  render() {
    const props = this.prepareRootProps();
    const uri = `${GRAVATAR_URI + md5(this.props.email)}?s=${props.style.height}`;

    return <Image {...props} source={{ uri }} />;
  }
}
const StyledGravatar = connectStyle('NativeBase.Gravatar', {}, mapPropsToStyleNames)(Gravatar);

export { StyledGravatar as Gravatar };
