import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { variables } from 'native-base';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Tabs extends Component {
  render() {
    return (
      <ScrollableTabView
        ref={c => this._root = c} {...this.props}
        tabBarInactiveTextColor={variables.sTabBarActiveTextColor}
        tabBarActiveTextColor={variables.sTabBarActiveTextColor}
        tabBarUnderlineStyle={{ backgroundColor: variables.sTabBarActiveTextColor }}
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
