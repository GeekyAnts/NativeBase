import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class ListItem extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };
  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    if (
      Platform.OS === 'ios' ||
      Platform.OS === 'web' ||
      variables.androidRipple === false ||
      (!this.props.onPress && !this.props.onLongPress) ||
      Platform.Version <= 21
    ) {
      return (
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          ref={c => (this._root = c)}
          underlayColor={variables.listBtnUnderlayColor}
          {...this.props}
          style={this.props.touchableHighlightStyle}
        >
          <View {...this.props} testID={undefined}>
            {this.props.children}
          </View>
        </TouchableHighlight>
      );
    }
    return (
      <TouchableNativeFeedback
        ref={c => (this._root = c)}
        useForeground
        {...this.props}
      >
        <View style={{ marginLeft: -17, paddingLeft: 17 }}>
          <View {...this.props} testID={undefined}>
            {this.props.children}
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

ListItem.propTypes = {
  ...TouchableHighlight.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  touchableHighlightStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  itemDivider: PropTypes.bool,
  button: PropTypes.bool
};

const StyledListItem = connectStyle(
  'NativeBase.ListItem',
  {},
  mapPropsToStyleNames
)(ListItem);

export { StyledListItem as ListItem };
