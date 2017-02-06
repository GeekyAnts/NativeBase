/* @flow */

import React from 'react';
import { View, ListView } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';

class Card extends NativeBaseComponent {


  renderChildren() {
    const childrenArray = React.Children.map(this.props.children, child => child);

    return childrenArray;
  }

  render() {
    if (this.props.dataArray && this.props.renderRow) {
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      const dataSource = ds.cloneWithRows(this.props.dataArray);
      return (
        <ListView
          {...this.props}
          enableEmptySections
          dataSource={dataSource}
          renderRow={this.props.renderRow}
        />
      );
    }
    return (
      <View ref={c => this._root = c} {...this.props} >
        {this.renderChildren()}
      </View>
    );
  }

}

Card.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
  dataArray: React.PropTypes.object,
  renderRow: React.PropTypes.object,
};

const StyledCard = connectStyle('NativeBase.Card', {}, mapPropsToStyleNames)(Card);

export {
  StyledCard as Card,
};
