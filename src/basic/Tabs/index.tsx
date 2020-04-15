import * as React from 'react';
import _ from 'lodash';
import ReactNative, { StyleProp, ViewStyle, View, TextStyle } from 'react-native';

import { InteractionManager } from '../../utils';
import { SceneComponent } from './SceneComponent';
import { DefaultTabBar } from './DefaultTabBar';

const { Dimensions, Animated, ScrollView, StyleSheet } = ReactNative;

interface ComponentProps {
  tabBarPosition: 'top' | 'bottom' | 'overlayTop' | 'overlayBottom';
  initialPage: number;
  page: number;
  onChangeTab:(params: {
    i: number,
    ref?: React.RefObject<React.ReactNode>,
    from: number
}) => void;
  onScroll: (value: number) => void;
  renderTabBar: any;
  style: StyleProp<ViewStyle>;
  contentProps: object;
  scrollWithoutAnimation: boolean;
  locked: boolean;
  prerenderingSiblingsNumber?: number;
  tabBarBackgroundColor?: ViewStyle['backgroundColor'];
  tabBarActiveTextColor?: TextStyle['color'];
  tabBarInactiveTextColor?: TextStyle['color'];
  tabBarUnderlineStyle?: StyleProp<ViewStyle>
  tabContainerStyle?: StyleProp<ViewStyle>;
  tabBarTextStyle?: any[];
  heading?: React.ReactNode;
}

interface TabBarProps {
  goToPage: (pageNumber: number) => void;
  tabs?: any[];
  tabStyle?: any[];
  activeTabStyle?: any[];
  textStyle?: any[];
  activeTextStyle?: any[];
  tabHeaderStyle?: any[];
  disabled?: any[];
  activeTab?: ComponentState['currentPage'],
  scrollValue?: ComponentState['scrollValue'],
  containerWidth?: ComponentState['containerWidth'],
  backgroundColor?: string,
  activeTextColor?: string,
  inactiveTextColor?: string,
  tabBarTextStyle?: {},
  underlineStyle?: {},
  tabContainerStyle?: {},
  style?: {},
};

interface ComponentState {
  currentPage: number;
  sceneKeys: string[];
  containerWidth: number;
  scrollValue: ReactNative.Animated.Value;
}

class ScrollableTabView extends React.Component<ComponentProps, ComponentState> {
  scrollView: ReactNative.ScrollView | null = null;

  static defaultProps = {
    tabBarPosition: 'top',
    initialPage: 0,
    page: -1,
    onChangeTab: () => {},
    onScroll: () => {},
    contentProps: {},
    scrollWithoutAnimation: false,
    locked: false,
    prerenderingSiblingsNumber: 0
  };
  state = {
    currentPage: this.props.initialPage,
    scrollValue: new Animated.Value(this.props.initialPage),
    containerWidth: Dimensions.get('window').width,
    sceneKeys: this.newSceneKeys({ currentPage: this.props.initialPage })
  };

