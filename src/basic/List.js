import React, { Component } from 'react';
import { ListView, View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class List extends Component {

  constructor(props) {
    super(props);
    if (props.dataArray && props.renderRow) {
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
        dataSource: ds.cloneWithRows(props.dataArray)
      }
    } else {
      this.state = {}
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.dataSource) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.dataArray)
      });
    }
  }
  renderChildren() {
    const childrenArray = React.Children.map(this.props.children, child => child);

    return childrenArray;
  }

  render() {
    if (this.state.dataSource) {
      return (
        <ListView
          {...this.props}
          ref={(ref) => this.root = ref}
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
