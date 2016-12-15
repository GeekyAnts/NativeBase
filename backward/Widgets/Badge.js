/* @flow */


import React from 'react';
import { View, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import { Text } from './Text';


class Badge extends NativeBaseComponent {

  static propTypes = {
    style: React.PropTypes.object,
  }

  render() {
    return (
      <View ref={c => this._root = c} {...this.props}>
        <Text>
          {this.props.children}
        </Text>
      </View>
    );
  }

}
Badge.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledBadge = connectStyle('NativeBase.Badge', {}, mapPropsToStyleNames)(Badge);

export {
  StyledBadge as Badge,
};
