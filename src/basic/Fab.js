/* @flow */


import React, { Component } from 'react';
import { Button } from './Button';
import { Platform, Animated, TouchableOpacity } from 'react-native';
// import View from './View';
import { Icon } from './Icon';
// import Badge from './Badge';
import { IconNB } from './IconNB';
// import Text from './Text';
import _ from 'lodash';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import computeProps from '../Utils/computeProps';


const AnimatedFab = Animated.createAnimatedComponent(Button);

class Fab extends Component {


  constructor(props) {
    super(props);
    this.state = {
      buttons: undefined,
      active: false,
    };
  }

  fabTopValue(pos) {
    if (pos === 'topLeft') {
      return {
        top: 20,
        bottom: undefined,
        left: 20,
        right: undefined,
      };
    } else if (pos === 'bottomRight') {
      return {
        top: undefined,
        bottom: (Platform.OS === 'ios') ? 20 : 40,
        left: undefined,
        right: 20,
      };
    } else if (pos === 'bottomLeft') {
      return {
        top: undefined,
        bottom: (Platform.OS === 'ios') ? 20 : 40,
        left: 20,
        right: undefined,
      };
    } else if (pos === 'topRight') {
      return {
        top: 20,
        bottom: undefined,
        left: undefined,
        right: 20,
      };
    }
  }

  fabOtherBtns(direction, i) {
    if (direction === 'up') {
      return {
        top: undefined,
        bottom: (this.props.active === false) ? ((Platform.OS === 'ios') ? 8 : 8) : ((i * 50) + 65),
        left: 8,
        right: 0,
      };
    } else if (direction === 'left') {
      return {
        top: 8,
        bottom: 0,
        left: (this.props.active === false) ? ((Platform.OS === 'ios') ? 8 : 8) : -((i * 50) + 50),
        right: 0,
      };
    } else if (direction === 'down') {
      return {
        top: (this.props.active === false) ? ((Platform.OS === 'ios') ? 8 : 8) : ((i * 50) + 65),
        bottom: 0,
        left: 8,
        right: 0,
      };
    } else if (direction === 'right') {
      return {
        top: 10,
        bottom: 0,
        left: (this.props.active === false) ? ((Platform.OS === 'ios') ? 8 : 8) : ((i * 50) + 65),
        right: 0,
      };
    }
  }

  getInitialStyle() {
    return {
      fab: {
        height: 56,
        width: 56,
        borderRadius: 28,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'blue',
      },
      container: {
        position: 'absolute',
        top: (this.props.position) ? this.fabTopValue(this.props.position).top : undefined,
        bottom: (this.props.position) ? this.fabTopValue(this.props.position).bottom : 20,
        right: (this.props.position) ? this.fabTopValue(this.props.position).right : 20,
        left: (this.props.position) ? this.fabTopValue(this.props.position).left : undefined,
        width: 56,
        height: this.containerHeight,
        flexDirection: (this.props.direction) ? ((this.props.direction == 'left || right') ? 'row' : 'column') : 'column',
        alignItems: 'center',
      },
      iconStyle: {
        color: '#fff',
        fontSize: 24,
        lineHeight: (Platform.OS === 'ios') ? 27 : undefined,
      },
      buttonStyle: {
        position: 'absolute',
        height: 40,
        width: 40,
        left: 7,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: 'blue',
      },
    };
  }

  getContainerStyle() {
    return _.merge(this.getInitialStyle().container, this.props.containerStyle);
  }

  prepareFabProps() {
    const defaultProps = {
      style: this.getInitialStyle().fab,
    };
    const incomingProps = _.clone(this.props);
    delete incomingProps.onPress;

    return computeProps(incomingProps, defaultProps);
  }

  getOtherButtonStyle(child, i) {
    const type = {
      top: (this.props.direction) ? (this.fabOtherBtns(this.props.direction, i).top) : undefined,
      left: (this.props.direction) ? (this.fabOtherBtns(this.props.direction, i).left) : 8,
      right: (this.props.direction) ? (this.fabOtherBtns(this.props.direction, i).right) : 0,
      bottom: (this.props.direction) ? (this.fabOtherBtns(this.props.direction, i).bottom) : ((this.props.active === false) ? ((Platform.OS === 'ios') ? 8 : 8) : ((i * 50) + 65)),
    };

    return _.merge(this.getInitialStyle().buttonStyle, child.props.style, type);
  }
  prepareButtonProps(child) {
    const inp = _.clone(child.props);
    delete inp.style;


    const defaultProps = {};

    return computeProps(inp, defaultProps);
  }

