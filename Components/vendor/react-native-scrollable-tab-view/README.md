## react-native-scrollable-tab-view

This is probably my favorite navigation pattern on Android, I wish it
were more common on iOS! This is a very simple JavaScript-only
implementation of it for React Native. For more information about how
the animations behind this work, check out the Rebound section of the
[React Native Animation Guide](https://facebook.github.io/react-native/docs/animations.html)

## Add it to your project

1. Run `npm install react-native-scrollable-tab-view --save`
2. `var ScrollableTabView = require('react-native-scrollable-tab-view');`

## Demo

<a href="https://raw.githubusercontent.com/brentvatne/react-native-scrollable-tab-view/master/demo.gif"><img src="https://raw.githubusercontent.com/brentvatne/react-native-scrollable-tab-view/master/demo.gif" width="350"></a>
<a href="https://raw.githubusercontent.com/brentvatne/react-native-scrollable-tab-view/master/demo-fb.gif"><img src="https://raw.githubusercontent.com/brentvatne/react-native-scrollable-tab-view/master/demo-fb.gif" width="350"></a>

## Basic usage

```javascript
var ScrollableTabView = require('react-native-scrollable-tab-view');

var App = React.createClass({
  render() {
    return (
      <ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
}
```

## Injecting a custom tab bar

Suppose we had a custom tab bar called `CustomTabBar`, we would inject
it into our `ScrollableTabView` like this:

```javascript
var ScrollableTabView = require('react-native-scrollable-tab-view');
var CustomTabBar = require('./CustomTabBar');

var App = React.createClass({
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />}>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
}
```

Below is the default tab bar, renamed to CustomTabBar, you can use this
as a template for implementing your own.

```javascript
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var deviceWidth = require('Dimensions').get('window').width;
var precomputeStyle = require('precomputeStyle');
var TAB_UNDERLINE_REF = 'TAB_UNDERLINE';

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  tabs: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
  },
});

var CustomTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;

    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[styles.tab]}>
        <Text style={{color: isTabActive ? 'navy' : 'black', fontWeight: isTabActive ? 'bold' : 'normal'}}>{name}</Text>
      </TouchableOpacity>
    );
  },

  setAnimationValue(value) {
    this.refs[TAB_UNDERLINE_REF].setNativeProps(precomputeStyle({
      left: (deviceWidth * value) / this.props.tabs.length
    }));
  },

  render() {
    var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: deviceWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    };

    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <View style={tabUnderlineStyle} ref={TAB_UNDERLINE_REF} />
      </View>
    );
  },
});

module.exports = CustomTabBar;
```

## Props

- **`renderTabBar`** _(Function:ReactComponent)_ - should return a component to use as
  the tab bar. The component has `goToPage`, `tabs`, `activeTab` and
  `ref` added to the props, and should implement `setAnimationValue` to
  be able to animate itself along with the tab content.
- **`tabBarPosition`** _(String)_ - if `"top"`, the tab bar will render above the tabs. If `"bottom"`, the tab bar will render below the tabs. Defaults to `"top"`.
- **`onChangeTab`** _(Function)_ - function to call when tab changes, should accept 1 argument which is an Object containing two keys: `i`: the index of the tab that is selected, `ref`: the ref of the tab that is selected
- **`edgeHitWidth`** _(Integer)_ - region (in pixels) from the left & right edges of the screen that can trigger swipe. Default is 30, which is the same as the swipe-back gesture on iOS.
- **`hasTouch`** _(Function)_ - returns `true` when ScrollableTabView starts being panned and `false` when it is released. Not triggered when `locked` (Bool) is true.
- **`locked`** _(Bool)_ - dynamically disable scrolling between tabs.
- **`springTension`** _(Integer)_ - a number between `1` and `100`, controls the amount of tension on the spring that guides the scroll animation - see [example](http://facebook.github.io/rebound-js/examples/#graph-canvas).
- **`springFriction`** _(Integer)_ - a number between `1` and `30`, controls the amount of friction on the spring that guides the scroll animation - see [example](http://facebook.github.io/rebound-js/examples/#graph-canvas).
- **`clampSpring`** _(Bool)_ - if `true`, the spring will not bounce at all - if `false`, it will oscillate around the target value before settling.
- **`initialPage`** _(Integer)_ - the index of the initially selected tab, defaults to 0 === first tab.
- **`children`** _(ReactComponents)_ - each top-level child component should have a `tabLabel` prop that can be used by the tab bar component to render out the labels. The default tab bar expects it to be a string, but you can use anything you want if you make a custom tab bar.

---

**MIT Licensed**
