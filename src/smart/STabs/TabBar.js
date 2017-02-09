import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { IconNB } from '../../basic/IconNB';
import { Button } from '../../basic/Button';
import { Text } from '../../basic/Text';
import variables from '../../theme/variables/platform';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
class TabBar extends Component {

  renderLabelOption(name, page) {
    const isTabActive = this.props.activeTab === page;

    return (
      <View style={[{ flex: 1 }, this.props.tabBarStyle]} key={name}>
        <Button
          transparent onPress={() => this.props.goToPage(page)}
          isTabActive={this.props.activeTab === page}
        >
          <Text style={this.props.tabBarTextStyle}>{name}</Text>
        </Button>
      </View>
    );
  }

  renderTab(props) {
    const newTab = [];
    props.tabs.forEach((tabLabel, index) => {
      newTab.push({ label: tabLabel, icon: props.tabIcon[index] });
    });
    return this.renderNewTab(newTab);
  }

  renderNewTab(newTab) {
    return newTab.map((tab, i) => this.renderButtonTab(tab.label, tab.icon, i));
  }

  renderButtonTab(label, icon, page) {
    const isTabActive = this.props.activeTab === page;

    return (
      <View key={page} style={[{ flex: 1 }, this.props.tabBarStyle]}>
        <Button transparent onPress={() => this.props.goToPage(page)} isTabActive={this.props.activeTab === page} style={{ flexDirection: (this.props.vertical) ? 'column' : 'row' }}>
          <IconNB name={icon} style={this.props.tabBarIconStyle} />
          <Text style={this.props.tabBarTextStyle}>{label}</Text>
        </Button>
      </View>
    );
  }

  render() {
    const containerWidth = Dimensions.get('window').width;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: variables.sTabBarActiveTextColor,
      bottom: 0,
    };
    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs],
    });
    return (
      <View ref={c => this._root = c} {...this.props}>
        {(this.props.iconPresent) ? this.renderTab(this.props) :
          this.props.tabs.map((tab, i) => this.renderLabelOption(tab, i))}
        <Animated.View style={[tabUnderlineStyle, { left }, this.props.underlineStyle]} />
      </View>
    );
  }
}

TabBar.propTypes = {
  ...View.propTypes,
};

const StyledTabBar = connectStyle('NativeBase.TabBar', {}, mapPropsToStyleNames)(TabBar);

export {
  StyledTabBar as TabBar,
};
