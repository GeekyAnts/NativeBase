import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class CardItem extends Component {
  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props} activeOpacity={(this.props.button) ? 0.2 : 1}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

CardItem.propTypes = {
  ...TouchableOpacity.propTypes,
};

const StyledCardItem = connectStyle('NativeBase.CardItem', {}, mapPropsToStyleNames)(CardItem);

export {
  StyledCardItem as CardItem,
};
