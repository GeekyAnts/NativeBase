/* @flow */


import React, { Component } from 'react';
import { View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class Segment extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}></View>
    );
  }
}

Segment.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledSegment = connectStyle('NativeBase.Segment', {}, mapPropsToStyleNames)(Segment);
export {
  StyledSegment as Segment,
};
