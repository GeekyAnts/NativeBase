import React, { Component } from 'react';
import { Image } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import computeProps from '../Utils/computeProps';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Thumbnail extends Component {
  propTypes: {
    style : React.PropTypes.object
  }

  prepareRootProps() {
    const type = {
      width: (this.props.size) ? this.props.size : 30,
      height: (this.props.size) ? this.props.size : 30,
      borderRadius: (this.props.size) ? ((this.props.square) ? 0
      : (this.props.size / 2)) : ((this.props.square) ? 0 : 15),
    };
    const defaultProps = {
      style: type,
    };
    return computeProps(this.props, defaultProps);
  }
  render() {
    return (
      <Image ref={c => this._root = c} {...this.prepareRootProps()} />
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
