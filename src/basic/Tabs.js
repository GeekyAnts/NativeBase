import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import variables from '../theme/variables';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Tabs extends Component {
  render() {
    return (
      <ScrollableTabView
        ref={c => this._root = c} {...this.props}
        tabBarInactiveTextColor={variables.tabBarActiveTextColor}
        tabBarActiveTextColor={variables.tabBarActiveTextColor}
        tabBarUnderlineStyle={{ backgroundColor: variables.tabBarActiveTextColor }}
      >
        {this.props.children}
      </ScrollableTabView>
    );
  }
}

Tabs.propTypes = {
  ...ScrollableTabView.propTypes,
  style: React.PropTypes.object,
};

const StyledTabs = connectStyle('NativeBase.Tabs', {}, mapPropsToStyleNames)(Tabs);

export {
  StyledTabs as Tabs,
};
