import React, { Component } from 'react';
import { Picker } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Item extends Component {
  render() {
    return (
      <Picker.Item ref={c => this._root = c} {...this.props} />
    );
  }
}

Item.propTypes = {
  ...Picker.Item.propTypes,
};

const StyledItem = connectStyle('NativeBase.Item', {}, mapPropsToStyleNames)(Item);

export {
  StyledItem as Item,
};
