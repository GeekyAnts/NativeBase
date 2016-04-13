'use strict';

var React = require('react-native');
var { StyleSheet, Text, View, TouchableOpacity, Dimensions, Animated, } = React;
var deviceWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
    width: 95,
    textAlign: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  tabs: {
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
  },
});

var ScrollingTabBar = React.createClass({
  selectedTabIcons: [],
  unselectedTabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  getInitialState() {
    return { value: new Animated.Value(0) };
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
    var color = this.state.value.interpolate({inputRange: [page-1, page],
                                             outputRange: ['rgba(0,0,0,1)', 'rgba(50,50,255,1)'],
                                             extrapolate: 'clamp'});

    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[styles.tab]}>
        <Animated.Text style={{color}}>{name}</Animated.Text>
      </TouchableOpacity>
    );
  },

  setAnimationValue(value) {
    var currentPage = this.props.activeTab;
    this.state.value.setValue(value);
  },

  render() {
    var translateX = this.state.value.interpolate({inputRange: [0, 1], outputRange: [0, -95]});

    return (
      <Animated.View style={[styles.tabs, {transform: [{translateX}]}]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </Animated.View>
    );
  },
});

module.exports = ScrollingTabBar;
