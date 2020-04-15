import { connectStyle } from 'native-base-shoutem-theme';
import * as React from 'react';
import { FlatList, View, FlatListProps, ListViewProps } from 'react-native';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

interface ComponentProps extends FlatListProps<any> {
  dataArray: FlatListProps<any>['data'];
  renderRow: ListViewProps['renderRow'];
}

class List extends React.PureComponent<ComponentProps, {}> {
  render() {
    const { dataArray } = this.props;

    if (dataArray) {
      return (
        <FlatList
          data={dataArray}
          renderItem={({ item, index }) =>
            this.props.renderItem ? this.props.renderItem : this.props.renderRow(item, 0, index)
          }
          {...this.props}
        />
      );
    }

    return <View {...this.props} />;
  }
}
const StyledList = connectStyle('NativeBase.List', {}, mapPropsToStyleNames)(List);

export { StyledList as List };
