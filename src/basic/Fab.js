import React, { Component } from "react";
import PropTypes from "prop-types";
import computeProps from "../Utils/computeProps";
// import Button from './../Button';
import {
  Platform,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  View
} from "react-native";
import { Icon } from "./Icon";
import { IconNB } from "./IconNB";
import { Button } from "./Button";
import variables from "./../theme/variables/platform";
import _ from "lodash";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import { connectStyle } from "native-base-shoutem-theme";

const { height, width } = Dimensions.get("window");

const AnimatedFab = Animated.createAnimatedComponent(Button);

class Fab extends Component {
  props: Animated.props & {
    position: ?string
  };

  state: {
    buttons: void | React$Element<Button>,
    active: boolean
  };
  constructor(props) {
    super(props);
    this.containerHeight = new Animated.Value(56);
    this.containerWidth = new Animated.Value(0);
    this.buttonScale = new Animated.Value(0);
    this.state = {
      buttons: undefined,
      active: false
    };
  }

  fabTopValue(
    pos
  ): ?{ top: ?number, bottom: ?number, left: ?number, right: ?number } {
    if (pos === "topLeft") {
      return {
        top: 20,
        bottom: undefined,
        left: 20,
        right: undefined
      };
    } else if (pos === "bottomRight") {
      return {
        top: undefined,
        bottom: 20,
        left: undefined,
        right: 20
      };
    } else if (pos === "bottomLeft") {
      return {
        top: undefined,
        bottom: 20,
        left: 20,
        right: undefined
      };
    } else if (pos === "topRight") {
      return {
        top: 20,
        bottom: undefined,
        left: undefined,
        right: 20
      };
    }
  }

  fabOtherBtns(direction, i) {
    if (direction === "up") {
      return {
        top: undefined,
        bottom:
          this.props.active === false
            ? Platform.OS === "ios" ? 50 : 5
            : i * 50 + 65,
        left: 8,
        right: 0
      };
    } else if (direction === "left") {
      return {
        top: 8,
        bottom: 0,
        left:
          this.props.active === false
            ? Platform.OS === "ios" ? 8 : 8
            : -(i * 50 + 58),
        right: 0
      };
    } else if (direction === "down") {
      return {
        top:
          this.props.active === false
            ? Platform.OS === "ios" ? 50 : 8
            : i * 50 + 73,
        bottom: 0,
        left: 8,
        right: 0
      };
    } else if (direction === "right") {
      return {
        top: 8,
        bottom: 0,
        left:
          this.props.active === false
            ? Platform.OS === "ios" ? 50 : 8
            : i * 50 + 73,
        right: 0
      };
    }
  }

  getInitialStyle(iconStyle) {
    return {
      fab: {
        height: 56,
        width: 56,
        borderRadius: 28,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        justifyContent: "center",
        alignItems: "center",
        shadowRadius: 2,
        position: "absolute",
        bottom: 0,
        backgroundColor: "blue"
      },
      container: {
        position: "absolute",
        top: this.props.position
          ? this.fabTopValue(this.props.position).top
          : undefined,
        bottom: this.props.position
          ? this.fabTopValue(this.props.position).bottom
          : 20,
        right: this.props.position
          ? this.fabTopValue(this.props.position).right
          : 20,
        left: this.props.position
          ? this.fabTopValue(this.props.position).left
          : undefined,
        width: 56,
        height: this.containerHeight,
        flexDirection: this.props.direction
          ? this.props.direction == "left || right" ? "row" : "column"
          : "column",
        alignItems: "center"
      },
      iconStyle: {
        color: "#fff",
        fontSize: 24,
        lineHeight: Platform.OS == "ios" ? 27 : undefined,
        ...iconStyle
      },
      buttonStyle: {
        position: "absolute",
        height: 40,
        width: 40,
        left: 7,
        borderRadius: 20,
        transform: this.state.active
          ? [{ scale: new Animated.Value(1) }]
          : [{ scale: this.buttonScale }],
        marginBottom: 10,
        backgroundColor: "blue"
      }
    };
  }

  getContainerStyle() {
    return _.merge(this.getInitialStyle().container, this.props.containerStyle);
  }

  prepareFabProps() {
    var defaultProps = {
      style: this.getInitialStyle().fab
    };
    var incomingProps = _.clone(this.props);
    delete incomingProps.onPress;

    return computeProps(incomingProps, defaultProps);
  }

