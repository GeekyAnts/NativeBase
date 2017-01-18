import React from 'react';
import { ListView, View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';

class List extends NativeBaseComponent {


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

const StyledList = connectStyle('NativeBase.List', {}, mapPropsToStyleNames)(List);

export {
  StyledList as List,
};
