import { connectStyle } from 'native-base-shoutem-theme';
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class List extends Component {
  render() {
    const { dataArray } = this.props;

    if (dataArray) {
      return (
        <FlatList
          ref={ref => (this._root = ref)}
          data={dataArray}
          renderItem={({ item, index }) =>
            this.props.renderItem
              ? this.props.renderItem({ item, index })
              : this.props.renderRow(item, 0, index)
          }
          {...this.props}
        />
      );
    }
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

const StyledList = connectStyle('NativeBase.List', {}, mapPropsToStyleNames)(
  List
);

export { StyledList as List };
