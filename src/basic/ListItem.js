import React, { Component } from 'react';
import { TouchableHighlight, Platform, TouchableNativeFeedback, View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class ListItem extends Component {
  render() {
    if (Platform.OS==='ios' || variable.androidRipple===false || Platform['Version'] <= 21 || !this.props.onPress) {
      return (
        <TouchableHighlight
          onPress={this.props.onPress}
          ref={c => this._root = c}
          underlayColor="#DDD"
        >
          <View {...this.props}>{this.props.children}</View>
        </TouchableHighlight>
      );
    }
    else {
      return(
          <TouchableNativeFeedback ref={c => this._root = c}
              onPress={this.props.onPress}
              background={(this.props.androidRippleColor) ? TouchableNativeFeedback.Ripple(this.props.androidRippleColor) : TouchableNativeFeedback.Ripple(variable.androidRippleColorDark)}>
              <View style={{ marginLeft: -17, paddingLeft: 17 }}>
                <View {...this.props}>{this.props.children}</View>
              </View>
          </TouchableNativeFeedback>
      );
    }
  }
}

ListItem.propTypes = {
  ...TouchableHighlight.propTypes,
  style: React.PropTypes.object,
  itemDivider: React.PropTypes.bool,
  button: React.PropTypes.bool,
};

const StyledListItem = connectStyle('NativeBase.ListItem', {}, mapPropsToStyleNames)(ListItem);

export {
  StyledListItem as ListItem,
};
