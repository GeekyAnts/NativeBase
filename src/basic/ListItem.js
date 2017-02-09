import React, { Component } from 'react';
import { TouchableOpacity, Platform, TouchableNativeFeedback, View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class ListItem extends Component {
  render() {
    if (Platform.OS==='ios' || variable.androidRipple===false || !this.props.onPress) {
      return (
        <TouchableOpacity
          ref={c => this._root = c}
          {...this.props} activeOpacity={(this.props.onPress) ? 0.4 : 1}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    }
    else {
      return(
          <TouchableNativeFeedback ref={c => this._root = c}
              onPress={this.props.onPress}
              background={(this.props.androidRippleColor) ? TouchableNativeFeedback.Ripple(this.props.androidRippleColor) : TouchableNativeFeedback.Ripple(variable.androidRippleColorDark)}>
              <View {...this.props}>{this.props.children}</View>
          </TouchableNativeFeedback>
      );
    }
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
