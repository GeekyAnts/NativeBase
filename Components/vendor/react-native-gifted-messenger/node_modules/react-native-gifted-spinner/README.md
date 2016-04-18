# react-native-gifted-spinner

Simple loading spinner that use React-Native ProgressBarAndroid or ActivityIndicatorIOS depending of the platform.


![](https://raw.githubusercontent.com/FaridSafi/react-native-gifted-spinner/master/screenshot/screenshot.png)


### Example

```js
var React = require('react-native');
var {
  View,
} = React;

var GiftedSpinner = require('react-native-gifted-spinner');

var Example = React.createClass({
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <GiftedSpinner />
      </View>
    );
  }
});
```

### Installation

```npm install react-native-gifted-spinner --save```

### License

[MIT](LICENSE.md)

Feel free to ask me questions on Twitter [@FaridSafi](https://www.twitter.com/FaridSafi) !