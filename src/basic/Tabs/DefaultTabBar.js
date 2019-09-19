import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import _ from 'lodash';
import { connectStyle, StyleProvider } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames';
import variable from './../../theme/variables/platform';
import { TabHeading } from '../TabHeading';
import { Text } from '../Text';
import { TabContainer } from '../TabContainer';
import { ViewPropTypes } from '../../utils';
const ReactNative = require('react-native');

const { StyleSheet, View, Animated, Platform } = ReactNative;
const Button = require('./Button');

const DefaultTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    disabledTextColor: PropTypes.string,
    tabStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
    tabContainerStyle: ViewPropTypes.style
  },
  contextTypes: {
    theme: PropTypes.object
  },

  getDefaultProps() {
    return {
      activeTextColor: variable.topTabBarActiveTextColor,
      inactiveTextColor: variable.topTabBarTextColor,
      disabledTextColor: variable.tabBarDisabledTextColor,
      backgroundColor: 'transparent',
      tabFontSize: variable.tabFontSize
    };
  },

  renderTabOption(name, page) {},

  renderTab(
    name,
    page,
    isTabActive,
    onPressHandler,
    tabStyle,
    activeTabStyle,
    textStyle,
    activeTextStyle,
    tabHeaderStyle,
    tabFontSize,
    disabled,
    disabledTextColor
  ) {
    const headerContent =
      typeof name !== 'string' ? name.props.children : undefined;
    const { activeTextColor, inactiveTextColor } = this.props;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    const isDisabled = disabled !== undefined;
    let textColor;
    if (isDisabled) {
      textColor = disabledTextColor;
    } else if (isTabActive) {
      textColor = activeTextStyle ? activeTextStyle.color : activeTextColor; // activeTextColor: default color for active Tab
    } else {
      textColor = textStyle ? textStyle.color : inactiveTextColor; // inactiveTextColor: default color for inactive Tab
    }

    if (typeof name === 'string') {
      return (
        <Button
          style={{ flex: 1 }}
          disabled={isDisabled}
          key={name}
          onPress={() => onPressHandler(page)}
        >
          <TabHeading
            style={isTabActive ? activeTabStyle : tabStyle}
            active={isTabActive}
          >
            <Text
              style={[
                { fontSize: tabFontSize },
                isTabActive ? activeTextStyle : textStyle,
                { color: textColor }
              ]}
            >
              {name}
            </Text>
          </TabHeading>
        </Button>
      );
    }
    return (
      <Button
        style={{ flex: 1 }}
        disabled={isDisabled}
        key={_.random(1.2, 5.2)}
        onPress={() => onPressHandler(page)}
      >
        <TabHeading style={tabHeaderStyle} active={isTabActive}>
          {headerContent}
        </TabHeading>
      </Button>
    );
  },

  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    const platformStyle = variables.platformStyle;
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: variables.topTabBarActiveBorderColor,
      bottom: 0
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs]
    });
    return (
      <TabContainer
        style={[
          { backgroundColor: variables.tabDefaultBg },
          this.props.tabContainerStyle ? this.props.tabContainerStyle : {}
        ]}
      >
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(
            name,
            page,
            isTabActive,
            this.props.goToPage,
            this.props.tabStyle[page],
            this.props.activeTabStyle[page],
            this.props.textStyle[page],
            this.props.activeTextStyle[page],
            this.props.tabHeaderStyle[page],
            variables.tabFontSize,
            this.props.disabled[page],
            this.props.disabledTextColor
          );
        })}
        <Animated.View
          style={[tabUnderlineStyle, { left }, this.props.underlineStyle]}
        />
      </TabContainer>
    );
  }
});

// module.exports = DefaultTabBar;
const StyledTab = connectStyle(
  'NativeBase.DefaultTabBar',
  {},
  mapPropsToStyleNames
)(DefaultTabBar);
export { StyledTab as DefaultTabBar };