  componentDidMount() {
    const childrenArray = React.Children.toArray(this.props.children);
    const icon = _.remove(childrenArray, (item) => {
      if (item.type.displayName === 'Styled(Button)') {
        return true;
      }
    });
    this.setState({
      buttons: icon.length,
    });
    setTimeout(() => {
      this.setState({
        active: this.props.active,
      });
    }, 0);
  }

  renderFab() {
    const childrenArray = React.Children.toArray(this.props.children);
    const icon = _.remove(childrenArray, (item) => {
      if (item.type === Button) {
        return true;
      }
    });
      // this.setState({
      //   buttons: icon.length
      // });
    return React.cloneElement(childrenArray[0], { style: this.getInitialStyle().iconStyle });
  }

  renderButtons() {
    const childrenArray = React.Children.toArray(this.props.children);
    const icon = _.remove(childrenArray, (item) => {
      if (item.type.displayName === "Styled(Icon)" || item.type.displayName === "Styled(IconNB)") {
        return true;
      }
    });

    const newChildren = [];

    { childrenArray.map((child, i) => {
      newChildren.push(<AnimatedFab
        style={this.getOtherButtonStyle(child, i)}
        {...this.prepareButtonProps(child, i)}
        fabButton
        key={i}
      >{child.props.children}
      </AnimatedFab>);
    }
        ); }
    return newChildren;
  }
  upAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerHeight, {
        toValue: (this.state.buttons * 51.3) + 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
      }).start();
    } else {
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
      }).start();
    }
  }

  leftAnimate() {
    if (!this.state.active) {
      Animated.spring(this.containerWidth, {
        toValue: (this.state.buttons * 51.3) + 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
      }).start();
    } else {
      this.setState({
        active: false,
      });
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
      }).start();
    }
  }

  rightAnimate() {
    if (!this.state.active) {
      Animated.spring(this.containerWidth, {
        toValue: (this.state.buttons * 51.3) + 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
      }).start();
    } else {
      this.setState({
        active: false,
      });
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
      }).start();
    }
  }

  downAnimate() {
    if (!this.state.active) {
      Animated.spring(this.containerHeight, {
        toValue: (56),
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
      }).start();
    } else {
      this.setState({
        active: false,
      });
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
      }).start();
    }
  }

  _animate() {
    const { props: { direction, position } } = this;
    if (this.props.direction) {
      if (this.props.direction === 'up') {
        this.upAnimate();
      } else if (this.props.direction === 'left') {
        this.leftAnimate();
      } else if (this.props.direction === 'right') {
        this.rightAnimate();
      } else if (this.props.direction === 'down') {
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
    }
  }

  render() {
    const { props: { active } } = this;
    if (!this.props.active) {
      this.containerHeight = new Animated.Value(56);
      this.containerWidth = new Animated.Value(56);
      this.buttonScale = new Animated.Value(1);
    } else {
      this.containerHeight = this.containerHeight || new Animated.Value(0);
      this.containerWidth = this.containerWidth || new Animated.Value(0);
      this.buttonScale = this.buttonScale || new Animated.Value(0);
    }
    return (
      <Animated.View style={this.getContainerStyle()}>
        {this.renderButtons()}
        <TouchableOpacity
          onPress={() => this.fabOnPress()}
          {...this.prepareFabProps()} activeOpacity={1}
        >
          {this.renderFab()}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Fab.propTypes = {
  ...Animated.propTypes,
  style: React.PropTypes.object,
  active: React.PropTypes.bool,
  direction: React.PropTypes.string,
  containerStyle: React.PropTypes.object,
  position: React.PropTypes.string,
};
const StyledFab = connectStyle('NativeBase.Fab', {}, mapPropsToStyleNames)(Fab);
export {
  StyledFab as Fab,
};
