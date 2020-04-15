import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Item extends Component<{}, {}> {
  render() {
    return <Picker.Item {...this.props} />;
  }
}
const StyledItem = connectStyle('NativeBase.Item', {}, mapPropsToStyleNames)(Item);

export { StyledItem as Item };
