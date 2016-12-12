/* @flow */


import React, { Component } from 'react';
import { TouchableOpacity, Platform, View } from 'react-native';
import _ from 'lodash';
import { Button, Text, variables } from 'native-base/Advanced';
import { connectStyle } from '@shoutem/theme';

import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class SButton extends Component {

  render() {
    return (
      <Button ref={c => this._root = c} {...this.props}>
        {(this.props.iconLeft) ? <View>{this.props.iconLeft}</View> : <View />}
        {(this.props.buttonText) ? <Text style={this.props.buttonTextStyle}>{this.props.buttonText}</Text> : <View />}
        {(this.props.iconRight) ? <View>{this.props.iconRight}</View> : <View />}
      </Button>
    );
  }
}

SButton.propTypes = {
  ...TouchableOpacity.propTypes,
};


const StyledSButton = connectStyle('NativeBase.SButton', {}, mapPropsToStyleNames)(SButton);
export {
  StyledSButton as SButton,
};
