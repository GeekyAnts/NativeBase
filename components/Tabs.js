import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Tabs extends Component {
  render() {
    return (
      <ScrollableTabView ref={c => this._root = c} {...this.props}>
        {this.props.children}
      </ScrollableTabView>
    );
  }
}

Tabs.propTypes = {
  ...ScrollableTabView.propTypes,
};

const StyledTabs = connectStyle('NativeBase.Tabs', {}, mapPropsToStyleNames)(Tabs);

export {
  StyledTabs as Tabs,
};
