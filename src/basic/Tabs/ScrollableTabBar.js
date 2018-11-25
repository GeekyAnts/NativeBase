import React, { Component } from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import _ from "lodash";
import { connectStyle, StyleProvider } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../../utils/mapPropsToStyleNames";
import variable from "./../../theme/variables/platform";
import { TabHeading } from "../TabHeading";
import { Text } from "../Text";
import { TabContainer } from "../TabContainer";
import { ViewPropTypes } from "../../utils";
const Button = require("./Button");
const ReactNative = require("react-native");
const {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions
} = ReactNative;

const WINDOW_WIDTH = Dimensions.get("window").width;

const ScrollableTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    scrollOffset: PropTypes.number,
    style: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
    onScroll: PropTypes.func
  },
  contextTypes: {
    theme: PropTypes.object
  },

  getDefaultProps() {
    return {
      scrollOffset: 52,
      activeTextColor: "navy",
      inactiveTextColor: "black",
      backgroundColor: variable.tabDefaultBg,
      style: {},
      tabStyle: {},
      tabsContainerStyle: {},
      underlineStyle: {},
      tabFontSize: variable.tabFontSize
    };
  },

  getInitialState() {
    this._tabsMeasurements = [];
    return {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: null
    };
  },

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView);
  },

  updateView(offset) {
    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;
    const lastTabPosition = tabCount - 1;

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return;
    }

    if (
      this.necessarilyMeasurementsCompleted(
        position,
        position === lastTabPosition
      )
    ) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  },

  necessarilyMeasurementsCompleted(position, isLastTab) {
    return (
      this._tabsMeasurements[position] &&
      (isLastTab || this._tabsMeasurements[position + 1]) &&
      this._tabContainerMeasurements &&
      this._containerMeasurements
    );
  },

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width;
    const tabWidth = this._tabsMeasurements[position].width;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth =
      (nextTabMeasurements && nextTabMeasurements.width) || 0;
    const tabOffset = this._tabsMeasurements[position].left;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    // center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
    newScrollX -=
      (containerWidth -
        (1 - pageOffset) * tabWidth -
        pageOffset * nextTabWidth) /
      2;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    if (Platform.OS === "android") {
      this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false });
    } else {
      const rightBoundScroll =
        this._tabContainerMeasurements.width -
        this._containerMeasurements.width;
      newScrollX =
        newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false });
    }
  },

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      const newLineLeft =
        pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft;
      const newLineRight =
        pageOffset * nextTabRight + (1 - pageOffset) * lineRight;

      this.state._leftTabUnderline.setValue(newLineLeft);
      this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
    } else {
      this.state._leftTabUnderline.setValue(lineLeft);
      this.state._widthTabUnderline.setValue(lineRight - lineLeft);
    }
  },

  renderTab(
    name,
    page,
    isTabActive,
    onPressHandler,
    onLayoutHandler,
    tabStyle,
    activeTabStyle,
    textStyle,
    activeTextStyle,
    tabHeaderStyle,
    tabFontSize
  ) {
    const headerContent =
      typeof name !== "string" ? name.props.children : undefined;
    const { activeTextColor, inactiveTextColor } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? "bold" : "normal";
    // const fontSize = tabFontSize;

    if (typeof name === "string") {
      return (
        <Button
          key={`${name}_${page}`}
          onPress={() => onPressHandler(page)}
          onLayout={onLayoutHandler}
        >
          <TabHeading
            scrollable
            style={isTabActive ? activeTabStyle : tabStyle}
            active={isTabActive}
          >
            <Text
              style={[
                isTabActive ? activeTextStyle : textStyle,
                { fontSize: tabFontSize }
              ]}
            >
              {name}
            </Text>
          </TabHeading>
        </Button>
      );
    } else {
      return (
        <Button
          key={_.random(1.2, 5.2)}
          onPress={() => onPressHandler(page)}
          onLayout={onLayoutHandler}
        >
          <TabHeading scrollable style={tabHeaderStyle} active={isTabActive}>
            {headerContent}
          </TabHeading>
        </Button>
      );
    }
  },

  measureTab(page, event) {
    const { x, width, height } = event.nativeEvent.layout;
    this._tabsMeasurements[page] = { left: x, right: x + width, width, height };
    this.updateView({ value: this.props.scrollValue._value });
  },

  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;
    const tabUnderlineStyle = {
      position: "absolute",
      height: 4,
      backgroundColor: variables.topTabBarActiveBorderColor,
      bottom: 0
    };

    const dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline
    };

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.backgroundColor },
          this.props.style
        ]}
        onLayout={this.onContainerLayout}
      >
        <ScrollView
          automaticallyAdjustContentInsets={false}
          ref={scrollView => {
            this._scrollView = scrollView;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}
          onScroll={this.props.onScroll}
          bounces={false}
          scrollsToTop={false}
        >
          <View
            style={[
              styles.tabs,
              { width: this.state._containerWidth },
              this.props.tabsContainerStyle
            ]}
            ref={"tabContainer"}
            onLayout={this.onTabContainerLayout}
          >
            {this.props.tabs.map((name, page) => {
              const isTabActive = this.props.activeTab === page;
              const renderTab = this.props.renderTab || this.renderTab;
              return renderTab(
                name,
                page,
                isTabActive,
                this.props.goToPage,
                this.measureTab.bind(this, page),
                this.props.tabStyle[page],
                this.props.activeTabStyle[page],
                this.props.textStyle[page],
                this.props.activeTextStyle[page],
                this.props.tabHeaderStyle[page],
                variables.tabFontSize
              );
            })}
            <Animated.View
              style={[
                tabUnderlineStyle,
                dynamicTabUnderline,
                this.props.underlineStyle
              ]}
            />
          </View>
        </ScrollView>
      </View>
    );
  },

  componentWillReceiveProps(nextProps) {
    // If the tabs change, force the width of the tabs container to be recalculated
    if (
      !_.isEqual(this.props.tabs, nextProps.tabs) &&
      this.state._containerWidth
    ) {
      this.setState({ _containerWidth: null });
    }
  },

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH;
    }
    this.setState({ _containerWidth: width });
    this.updateView({ value: this.props.scrollValue._value });
  },

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
    this.updateView({ value: this.props.scrollValue._value });
  }
});

// module.exports = ScrollableTabBar;
const StyledTab = connectStyle(
  "NativeBase.ScrollableTab",
  {},
  mapPropsToStyleNames
)(ScrollableTabBar);
export { StyledTab as ScrollableTab };
const styles = StyleSheet.create({
  tab: {
    height: 49,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    height: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#ccc"
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
