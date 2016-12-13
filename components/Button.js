/* @flow */
'use strict';

import React, {Component} from 'react';
import { TouchableOpacity, Platform, View } from 'react-native';
import _ from 'lodash';
import computeProps from '../Utils/computeProps';
import ReactNativePropRegistry from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativePropRegistry';
import { connectStyle } from '@shoutem/theme';

import { variables, Badge, Text } from 'native-base/Advanced';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Button extends Component {

  getInitialStyle() {
    return {
      borderedBtn: {
        borderWidth: (this.props.bordered) ? 1 : undefined,
        borderRadius: (this.props.rounded && this.props.bordered) ? variables.borderRadiusLarge : 2,
      },
    }
  }

  prepareRootProps() {
    var defaultProps = {
      style: this.getInitialStyle().borderedBtn
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    return(
      <TouchableOpacity
        {...this.prepareRootProps()}
        ref={c => this._root = c}
        activeOpacity={0.5}
      >
        <View style={{alignSelf: 'center',zIndex: 99}}>{(this.props.badgeValue) ? <Badge style={{backgroundColor: (this.props.badgeColor) ? this.props.badgeColor : undefined}}><Text style={this.props.badgeValueStyle}>{this.props.badgeValue}</Text></Badge> : null}</View>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
};



const StyledButton = connectStyle('NativeBase.Button', {}, mapPropsToStyleNames)(Button);
export {
  StyledButton as Button,
};
