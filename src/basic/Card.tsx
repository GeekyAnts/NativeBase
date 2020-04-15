import React, { Component } from 'react';
import { FlatList, View, StyleProp, TextStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type CardProps = {
  style?: StyleProp<TextStyle>;
  dataArray?: any[];
  renderRow?: (...args: any[]) => any;
};

class Card extends Component<CardProps, {}> {
  render() {
    if (this.props.dataArray && this.props.renderRow) {
      return (
        <FlatList
          {...this.props}
          data={this.props.dataArray}
          renderItem={this.props.renderRow}
          keyExtractor={(_item, index) => index.toString()}
        />
      );
    }

    return <View {...this.props}>{this.props.children}</View>;
  }
}
const StyledCard = connectStyle('NativeBase.Card', {}, mapPropsToStyleNames)(Card);

export { StyledCard as Card };