  componentDidMount() {
    const scrollFn = () => {
      if (this.scrollView) {
        this.state.scrollValue.setValue(this.props.initialPage);
      }
    };

    InteractionManager.runAfterInteractions(scrollFn);
    // because of contentOffset is not working on Android
    setTimeout(() => {
      if (this.scrollView) {
        this.scrollView.scrollTo({
          x: this.props.initialPage * this.state.containerWidth,
          animated: false
        });
      }
    });
  }
  UNSAFE_componentWillReceiveProps(props: React.PropsWithChildren<ComponentProps>) {
    if (props.children !== this.props.children) {
      this.updateSceneKeys({
        page: this.state.currentPage,
        children: props.children
      });
    }
    if (props.page >= 0 && props.page !== this.state.currentPage) {
      this.goToPage(props.page);
    }
  }
  goToPage(pageNumber: number) {
    const offset = pageNumber * this.state.containerWidth;

    if (this.scrollView) {
      this.scrollView.scrollTo({
        x: offset,
        y: 0,
        animated: !this.props.scrollWithoutAnimation
      });
    }
    const currentPage = this.state.currentPage;

    this.updateSceneKeys({
      page: pageNumber,
      callback: this._onChangeTab.bind(this, currentPage, pageNumber)
    });
  }
  renderTabBar(props: TabBarProps) {
    if (this.props.renderTabBar === false) {
      return null;
    } else if (this.props.renderTabBar) {
      return React.cloneElement(this.props.renderTabBar(props), props);
    }

    return <DefaultTabBar {...props} />;
  }
  updateSceneKeys({ page = 0, children = this.props.children, callback = () => {} }) {
    const newKeys = this.newSceneKeys({
      previousKeys: this.state.sceneKeys,
      currentPage: page,
      children
    });

    this.setState({ currentPage: page, sceneKeys: newKeys }, callback);
  }
  newSceneKeys({ previousKeys = [], currentPage = 0, children = this.props.children }: { previousKeys?: string[], currentPage?: number, children?: React.ReactNode }) {
    const newKeys: string[] = [];

    this.children(children).forEach((child, idx) => {
      const key = this._makeSceneKey(child, idx);

      if (this._keyExists(previousKeys, key) || this._shouldRenderSceneKey(idx, currentPage)) {
        newKeys.push(key);
      }
    });

    return newKeys;
  }
  _shouldRenderSceneKey(idx: number, currentPageKey: number) {
    const numOfSibling = this.props.prerenderingSiblingsNumber || 0;

    return idx < currentPageKey + numOfSibling + 1 && idx > currentPageKey - numOfSibling - 1;
  }
  _keyExists(sceneKeys: string[], key: string) {
    return sceneKeys.find(sceneKey => key === sceneKey);
  }
  _makeSceneKey(child: React.ReactNode, idx: string | number) {
    if (React.isValidElement(child)) {
      return `${child.props.heading}_${idx}`;
    }

    return `tab_${idx}`;
  }
  renderScrollableContent() {
    const scenes = this._composeScenes();

    return (
      <ScrollView
        horizontal
        pagingEnabled
        automaticallyAdjustContentInsets={false}
        keyboardShouldPersistTaps="handled"
        contentOffset={{
          x: this.props.initialPage * this.state.containerWidth,
          y: 0
        }}
        ref={scrollView => {
          this.scrollView = scrollView;
        }}
        onScroll={e => {
          const offsetX = e.nativeEvent.contentOffset.x;

          this._updateScrollValue(offsetX / this.state.containerWidth);
        }}
        onMomentumScrollBegin={this._onMomentumScrollBeginAndEnd}
        onMomentumScrollEnd={this._onMomentumScrollBeginAndEnd}
        scrollEventThrottle={16}
        scrollsToTop={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={!this.props.locked}
        directionalLockEnabled
        alwaysBounceVertical={false}
        keyboardDismissMode="on-drag"
        {...this.props.contentProps}
      >
        {scenes}
      </ScrollView>
    );
  }
  _composeScenes() {
    return this.children()?.map((child, idx) => {
      const key = this._makeSceneKey(child, idx);

      return (
        <SceneComponent
          key={child.key || undefined}
          shouldUpdated={this._shouldRenderSceneKey(idx, this.state.currentPage)}
          style={{ width: this.state.containerWidth }}
        >
          {this._keyExists(this.state.sceneKeys, key) ? child : <View heading={child.props.heading} />}
        </SceneComponent>
      );
    });
  }
  _onMomentumScrollBeginAndEnd(e) {
    const offsetX = e.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / this.state.containerWidth);

    if (this.state.currentPage !== page) {
      this._updateSelectedPage(page);
    }
  }
  _updateSelectedPage(nextPage: number) {
    let localNextPage = nextPage;

    const currentPage = this.state.currentPage;

    this.updateSceneKeys({
      page: localNextPage,
      callback: this._onChangeTab.bind(this, currentPage, localNextPage)
    });
  }
  _onChangeTab(prevPage: number, currentPage: number) {
    this.props.onChangeTab({
      i: currentPage,
      ref: React.isValidElement(this.children()[currentPage]) ? this.children()[currentPage] : undefined,
      from: prevPage
    });
  }
  _updateScrollValue(value: number) {
    this.state.scrollValue.setValue(value);
    this.props.onScroll(value);
  }
  _handleLayout(e: ReactNative.LayoutChangeEvent) {
    const { width } = e.nativeEvent.layout;

    if (!width || width <= 0 || Math.round(width) === Math.round(this.state.containerWidth)) {
      return;
    }
    this.setState({ containerWidth: width });
    requestAnimationFrame(() => {
      this.goToPage(this.state.currentPage);
    });
  }
  private children(children = this.props.children) {
    return React.Children.map(children, child => child) || [];
  }
  render() {
    const overlayTabs = this.props.tabBarPosition === 'overlayTop' || this.props.tabBarPosition === 'overlayBottom';
    const tabBarProps: TabBarProps = {
      goToPage: this.goToPage,
      tabs: this.children().map((child) => child.props.heading),
      tabStyle: this.children().map(child => child.props.tabStyle),
      activeTabStyle: this.children().map(child => child.props.activeTabStyle),
      textStyle: this.children().map(child => child.props.textStyle),
      activeTextStyle: this.children().map(child => child.props.activeTextStyle),
      tabHeaderStyle: this.children().map(child => _.get(child.props.heading.props, 'style', undefined)),
      disabled: this.children().map(child => child.props.disabled),
      activeTab: this.state.currentPage,
      scrollValue: this.state.scrollValue,
      containerWidth: this.state.containerWidth
    };

    if (this.props.tabBarBackgroundColor) {
      tabBarProps.backgroundColor = this.props.tabBarBackgroundColor;
    }
    if (this.props.tabBarActiveTextColor) {
      tabBarProps.activeTextColor = this.props.tabBarActiveTextColor;
    }
    if (this.props.tabBarInactiveTextColor) {
      tabBarProps.inactiveTextColor = this.props.tabBarInactiveTextColor;
    }
    if (this.props.tabBarTextStyle) {
      tabBarProps.textStyle = this.props.tabBarTextStyle;
    }
    if (this.props.tabBarUnderlineStyle) {
      tabBarProps.underlineStyle = this.props.tabBarUnderlineStyle;
    }
    if (this.props.tabContainerStyle) {
      tabBarProps.tabContainerStyle = this.props.tabContainerStyle;
    }
    if (overlayTabs) {
      tabBarProps.style = {
        position: 'absolute',
        left: 0,
        right: 0,
        [this.props.tabBarPosition === 'overlayTop' ? 'top' : 'bottom']: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
      };
    }

    return (
      <View style={[styles.container, this.props.style]} onLayout={this._handleLayout}>
        {(this.props.tabBarPosition === 'top' || this.props.tabBarPosition === 'overlayTop') &&
          this.renderTabBar(tabBarProps)}
        {this.renderScrollableContent()}
        {(this.props.tabBarPosition === 'bottom' || this.props.tabBarPosition === 'overlayBottom') &&
          this.renderTabBar(tabBarProps)}
      </View>
    );
  }
}

export default ScrollableTabView;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollableContentAndroid: {
    flex: 1
  }
});
