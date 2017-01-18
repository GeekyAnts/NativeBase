/* @flow */


import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../basic/Text';
import { Button } from '../basic/Button';
import { connectStyle } from '@shoutem/theme';

import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class SButton extends Component {

  render() {
    return (
      <Button ref={c => this._root = c} {...this.props}>
        {(this.props.iconLeft) ? <View>{this.props.iconLeft}</View> : <View />}
        {(this.props.buttonText) ? <Text style={this.props.buttonTextStyle}>
          {this.props.buttonText}</Text> : <View />}
        {(this.props.iconRight) ? <View>{this.props.iconRight}</View> : <View />}
      </Button>
    );
  }
}

SButton.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  iconLeft: React.PropTypes.object,
  buttonText: React.PropTypes.string,
  iconRight: React.PropTypes.object,
  buttonTextStyle: React.PropTypes.object,
};


const StyledSButton = connectStyle('NativeBase.SButton', {}, mapPropsToStyleNames)(SButton);
export {
  StyledSButton as SButton,
};
