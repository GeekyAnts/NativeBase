import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        ref={c => this._root = c}
        {...this.props} activeOpacity={(this.props.button) ? 0.2 : 1}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  itemDivider: React.PropTypes.bool,
  button: React.PropTypes.bool,
};

const StyledListItem = connectStyle('NativeBase.ListItem', {}, mapPropsToStyleNames)(ListItem);

export {
  StyledListItem as ListItem,
};
