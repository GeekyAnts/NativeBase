import React, { Component } from 'react';
import { Image } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import computeProps from '../Utils/computeProps';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Thumbnail extends Component {

  render() {
    return (
      <Image ref={c => this._root = c} {...this.props} />
    );
  }
}

Thumbnail.propTypes = {
  ...Image.propTypes,
  style: React.PropTypes.object,
  square: React.PropTypes.bool,
  circular: React.PropTypes.bool,
  size: React.PropTypes.number,
};

const StyledThumbnail = connectStyle('NativeBase.Thumbnail', {}, mapPropsToStyleNames)(Thumbnail);

export {
  StyledThumbnail as Thumbnail,
};
