/* @flow */


import React, { Component } from 'react';
import { View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class Toast extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}></View>
    );
  }
}

Toast.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledToast = connectStyle('NativeBase.Toast', {}, mapPropsToStyleNames)(Toast);
export {
  StyledToast as Toast,
};
