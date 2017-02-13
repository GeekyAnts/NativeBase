const React = require('react');
const ReactNative = require('react-native');
import { connectStyle, StyleProvider } from '@shoutem/theme';
import variable from './../../theme/variables/platform';
import { TabHeading } from './../../index';
import { Text } from './../../index';
import { TabBorder } from './../../index';

const {
  StyleSheet,
  View,
  Animated,
  Platform
} = ReactNative;
const Button = require('./Button');

const DefaultTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    tabStyle: View.propTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: View.propTypes.style,
  },
  contextTypes: {
    theme: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      activeTextColor: variable.topTabBarActiveTextColor,
      inactiveTextColor: variable.topTabBarTextColor,
      backgroundColor: null,
    };
  },

  renderTabOption(name, page) {
  },

  renderTab(name, page, isTabActive, onPressHandler) {
    const headerContent = (typeof name!=='string') ? name.props.children : undefined;
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    if (typeof name==='string') {
      return <Button
        style={{flex: 1, }}
        key={name}
        onPress={() => onPressHandler(page)}
        >
        <TabHeading style={this.props.style} active={isTabActive}>
          <Text>
            {name}
          </Text>
        </TabHeading>
      </Button>;
    }
    else {
      return<Button
        style={{flex: 1, }}
        key={name}
        onPress={() => onPressHandler(page)}
        >
        <TabHeading style={this.props.style} active={isTabActive}>
          {headerContent}
        </TabHeading>
      </Button>
    }
  },

  render() {
    const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: variables.topTabBarActiveBorderColor,
      bottom: 0,
    };
    const tabs = {
      elevation: 3,
      height: 50,
      flexDirection: 'row',
      shadowColor: (platformStyle==='material') ? '#000' : undefined,
      shadowOffset: (platformStyle==='material') ? {width: 0, height: 2} : undefined,
      shadowOpacity: (platformStyle==='material') ?  0.2 : undefined,
      shadowRadius: (platformStyle==='material') ? 1.2 : undefined,
      justifyContent: 'space-around',
      borderBottomWidth: (Platform.OS=='ios') ? variables.borderWidth : 0,
      borderColor: variables.topTabBarBorderColor,
    };


    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });
    return (
      <View style={[tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View style={[tabUnderlineStyle, { left, }, this.props.underlineStyle, ]} />
      </View>
    );
  },
});

// module.exports = DefaultTabBar;
const StyledTab = connectStyle('NativeBase.DefaultTabBar', {}, mapPropsToStyleNames)(DefaultTabBar);
export {
  StyledTab as DefaultTabBar,
};
