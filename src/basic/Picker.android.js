/* @flow */

import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

export default class PickerNB extends Component {


  render() {
    return (
      <Picker ref={c => this._root = c} {...this.props}>
        {this.props.children}
      </Picker>
    );
  }

}

PickerNB.Item = React.createClass({

  render() {
    return (
      <Picker.Item {...this.props()} />
    );
  },
});

PickerNB.propTypes = {
  ...Picker.propTypes,
};

const StyledPickerNB = connectStyle('NativeBase.PickerNB', {}, mapPropsToStyleNames)(PickerNB);

export {
  StyledPickerNB as PickerNB,
};
