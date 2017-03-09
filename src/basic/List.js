import React, { Component } from 'react';
import { ListView, View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class List extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataArray)
    }
  }
  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.dataArray)
    });
  }
  renderChildren() {
    const childrenArray = React.Children.map(this.props.children, child => child);

    return childrenArray;
  }

  render() {
    if (this.props.dataArray && this.props.renderRow) {
      return (
        <ListView
          {...this.props}
          enableEmptySections
          dataSource={this.state.dataSource}
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
