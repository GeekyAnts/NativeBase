import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, PanResponder, View } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

import { Left } from './Left';
import { Right } from './Right';
import { Body } from './Body';
import { ListItem } from './ListItem';

const PREVIEW_OPEN_DELAY = 700;
const PREVIEW_CLOSE_DELAY = 300;

class SwipeRow extends Component {
  static defaultProps = {
    leftOpenValue: 0,
    rightOpenValue: 0,
    closeOnRowPress: true,
    disableLeftSwipe: false,
    disableRightSwipe: false,
    recalculateHiddenLayout: false,
    preview: false,
    previewDuration: 300,
    directionalDistanceChangeThreshold: 2,
    swipeToOpenPercent: 50
  };
  constructor(props) {
    super(props);
    this.horizontalSwipeGestureBegan = false;
    this.swipeInitialX = null;
    this.parentScrollEnabled = true;
    this.ranPreview = false;
    this.state = {
      dimensionsSet: false,
      hiddenHeight: 0,
      hiddenWidth: 0
    };
    this._translateX = new Animated.Value(0);
  }

  componentDidMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gs) =>
        this.handleOnMoveShouldSetPanResponder(e, gs),
      onPanResponderMove: (e, gs) => this.handlePanResponderMove(e, gs),
      onPanResponderRelease: (e, gs) => this.handlePanResponderEnd(e, gs),
      onPanResponderTerminate: (e, gs) => this.handlePanResponderEnd(e, gs),
      onShouldBlockNativeResponder: _ => false
    });
  }

  getPreviewAnimation(toValue, delay) {
    return Animated.timing(this._translateX, {
      duration: this.props.previewDuration,
      toValue,
      delay,
      useNativeDriver: true
    });
  }

  onContentLayout(e) {
    this.setState({
      dimensionsSet: !this.props.recalculateHiddenLayout,
      hiddenHeight: e.nativeEvent.layout.height,
      hiddenWidth: e.nativeEvent.layout.width
    });

    if (this.props.preview && !this.ranPreview) {
      this.ranPreview = true;
      const previewOpenValue =
        this.props.previewOpenValue || this.props.rightOpenValue * 0.5;
      this.getPreviewAnimation(previewOpenValue, PREVIEW_OPEN_DELAY).start(
        _ => {
          this.getPreviewAnimation(0, PREVIEW_CLOSE_DELAY).start();
        }
      );
    }
  }

  handleOnMoveShouldSetPanResponder(e, gs) {
    const { dx } = gs;
    return Math.abs(dx) > this.props.directionalDistanceChangeThreshold;
  }

  handlePanResponderMove(e, gestureState) {
    const { dx, dy } = gestureState;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    // this check may not be necessary because we don't capture the move until we pass the threshold
    // just being extra safe here
    if (
      absDx > this.props.directionalDistanceChangeThreshold ||
      absDy > this.props.directionalDistanceChangeThreshold
    ) {
      // we have enough to determine direction
      if (absDy > absDx && !this.horizontalSwipeGestureBegan) {
        // user is moving vertically, do nothing, listView will handle
        return;
      }

      // user is moving horizontally
      if (this.parentScrollEnabled) {
        // disable scrolling on the listView parent
        this.parentScrollEnabled = false;
        this.props.setScrollEnabled && this.props.setScrollEnabled(false);
      }

      if (this.swipeInitialX === null) {
        // set tranlateX value when user started swiping
        this.swipeInitialX = this._translateX._value;
      }
      if (!this.horizontalSwipeGestureBegan) {
        this.horizontalSwipeGestureBegan = true;
        this.props.swipeGestureBegan && this.props.swipeGestureBegan();
      }

      let newDX = this.swipeInitialX + dx;
      if (this.props.disableLeftSwipe && newDX < 0) {
        newDX = 0;
      }
      if (this.props.disableRightSwipe && newDX > 0) {
        newDX = 0;
      }

      if (this.props.stopLeftSwipe && newDX > this.props.stopLeftSwipe) {
        newDX = this.props.stopLeftSwipe;
      }
      if (this.props.stopRightSwipe && newDX < this.props.stopRightSwipe) {
        newDX = this.props.stopRightSwipe;
      }

      this._translateX.setValue(newDX);
    }
  }

  handlePanResponderEnd(e, gestureState) {
    // re-enable scrolling on listView parent
    if (!this.parentScrollEnabled) {
      this.parentScrollEnabled = true;
      this.props.setScrollEnabled && this.props.setScrollEnabled(true);
    }

    // finish up the animation
    let toValue = 0;
    if (this._translateX._value >= 0) {
      // trying to open right
      if (
        this._translateX._value >
        this.props.leftOpenValue * (this.props.swipeToOpenPercent / 100)
      ) {
        // we're more than halfway
        toValue = this.props.leftOpenValue;
      }
    } else {
      // trying to open left
      if (
        this._translateX._value <
        this.props.rightOpenValue * (this.props.swipeToOpenPercent / 100)
      ) {
        // we're more than halfway
        toValue = this.props.rightOpenValue;
      }
    }

    this.manuallySwipeRow(toValue);
  }

  /*
   * This method is called by SwipeListView
   */
  closeRow() {
    this.manuallySwipeRow(0);
  }

  openLeftRow() {
    this.manuallySwipeRow(this.props.leftOpenValue);
  }

  openRightRow() {
    this.manuallySwipeRow(this.props.rightOpenValue);
  }

  manuallySwipeRow(toValue) {
    Animated.spring(this._translateX, {
      toValue,
      friction: this.props.friction,
      tension: this.props.tension,
      useNativeDriver: true
    }).start(_ => {
      if (toValue === 0) {
        this.props.onRowDidClose && this.props.onRowDidClose();
      } else {
        this.props.onRowDidOpen && this.props.onRowDidOpen();
      }
    });

    if (toValue === 0) {
      this.props.onRowClose && this.props.onRowClose();
    } else {
      this.props.onRowOpen && this.props.onRowOpen(toValue);
    }

    // reset everything
    this.swipeInitialX = null;
    this.horizontalSwipeGestureBegan = false;
  }

  renderMainContent() {
    // We do this annoying if statement for performance.
    // We don't want the onLayout func to run after it runs once.
    if (this.state.dimensionsSet) {
      return (
        <Animated.View
          {...this._panResponder.panHandlers}
          style={{
            transform: [{ translateX: this._translateX }],
            zIndex: 2
          }}
        >
          {!this.props.list ? (
            <ListItem list style={this.props.style}>
              {this.props.body}
            </ListItem>
          ) : (
            <View style={[{ backgroundColor: '#FFF' }, this.props.style]}>
              {this.props.body}
            </View>
          )}
        </Animated.View>
      );
    }
    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        onLayout={e => this.onContentLayout(e)}
        style={{
          transform: [{ translateX: this._translateX }],
          zIndex: 2
        }}
      >
        {!this.props.list ? (
          <ListItem list style={this.props.style}>
            {this.props.body}
          </ListItem>
        ) : (
          <View style={[{ backgroundColor: '#FFF' }, this.props.style]}>
            {this.props.body}
          </View>
        )}
      </Animated.View>
    );
  }

  render() {
    return (
      <View style={this.props.style ? this.props.style : undefined}>
        <View
          style={[
            styles.hidden,
            {
              height: this.state.hiddenHeight,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }
          ]}
        >
          <Left style={{ width: this.props.leftOpenValue, zIndex: 1 }}>
            {this.props.left}
          </Left>
          <Body style={{ flex: 0 }} />
          <Right style={{ width: -this.props.rightOpenValue, zIndex: 1 }}>
            {this.props.right}
          </Right>
        </View>
        {this.renderMainContent()}
      </View>
    );
  }
}

const styles = {
  container: {
    // As of RN 0.29 flex: 1 is causing all rows to be the same height
    // flex: 1
  },
  hidden: {
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0
  }
};

const StyledSwipeRow = connectStyle(
  'NativeBase.SwipeRow',
  {},
  mapPropsToStyleNames
)(SwipeRow);
export { StyledSwipeRow as SwipeRow };
