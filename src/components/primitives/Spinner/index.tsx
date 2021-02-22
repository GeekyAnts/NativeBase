import React from 'react';
import { ActivityIndicator, Animated, Easing, StyleSheet } from 'react-native';
import type { ActivityIndicator as ActivityIndicatorType } from 'react-native';
import styled from 'styled-components/native';
import { color, space, position, border } from 'styled-system';
import { useToken, useThemeProps } from '../../../hooks';
import type { ISpinnerProps } from './types';
import { useSpinner } from './useSpinner';
import type { IBoxProps } from '../Box';
import { customLayout, customPosition } from '../../../utils/customProps';
import {
  Default,
  Dotted,
  MultiColorDotted,
  Stroked,
  SquareDotted,
} from './variants';

const StyleAnimatedView = styled(Animated.View)<IBoxProps>(
  color,
  border,
  position,
  customPosition,
  customLayout
);

const StyledSpinner = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  position
);
const Spinner: any = ({ renderProp, ...props }: ISpinnerProps, ref: any) => {
  const newProps = useThemeProps('Spinner', props);
  const spinnerColor = useToken('colors', newProps.color);
  const { spinnerProps } = useSpinner(props);
  const iconSize: any = { sm: 10, lg: 20 };

  const degree: any = new Animated.Value(0);
  Animated.loop(
    Animated.timing(degree, {
      toValue: 1,
      duration: newProps.duration ?? 1900,
      easing: Easing.linear,
      useNativeDriver: false,
    })
  ).start();

  const styles = StyleSheet.create({
    animateStyle: {
      transform: [
        {
          rotateZ: degree.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    },
  });
  if (!newProps.variant) {
    return (
      <StyledSpinner
        {...spinnerProps}
        {...newProps}
        color={spinnerColor}
        ref={ref}
      />
    );
  } else {
    if (newProps.variant === 'custom' && renderProp) {
      return (
        <StyleAnimatedView style={styles.animateStyle}>
          {renderProp}
        </StyleAnimatedView>
      );
    } else {
      let SpinnerVariant = null;
      switch (newProps.variant) {
        case 'dotted':
          SpinnerVariant = (
            <Dotted
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
          break;
        case 'multiColorDotted':
          SpinnerVariant = (
            <MultiColorDotted
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
          break;
        case 'stroked':
          SpinnerVariant = (
            <Stroked
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
          break;
        case 'squareDotted':
          SpinnerVariant = (
            <SquareDotted
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
          break;
        default:
          SpinnerVariant = (
            <Default
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
      }
      return (
        <StyleAnimatedView style={styles.animateStyle}>
          {SpinnerVariant}
        </StyleAnimatedView>
      );
    }
  }
};

export default React.memo(
  React.forwardRef<ActivityIndicatorType, ISpinnerProps>(Spinner)
);
export type { ISpinnerProps };
