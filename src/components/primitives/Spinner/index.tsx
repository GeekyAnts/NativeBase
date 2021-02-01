import React from 'react';
import { ActivityIndicator, Animated, Easing, StyleSheet } from 'react-native';
import type { ActivityIndicator as ActivityIndicatorType } from 'react-native';
import styled from 'styled-components/native';
import { color, space, position, border } from 'styled-system';
import { useToken, useThemeProps } from '../../../hooks';
import type { ISpinnerProps } from './props';
import { useSpinner } from './useSpinner';
import type { IBoxProps } from '../Box';
import {
  Default,
  Dotted,
  MultiColorDotted,
  Stroked,
  SquareDotted,
} from './variants';

const StyleAnimatedView = styled(Animated.View)<IBoxProps>(color, border);

const StyledSpinner = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  position
);
const Spinner: any = (props: ISpinnerProps, ref: any) => {
  const newProps = useThemeProps('Spinner', props);
  const spinnerColor = useToken('colors', newProps.color);
  const { spinnerProps } = useSpinner(props);
  const iconSize: any = { sm: 10, lg: 20 };

  const degree: any = new Animated.Value(0);
  Animated.loop(
    Animated.timing(degree, {
      toValue: 1,
      duration: 900,
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
    if (newProps.variant == 'custom' && newProps.renderProp) {
      return (
        <StyleAnimatedView style={styles.animateStyle}>
          {newProps.renderProp}
        </StyleAnimatedView>
      );
    } else {
      let spinnerVariant = null;
      switch (newProps.variant) {
        case 'dotted':
          spinnerVariant = (
            <Dotted
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
          break;
        case 'multiColorDotted':
          spinnerVariant = (
            <MultiColorDotted
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
          break;
        case 'stroked':
          spinnerVariant = (
            <Stroked
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
          break;
        case 'squareDotted':
          spinnerVariant = (
            <SquareDotted
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 12}
            />
          );
          break;
        default:
          spinnerVariant = (
            <Default
              color={spinnerColor}
              size={props.size ? iconSize[props.size] : 8}
            />
          );
          break;
      }
      return (
        <StyleAnimatedView style={styles.animateStyle}>
          {spinnerVariant}
        </StyleAnimatedView>
      );
    }
  }
};

export default React.memo(
  React.forwardRef<ActivityIndicatorType, ISpinnerProps>(Spinner)
);
export type { ISpinnerProps };
