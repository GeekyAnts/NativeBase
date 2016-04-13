/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView, Image, } = React;
var ScrollableTabView = require('react-native-scrollable-tab-view');
var deviceWidth = Dimensions.get('window').width;
var ScrollingTabBar = require('./ScrollingTabBar');

var exampleStyles = StyleSheet.create({
  match: {
    flexDirection: 'row',
  },

  logo: {
    width: 40,
    height: 40,
  },
});

var canucks = {
  image: "http://alongtheboards.com/wp-content/uploads/2014/11/Vancouver-Canucks.png",
  name: 'VAN',
}

var flames = {
  image: "http://url.brentvatne.ca/7CrT.png",
  name: 'CGY',
}

var rangers = {
  image: "http://url.brentvatne.ca/vqUE.png",
  name: 'NYR',
}

var hawks = {
  image: "http://url.brentvatne.ca/Pmjv.png",
  name: 'CHI',
}

var pens = {
  image: "http://url.brentvatne.ca/14lhe.png",
  name: 'PIT',
}

var jets = {
  image: "http://url.brentvatne.ca/FSl.png",
  name: 'WPG',
}

var Team = React.createClass({
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <Image source={{uri: this.props.data.image}}
               resizeMode="cover"
               style={exampleStyles.logo}/>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{this.props.data.name}</Text>
      </View>
    );
  }
});

var Match = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <View style={exampleStyles.match}>
          <Team data={this.props.team1} />
          <View style={{flexDirection: 'column', flex: 1, paddingHorizontal: 10, alignItems: 'center', paddingTop: 10}}>
            <Text style={{color: 'grey', fontSize: 11,}}>Prematch</Text>
            <Text style={{color: 'grey', fontSize: 11,}}>{this.props.time}, {this.props.place}</Text>
          </View>
          <Team data={this.props.team2} />
        </View>
      </View>
    )
  }
});

var ExampleOne = React.createClass({
  render() {
    // return (
    //   <View style={styles.card}>
    //     <Text>Hi!</Text>
    //   </View>
    // );
    return (
      <View>
        <Match team1={canucks} team2={flames} time="2:45 AM" place="Rogers Arena" />
        <Match team1={hawks} team2={rangers} time="2:45 AM" place="Rogers Arena" />
        <Match team1={pens} team2={jets} time="2:45 AM" place="Rogers Arena" />
        <Match team1={jets} team2={hawks} time="2:45 AM" place="Rogers Arena" />
        <Match team1={flames} team2={rangers} time="2:45 AM" place="Rogers Arena" />
        <Match team1={canucks} team2={pens} time="2:45 AM" place="Rogers Arena" />
        <Match team1={jets} team2={hawks} time="2:45 AM" place="Rogers Arena" />
        <Match team1={canucks} team2={flames} time="2:45 AM" place="Rogers Arena" />
      </View>
    )
  }
});

var ExampleTwo = React.createClass({
  render() {
    // return (
    //   <View style={styles.card}>
    //     <Text>Hi you!</Text>
    //   </View>
    // )
    return (
      <View>
        <Match team1={pens} team2={jets} time="2:45 AM" place="Rogers Arena" />
        <Match team1={jets} team2={hawks} time="2:45 AM" place="Rogers Arena" />
        <Match team1={flames} team2={rangers} time="2:45 AM" place="Rogers Arena" />
        <Match team1={canucks} team2={pens} time="2:45 AM" place="Rogers Arena" />
        <Match team1={flames} team2={rangers} time="2:45 AM" place="Rogers Arena" />
        <Match team1={canucks} team2={pens} time="2:45 AM" place="Rogers Arena" />
        <Match team1={jets} team2={hawks} time="2:45 AM" place="Rogers Arena" />
        <Match team1={hawks} team2={rangers} time="2:45 AM" place="Rogers Arena" />
        <Match team1={pens} team2={jets} time="2:45 AM" place="Rogers Arena" />
      </View>
    )
  }
});

var FakeRugbyTab = React.createClass({
  getInitialState() {
    return {
      hasBeenActive: false,
    }
  },

  componentDidMount() {
    this.maybePerformInitialRender(this.props);
  },

  componentWillReceiveProps(props) {
    this.maybePerformInitialRender(props);
  },

  shouldComponentUpdate() {
    return !this.state.hasBeenActive;
  },

  maybePerformInitialRender(props) {
    if (!this.state.hasBeenActive &&
         (props.activeNumber === this.props.number ||
          props.activeNumber + 1 === this.props.number ||
          props.activeNumber - 1 === this.props.number)) {
      this.setState({
        hasBeenActive: true,
        thingToRender: this.props.number % 2 == 0 ? <ExampleTwo /> : <ExampleOne />
      });
    }
  },

  render() {
    if (this.state.hasBeenActive) {
      return (
        <ScrollView style={styles.tabView} removeClippedSubviews={true}>
          {this.state.thingToRender}
        </ScrollView>
      );
    } else {
      return <ScrollView style={styles.tabView} />;
    }
  }
});

var RugbyExample = React.createClass({
  getInitialState() {
    return { selectedTab: 0 }
  },

  renderRounds() {
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    return numbers.map((n) => {
      return (
        <FakeRugbyTab tabLabel={`Round ${n}`}
          key={n} number={n} activeNumber={this.state.selectedTab+1} />
      )
    })
  },

  onChangeTab({i, ref}) {
    setTimeout(() => {
      this.setState({selectedTab: i});
    }, 500);
  },

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          style={{backgroundColor: '#fff'}}
          onChangeTab={this.onChangeTab}
          edgeHitWidth={deviceWidth / 2}
          renderTabBar={() => <ScrollingTabBar />}>

          {this.renderRounds()}
        </ScrollableTabView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  tabView: {
    overflow: 'hidden',
    width: deviceWidth,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    marginTop: -10,
    padding: 15,
  },
});

AppRegistry.registerComponent('RugbyExample', () => RugbyExample);
