import tweenState from 'react-tween-state';
import NativeButton from './NativeButton';
import styles from './styles';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  PanResponder,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SwipeoutBtn extends Component {

  propTypes: {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    component: PropTypes.node,
    onPress: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string,
    underlayColor: PropTypes.string,
  }

  static get defaultProps() {
    return {
      backgroundColor: null,
      color: null,
      component: null,
      underlayColor: null,
      height: 0,
      key: null,
      onPress: null,
      disabled: false,
      text: 'Click me',
      type: '',
      width: 0,
    };
  }

  render() {
    var btn = this.props;

    var styleSwipeoutBtn = [styles.swipeoutBtn];

    //  apply "type" styles (delete || primary || secondary)
    if (btn.type === 'delete') styleSwipeoutBtn.push(styles.colorDelete);
    else if (btn.type === 'primary') styleSwipeoutBtn.push(styles.colorPrimary);
    else if (btn.type === 'secondary') styleSwipeoutBtn.push(styles.colorSecondary);

    //  apply background color
    if (btn.backgroundColor) styleSwipeoutBtn.push([{ backgroundColor: btn.backgroundColor }]);

    styleSwipeoutBtn.push([{
      height: btn.height,
      width: btn.width,
    }]);

    var styleSwipeoutBtnComponent = [];

    //  set button dimensions
    styleSwipeoutBtnComponent.push([{
      height: btn.height,
      width: btn.width,
    }]);

    var styleSwipeoutBtnText = [styles.swipeoutBtnText];

    //  apply text color
    if (btn.color) styleSwipeoutBtnText.push([{ color: btn.color }]);

    return  (
      <NativeButton
        onPress={this.props.onPress}
        style={styles.swipeoutBtnTouchable}
        underlayColor={this.props.underlayColor}
        disabled={this.props.disabled}
        style={styleSwipeoutBtn}
        textStyle={styleSwipeoutBtnText}>
        {
          (btn.component ?
            <View style={styleSwipeoutBtnComponent}>{btn.component}</View>
            :
            btn.text
          )
        }
      </NativeButton>
    );
  }
}

