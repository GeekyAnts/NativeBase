import React, { Component } from 'react';
import { View, Animated, Dimensions, ScrollView, Platform, ViewPagerAndroid } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

import { TabBar } from './TabBar';
class STabs extends Component {

  static get defaultProps() {
    return {
      tabBarPosition: 'top',
      initialPage: 0,
      page: -1,
      locked: true,
      onChangeTab: () => {},
      onScroll: () => {},
      scrollWithoutAnimation: false,
    };
  }

  constructor(props) {
    super(props);
    const currentPage = (this.props.initialPage) ? this.props.initialPage : 0;
    this.state = {
      scrollValue: new Animated.Value(this.props.initialPage),
      containerWidth: Dimensions.get('window').width,
      currentPage,
    };
  }
  componentWillReceiveProps(props) {
    if (props.page >= 0 && props.page !== this.state.currentPage) {
      this.goToPage(props.page);
    }
  }

  goToPage(pageNumber) {
    if (Platform.OS === 'ios') {
      const offset = pageNumber * this.state.containerWidth;
      if (this.scrollView) {
        this.scrollView.scrollTo({ x: offset, y: 0, animated: !this.props.scrollWithoutAnimation });
      }
    } else if (this.scrollView) {
      if (this.props.scrollWithoutAnimation) {
        this.scrollView.setPageWithoutAnimation(pageNumber);
      } else {
        this.scrollView.setPage(pageNumber);
      }
    }

    const currentPage = this.state.currentPage;
    this.contentKey({
      page: pageNumber,
      callback: this.tabChange.bind(this, currentPage, pageNumber),
    });
  }


  contentKey({ page, children = this.props.children, callback = () => {} }) {
    const newKeys = page;
    this.setState({ currentPage: page, sceneKeys: newKeys }, callback);
  }

  tabChange(prevPage, currentPage) {
    this.props.onChangeTab({
      i: currentPage,
      ref: this.tabContent()[currentPage],
      from: prevPage,
    });
  }

  getScrollValue(value) {
    this.state.scrollValue.setValue(value);
    this.props.onScroll(value);
  }

  renderContent() {
    const content = this.getContent();
    if (Platform.OS === 'ios') {
      return (<ScrollView
        horizontal
        pagingEnabled
        automaticallyAdjustContentInsets={false}
        contentOffset={{ x: this.props.initialPage * this.state.containerWidth }}
        ref={(scrollView) => { this.scrollView = scrollView; }}
        onScroll={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          this.getScrollValue(offsetX / this.state.containerWidth);
        }}
        scrollEventThrottle={16}
        scrollsToTop={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={!this.props.locked}
        directionalLockEnabled
        alwaysBounceVertical={false}
      >
        {content}
      </ScrollView>);
    } else {
      return (<ViewPagerAndroid
        style={{ flex: 1 }}
        initialPage={this.props.initialPage}
        scrollEnabled={!this.props.locked}
        onPageScroll={(e) => {
          const { offset, position } = e.nativeEvent;
          this.getScrollValue(position + offset);
        }}
        ref={(scrollView) => { this.scrollView = scrollView; }}
      >
        {content}
      </ViewPagerAndroid>);
    }
  }

  getContent() {
    return this.tabContent().map((child, idx) => <View
      key={idx}
      style={{ width: this.state.containerWidth }}
    >
      {child}
    </View>);
  }

  tabContent() {
    return React.Children.map(this.props.children, child => child);
  }

  renderTab(props) {
    if (this.props.renderTabBar === false) {
      return null;
    } else if (this.props.renderTabBar) {
      return React.cloneElement(this.props.renderTabBar(props), props);
    } else {
      return <TabBar {...props} vertical={this.props.vertical} />;
    }
  }

  render() {
    const tabBarProps = {
      goToPage: this.goToPage.bind(this),
      tabs: this.props.children.map(child => child.props.tabLabel),
      tabIcon: this.props.children.map(child => child.props.tabIcon),
      activeTab: this.state.currentPage,
      iconPresent: (this.props.children[0].props.tabIcon) ? true : false,
      tabBarTextStyle: this.props.tabBarTextStyle,
      tabBarIconStyle: this.props.tabBarIconStyle,
      tabBarUnderlineColor: this.props.tabBarUnderlineColor,
      underlineStyle: this.props.underlineStyle,
      tabBarStyle: this.props.tabBarStyle,
      scrollValue: this.state.scrollValue,
    };

    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.props.tabBarPosition === 'top' && this.renderTab(tabBarProps)}
        {this.renderContent()}
        <View style={(this.props.tabBarPosition === 'bottom') ? { bottom: (Platform.OS === 'ios') ? 0 : 23 } : {}}>
          {this.props.tabBarPosition === 'bottom' && this.renderTab(tabBarProps)}
        </View>
      </View>
    );
  }
}

STabs.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
  initialPage: React.PropTypes.number,
  tabBarPosition: React.PropTypes.string,
  tabBarTextStyle: React.PropTypes.object,
  tabBarIconStyle: React.PropTypes.object,
  tabBarStyle: React.PropTypes.object,
  underlineStyle: React.PropTypes.object,
  vertical: React.PropTypes.bool,
};

const StyledSTabs = connectStyle('NativeBase.STabs', {}, mapPropsToStyleNames)(STabs);

export {
  StyledSTabs as STabs,
};
