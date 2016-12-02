import React, { Component } from 'react';
import Button from './Button';
import { Animated } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
const AnimatedFab = Animated.createAnimatedComponent(Button);
export default class AnimatedButton extends Component {
  render() {
    return (
        <AnimatedFab {...this.props} />
    );
  }
}