const Swipeout = React.createClass({
  mixins: [tweenState.Mixin],

  propTypes: {
    autoClose: PropTypes.bool,
    backgroundColor: PropTypes.string,
    close: PropTypes.bool,
    left: PropTypes.array,
    onOpen: PropTypes.func,
    right: PropTypes.array,
    scroll: PropTypes.func,
    style: View.propTypes.style,
    sensitivity: PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      rowID: -1,
      sectionID: -1,
      sensitivity: 0,
    };
  },

  getInitialState: function() {
    return {
      autoClose: this.props.autoClose || false,
      btnWidth: 0,
      btnsLeftWidth: 0,
      btnsRightWidth: 0,
      contentHeight: 0,
      contentPos: 0,
      contentWidth: 0,
      openedRight: false,
      swiping: false,
      tweenDuration: 160,
      timeStart: null,
    };
  },

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) =>
        Math.abs(gestureState.dx) > this.props.sensitivity &&
        Math.abs(gestureState.dy) > this.props.sensitivity,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
      onShouldBlockNativeResponder: (event, gestureState) => true,
    });
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.close) this._close();
  },

  _handlePanResponderGrant: function(e: Object, gestureState: Object) {
    if(this.props.onOpen){
      this.props.onOpen(this.props.sectionID, this.props.rowID);
    }
    this.refs.swipeoutContent.measure((ox, oy, width, height) => {
      this.setState({
        btnWidth: (width/5),
        btnsLeftWidth: this.props.left ? (width/5)*this.props.left.length : 0,
        btnsRightWidth: this.props.right ? (width/5)*this.props.right.length : 0,
        swiping: true,
        timeStart: (new Date()).getTime(),
      });
    });
  },

  _handlePanResponderMove: function(e: Object, gestureState: Object) {
    var posX = gestureState.dx;
    var posY = gestureState.dy;
    var leftWidth = this.state.btnsLeftWidth;
    var rightWidth = this.state.btnsRightWidth;
    if (this.state.openedRight) var posX = gestureState.dx - rightWidth;
    else if (this.state.openedLeft) var posX = gestureState.dx + leftWidth;

    //  prevent scroll if moveX is true
    var moveX = Math.abs(posX) > Math.abs(posY);
    if (this.props.scroll) {
      if (moveX) this.props.scroll(false);
      else this.props.scroll(true);
    }
    if (this.state.swiping) {
      //  move content to reveal swipeout
      if (posX < 0 && this.props.right) this.setState({ contentPos: Math.min(posX, 0) });
      else if (posX > 0 && this.props.left) this.setState({ contentPos: Math.max(posX, 0) });
    }
  },

  _handlePanResponderEnd: function(e: Object, gestureState: Object) {
    var posX = gestureState.dx;
    var contentPos = this.state.contentPos;
    var contentWidth = this.state.contentWidth;
    var btnsLeftWidth = this.state.btnsLeftWidth;
    var btnsRightWidth = this.state.btnsRightWidth;

    //  minimum threshold to open swipeout
    var openX = contentWidth*0.33;

    //  should open swipeout
    var openLeft = posX > openX || posX > btnsLeftWidth/2;
    var openRight = posX < -openX || posX < -btnsRightWidth/2;

    //  account for open swipeouts
    if (this.state.openedRight) var openRight = posX-openX < -openX;
    if (this.state.openedLeft) var openLeft = posX+openX > openX;

    //  reveal swipeout on quick swipe
    var timeDiff = (new Date()).getTime() - this.state.timeStart < 200;
    if (timeDiff) {
      var openRight = posX < -openX/10 && !this.state.openedLeft;
      var openLeft = posX > openX/10 && !this.state.openedRight;
    }

    if (this.state.swiping) {
      if (openRight && contentPos < 0 && posX < 0) {
        // open swipeout right
        this._tweenContent('contentPos', -btnsRightWidth);
        this.setState({ contentPos: -btnsRightWidth, openedLeft: false, openedRight: true });
      } else if (openLeft && contentPos > 0 && posX > 0) {
        // open swipeout left
        this._tweenContent('contentPos', btnsLeftWidth);
        this.setState({ contentPos: btnsLeftWidth, openedLeft: true, openedRight: false });
      }
      else {
        // close swipeout
        this._tweenContent('contentPos', 0);
        this.setState({ contentPos: 0, openedLeft: false, openedRight: false });
      }
    }

    //  Allow scroll
    if (this.props.scroll) this.props.scroll(true);
  },

  _tweenContent: function(state, endValue) {
    this.tweenState(state, {
      easing: tweenState.easingTypes.easeInOutQuad,
      duration: endValue === 0 ? this.state.tweenDuration*1.5 : this.state.tweenDuration,
      endValue: endValue,
    });
  },

  _rubberBandEasing: function(value, limit) {
    if (value < 0 && value < limit) return limit - Math.pow(limit - value, 0.85);
    else if (value > 0 && value > limit) return limit + Math.pow(value - limit, 0.85);
    return value;
  },

  //  close swipeout on button press
  _autoClose: function(btn) {
    var onPress = btn.onPress;
    if (onPress) onPress();
    if (this.state.autoClose) this._close();
  },

  _close: function() {
    this._tweenContent('contentPos', 0);
    this.setState({
      openedRight: false,
      openedLeft: false,
    });
  },

  render: function() {
    var contentWidth = this.state.contentWidth;
    var posX = this.getTweeningValue('contentPos');

    var styleSwipeout = [styles.swipeout, this.props.style];
    if (this.props.backgroundColor) {
      styleSwipeout.push([{ backgroundColor: this.props.backgroundColor }]);
    }

    var limit = -this.state.btnsRightWidth;
    if (posX > 0) var limit = this.state.btnsLeftWidth;

    var styleLeftPos = {
      left: {
        left: 0,
        overflow: 'hidden',
        width: Math.min(limit*(posX/limit), limit),
      },
    };
    var styleRightPos = {
      right: {
        left: Math.abs(contentWidth + Math.max(limit, posX)),
        right: 0,
      },
    };
    var styleContentPos = {
      content: {
        left: this._rubberBandEasing(posX, limit),
      },
    };

    var styleContent = [styles.swipeoutContent];
    styleContent.push(styleContentPos.content);

    var styleRight = [styles.swipeoutBtns];
    styleRight.push(styleRightPos.right);

    var styleLeft = [styles.swipeoutBtns];
    styleLeft.push(styleLeftPos.left);

    var isRightVisible = posX < 0;
    var isLeftVisible = posX > 0;

    return (
      <View style={styleSwipeout}>
        <View
          ref="swipeoutContent"
          style={styleContent}
          onLayout={this._onLayout}
          {...this._panResponder.panHandlers}>
          {this.props.children}
        </View>
        { this._renderButtons(this.props.right, isRightVisible, styleRight) }
        { this._renderButtons(this.props.left, isLeftVisible, styleLeft) }
      </View>
    );
  },

  _onLayout: function(event) {
    var { width, height } = event.nativeEvent.layout;
    this.setState({
      contentWidth: width,
      contentHeight: height,
    });
  },

  _renderButtons: function(buttons, isVisible, style) {
    if (buttons && isVisible) {
      return( <View style={style}>
        { buttons.map(this._renderButton) }
      </View>);
    } else {
      return (
        <View/>
      );
    }
  },

  _renderButton: function(btn, i) {
    return (
      <SwipeoutBtn
          backgroundColor={btn.backgroundColor}
          color={btn.color}
          component={btn.component}
          disabled={btn.disabled}
          height={this.state.contentHeight}
          key={i}
          onPress={() => this._autoClose(btn)}
          text={btn.text}
          type={btn.type}
          underlayColor={btn.underlayColor}
          width={this.state.btnWidth}/>
      );
  }
})

Swipeout.NativeButton = NativeButton;
Swipeout.SwipeoutButton = SwipeoutBtn;

Swipeout.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
  dataArray: React.PropTypes.object,
  renderRow: React.PropTypes.object,
};

const StyledSwipeout = connectStyle('NativeBase.Swipeout', {}, mapPropsToStyleNames)(Swipeout);

export {
  StyledSwipeout as Swipeout,
};
