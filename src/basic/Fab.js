import React, { Component } from 'react';
import {
  Platform,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  StyleSheet
} from 'react-native';
import { remove, merge, clone } from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';

import variables from '../theme/variables/platform';
import { PLATFORM } from '../theme/variables/commonColor';
import computeProps from '../utils/computeProps';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

import { Button } from './Button';

const DIRECTION = {
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up'
};

const POSITION = {
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight',
  TOP_LEFT: 'topLeft',
  TOP_RIGHT: 'topRight'
};

const AnimatedFab = Animated.createAnimatedComponent(Button);

class Fab extends Component {
  constructor(props) {
    super(props);
    this.containerHeight = new Animated.Value(variables.fabWidth);
    this.containerWidth = new Animated.Value(0);
    this.buttonScale = new Animated.Value(0);
    this.state = {
      buttons: undefined,
      active: false
    };
  }

  componentDidMount() {
    const childrenArray = React.Children.toArray(this.props.children);
    const icon = remove(childrenArray, item => {
      if (item.type.displayName === 'Styled(Button)') {
        return true;
      }
      return null;
    });
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      buttons: icon.length
    });
    this.activeTimer = setTimeout(() => {
      this.setState({
        active: this.props.active
      });
    }, 0);
  }

  componentWillUnmount() {
    if (this.activeTimer) {
      clearTimeout(this.activeTimer);
    }
  }

  getOtherButtonStyle(child, i) {
    const { active, direction } = this.props;
    const type = {
      top: direction ? this.fabOtherBtns(direction, i).top : undefined,
      left: direction ? this.fabOtherBtns(direction, i).left : 8,
      right: direction ? this.fabOtherBtns(direction, i).right : 0,
      bottom: direction
        ? this.fabOtherBtns(direction, i).bottom
        : active === false
        ? Platform.OS === PLATFORM.IOS
          ? 8
          : 8
        : i * 50 + 50
    };

    return merge(
      this.getInitialStyle().buttonStyle,
      StyleSheet.flatten(child.props.style),
      type
    );
  }

  getContainerStyle() {
    return merge(this.getInitialStyle().container, this.props.containerStyle);
  }

  getInitialStyle(iconStyle) {
    const { direction, position } = this.props;
    return {
      fab: {
        height: variables.fabWidth,
        width: variables.fabWidth,
        borderRadius: variables.fabBorderRadius,
        elevation: variables.fabElevation,
        shadowColor: variables.fabShadowColor,
        shadowOffset: {
          width: variables.fabShadowOffsetWidth,
          height: variables.fabShadowOffsetHeight
        },
        shadowOpacity: variables.fabShadowOpacity,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: variables.fabShadowRadius,
        position: 'absolute',
        bottom: variables.fabBottom,
        backgroundColor: variables.fabBackgroundColor
      },
      container: {
        position: 'absolute',
        top: position ? this.fabTopValue(position).top : undefined,
        bottom: position
          ? this.fabTopValue(position).bottom
          : variables.fabContainerBottom,
        right: position
          ? this.fabTopValue(position).right
          : variables.fabContainerBottom,
        left: position ? this.fabTopValue(position).left : undefined,
        width: variables.fabWidth,
        height: this.containerHeight,
        flexDirection: direction
          ? direction === DIRECTION.LEFT || direction === DIRECTION.RIGHT
            ? 'row'
            : 'column'
          : 'column',
        alignItems: 'center'
      },
      iconStyle: {
        color: variables.fabIconColor,
        fontSize: variables.fabIconSize,
        lineHeight: Platform.OS === PLATFORM.IOS ? 27 : undefined,
        ...iconStyle
      },
      buttonStyle: {
        position: 'absolute',
        height: variables.fabButtonHeight,
        width: variables.fabButtonHeight,
        left: variables.fabButtonLeft,
        borderRadius: variables.fabButtonBorderRadius,
        transform: this.state.active
          ? [{ scale: new Animated.Value(1) }]
          : [{ scale: this.buttonScale }],
        marginBottom: variables.fabButtonMarginBottom,
        backgroundColor: variables.fabBackgroundColor
      }
    };
  }

  prepareButtonProps = child => {
    const inp = clone(child.props);
    delete inp.style;

    const defaultProps = {};

    return computeProps(inp, defaultProps);
  };

  fabTopValue = pos => {
    if (pos === POSITION.TOP_LEFT) {
      return {
        top: variables.fabDefaultPosition,
        bottom: undefined,
        left: variables.fabDefaultPosition,
        right: undefined
      };
    } else if (pos === POSITION.BOTTOM_RIGHT) {
      return {
        top: undefined,
        bottom: variables.fabDefaultPosition,
        left: undefined,
        right: variables.fabDefaultPosition
      };
    } else if (pos === POSITION.BOTTOM_LEFT) {
      return {
        top: undefined,
        bottom: variables.fabDefaultPosition,
        left: variables.fabDefaultPosition,
        right: undefined
      };
    } else if (pos === POSITION.TOP_RIGHT) {
      return {
        top: variables.fabDefaultPosition,
        bottom: undefined,
        left: undefined,
        right: variables.fabDefaultPosition
      };
    }
    return null;
  };

  fabOtherBtns(direction, i) {
    const { active } = this.props;
    if (direction === DIRECTION.UP) {
      return {
        top: undefined,
        bottom:
          active === false
            ? Platform.OS === PLATFORM.IOS
              ? 50
              : 5
            : i * 50 + 65,
        left: 8,
        right: 0
      };
    } else if (direction === DIRECTION.LEFT) {
      return {
        top: 8,
        bottom: 0,
        left:
          active === false
            ? Platform.OS === PLATFORM.IOS
              ? 8
              : 8
            : -(i * 50 + variables.fabWidth + 2),
        right: 0
      };
    } else if (direction === DIRECTION.DOWN) {
      return {
        top:
          active === false
            ? Platform.OS === PLATFORM.IOS
              ? 50
              : 8
            : i * 50 + 73,
        bottom: 0,
        left: 8,
        right: 0
      };
    } else if (direction === DIRECTION.RIGHT) {
      return {
        top: 8,
        bottom: 0,
        left:
          active === false
            ? Platform.OS === PLATFORM.IOS
              ? 50
              : 8
            : i * 50 + 73,
        right: 0
      };
    }
    return null;
  }

  prepareFabProps() {
    const defaultProps = {
      style: this.getInitialStyle().fab
    };
    const incomingProps = clone(this.props);
    delete incomingProps.onPress;

    return computeProps(incomingProps, defaultProps);
  }

  upAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerHeight, {
        toValue: this.state.buttons * 51.3 + variables.fabWidth,
        useNativeDriver: false
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    } else {
      this.setState({
        active: false
      });
      Animated.spring(this.containerHeight, {
        toValue: variables.fabWidth,
        useNativeDriver: false
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  }

  leftAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerWidth, {
        toValue: this.state.buttons * 51.3 + variables.fabWidth,
        useNativeDriver: false
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    } else {
      this.setState({
        active: false
      });
      Animated.spring(this.containerHeight, {
        toValue: variables.fabWidth,
        useNativeDriver: false
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  }

  rightAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerWidth, {
        toValue: this.state.buttons * 51.3 + variables.fabWidth,
        useNativeDriver: false
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    } else {
      this.setState({
        active: false
      });
      Animated.spring(this.containerHeight, {
        toValue: variables.fabWidth,
        useNativeDriver: false
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  }

  downAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerHeight, {
        toValue: variables.fabWidth,
        useNativeDriver: false
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    } else {
      this.setState({
        active: false
      });
      Animated.spring(this.containerHeight, {
        toValue: variables.fabWidth
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  }
  _animate() {
    const {
      props: { direction, position }
    } = this;

    if (direction) {
      if (direction === DIRECTION.UP) {
        if (position === POSITION.TOP_LEFT || position === POSITION.TOP_RIGHT) {
          console.warn(
            'Passing direction = up with position = topLeft/topRight is not suggested.'
          );
        } else {
          this.upAnimate();
        }
      } else if (direction === DIRECTION.LEFT) {
        if (
          position === POSITION.TOP_LEFT ||
          position === POSITION.BOTTOM_LEFT
        ) {
          console.warn(
            'Passing direction = left with position = topLeft/bottomLeft is not suggested.'
          );
        } else {
          this.leftAnimate();
        }
      } else if (direction === DIRECTION.RIGHT) {
        if (
          position === POSITION.TOP_RIGHT ||
          position === POSITION.BOTTOM_RIGHT
        ) {
          console.warn(
            'Passing direction = right with position = topRight/bottomRight is not suggested.'
          );
        } else {
          this.rightAnimate();
        }
      } else if (direction === DIRECTION.DOWN) {
        if (
          position === POSITION.BOTTOM_LEFT ||
          position === POSITION.BOTTOM_RIGHT
        ) {
          console.warn(
            'Passing direction = down with position = bottomLeft/bottomRight is not suggested.'
          );
        } else {
          this.downAnimate();
        }
      }
    } else {
      this.upAnimate();
    }
  }

  fabOnPress() {
    if (this.props.onPress) {
      this.props.onPress();
      this._animate();
      this.activeTimer = setTimeout(() => {
        this.setState({
          active: this.props.active
        });
      }, 100);
    }
  }

  renderButtons() {
    const childrenArray = React.Children.toArray(this.props.children);
    const newChildren = [];
    childrenArray.slice(1).map((child, i) =>
      newChildren.push(
        <AnimatedFab
          style={this.getOtherButtonStyle(child, i)}
          {...this.prepareButtonProps(child, i)}
          fabButton
          key={i}
        >
          {child.props.children}
        </AnimatedFab>
      )
    );
    return newChildren;
  }

  renderFab() {
    const childrenArray = React.Children.toArray(this.props.children);
    remove(childrenArray, item => {
      if (item.type.displayName === 'Styled(Button)') {
        return true;
      }
      return null;
    });
    return React.cloneElement(childrenArray[0], {
      style: this.getInitialStyle(childrenArray[0].props.style).iconStyle
    });
  }

  render() {
    const { style } = this.props;
    return (
      <Animated.View style={this.getContainerStyle()}>
        {this.renderButtons()}
        {Platform.OS === PLATFORM.IOS ||
        variables.androidRipple === false ||
        Platform.Version <= 21 ? (
          <TouchableOpacity
            onPress={() => this.fabOnPress()}
            {...this.prepareFabProps()}
            activeOpacity={1}
          >
            {this.renderFab()}
          </TouchableOpacity>
        ) : (
          <TouchableNativeFeedback
            onPress={() => this.fabOnPress()}
            // eslint-disable-next-line new-cap
            background={TouchableNativeFeedback.Ripple(
              variables.androidRippleColor,
              false
            )}
            {...this.prepareFabProps()}
          >
            <View style={[this.getInitialStyle().fab, style]}>
              {this.renderFab()}
            </View>
          </TouchableNativeFeedback>
        )}
      </Animated.View>
    );
  }
}
const StyledFab = connectStyle('NativeBase.Fab', {}, mapPropsToStyleNames)(Fab);
export { StyledFab as Fab };