  getOtherButtonStyle(child, i) {
    const type = {
      top: this.props.direction
        ? this.fabOtherBtns(this.props.direction, i).top
        : undefined,
      left: this.props.direction
        ? this.fabOtherBtns(this.props.direction, i).left
        : 8,
      right: this.props.direction
        ? this.fabOtherBtns(this.props.direction, i).right
        : 0,
      bottom: this.props.direction
        ? this.fabOtherBtns(this.props.direction, i).bottom
        : this.props.active === false
          ? Platform.OS === "ios" ? 8 : 8
          : i * 50 + 50
    };

    return _.merge(this.getInitialStyle().buttonStyle, child.props.style, type);
  }
  prepareButtonProps(child) {
    var inp = _.clone(child.props);
    delete inp.style;

    var defaultProps = {};

    return computeProps(inp, defaultProps);
  }

  componentDidMount() {
    let childrenArray = React.Children.toArray(this.props.children);
    let icon = _.remove(childrenArray, item => {
      if (item.type.displayName === "Styled(Button)") {
        return true;
      }
    });
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

  renderFab() {
    let childrenArray = React.Children.toArray(this.props.children);
    let icon = _.remove(childrenArray, item => {
      if (item.type.displayName === "Styled(Button)") {
        return true;
      }
    });
    // this.setState({
    //   buttons: icon.length
    // });
    return React.cloneElement(childrenArray[0], {
      style: this.getInitialStyle(childrenArray[0].props.style).iconStyle
    });
  }

  renderButtons() {
    let childrenArray = React.Children.toArray(this.props.children);
    // let icon = _.remove(childrenArray, item => {
    // 	if (item.type == Icon) {
    // 		return true;
    // 	}
    // });

    let newChildren = [];

    {
      childrenArray.slice(1).map((child, i) => {
        newChildren.push(
          <AnimatedFab
            style={this.getOtherButtonStyle(child, i)}
            {...this.prepareButtonProps(child, i)}
            fabButton={true}
            key={i}
          >
            {child.props.children}
          </AnimatedFab>
        );
      });
    }
    return newChildren;
  }
  upAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerHeight, {
        toValue: this.state.buttons * 51.3 + 56
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1
      }).start();
    } else {
      this.setState({
        active: false
      });
      Animated.spring(this.containerHeight, {
        toValue: 56
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0
      }).start();
    }
  }
  // componentWillReceiveProps(nextProps) {
  // 	const { props: { direction, position } } = this;
  // 	if (this.props.direction) {
  // 		if (this.props.direction === 'up') {
  // 			this.upAnimate(nextProps.active);
  // 		} else if (this.props.direction === 'left') {
  // 			this.leftAnimate(nextProps.active);
  // 		} else if (this.props.direction === 'right') {
  // 			this.rightAnimate(nextProps.active);
  // 		} else if (this.props.direction === 'down') {
  // 			this.downAnimate(nextProps.active);
  // 		}
  // 	} else {
  // 		this.upAnimate(nextProps.active);
  // 	}
  // }

  leftAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerWidth, {
        toValue: this.state.buttons * 51.3 + 56
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1
      }).start();
    } else {
      this.setState({
        active: false
      });
      Animated.spring(this.containerHeight, {
        toValue: 56
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0
      }).start();
    }
  }

  rightAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerWidth, {
        toValue: this.state.buttons * 51.3 + 56
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1
      }).start();
    } else {
      this.setState({
        active: false
      });
      Animated.spring(this.containerHeight, {
        toValue: 56
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0
      }).start();
    }
  }

  downAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerHeight, {
        toValue: 56
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1
      }).start();
    } else {
      this.setState({
        active: false
      });
      Animated.spring(this.containerHeight, {
        toValue: 56
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0
      }).start();
    }
  }
  _animate() {
    const { props: { direction, position } } = this;
    if (this.props.direction) {
      if (this.props.direction === "up") {
        this.upAnimate();
      } else if (this.props.direction === "left") {
        this.leftAnimate();
      } else if (this.props.direction === "right") {
        this.rightAnimate();
      } else if (this.props.direction === "down") {
        this.downAnimate();
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

  render() {
    const { props: { active } } = this;

    return (
      <Animated.View style={this.getContainerStyle()}>
        {this.renderButtons()}
        {Platform.OS === "ios" ||
        variables.androidRipple === false ||
        Platform["Version"] <= 21 ? (
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
            background={
              this.props.androidRippleColor
                ? TouchableNativeFeedback.Ripple(this.props.androidRippleColor)
                : TouchableNativeFeedback.Ripple(variables.androidRippleColor)
            }
            {...this.prepareFabProps()}
          >
            <View style={[this.getInitialStyle().fab, this.props.style]}>
              {this.renderFab()}
            </View>
          </TouchableNativeFeedback>
        )}
      </Animated.View>
    );
  }
}
const StyledFab = connectStyle("NativeBase.Fab", {}, mapPropsToStyleNames)(Fab);
export { StyledFab as Fab };
