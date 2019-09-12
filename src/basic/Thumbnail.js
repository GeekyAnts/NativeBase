import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Thumbnail extends Component {
  render() {
    return <Image ref={c => (this._root = c)} {...this.props} />;
  }
}

Thumbnail.propTypes = {
  ...Image.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  square: PropTypes.bool,
  circular: PropTypes.bool,
  size: PropTypes.number
};

const StyledThumbnail = connectStyle(
  'NativeBase.Thumbnail',
  {},
  mapPropsToStyleNames
)(Thumbnail);

export { StyledThumbnail as Thumbnail };
