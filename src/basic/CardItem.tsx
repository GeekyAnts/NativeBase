import React, { Component } from 'react';
import { TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type CardItemProps = {
  style?: StyleProp<ViewStyle>;
  header?: boolean;
  cardBody?: boolean;
  footer?: boolean;
  button?: boolean;
};

class CardItem extends Component<CardItemProps, {}> {
  _root = React.createRef<View & TouchableOpacity>();
  render() {
    if (this.props.button) {
      return (
        <TouchableOpacity ref={this._root} activeOpacity={0.2} {...this.props}>
          {this.props.children}
        </TouchableOpacity>
      );
    }

    return (
      <View ref={this._root} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}
const StyledCardItem = connectStyle('NativeBase.CardItem', {}, mapPropsToStyleNames)(CardItem);

export { StyledCardItem as CardItem };
