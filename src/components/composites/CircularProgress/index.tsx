import React from 'react';
import { ViewStyle, StyleSheet, Animated, Easing } from 'react-native';

import { Box, IBoxProps, ITextProps, Text } from '../../primitives';
import styled from 'styled-components/native';
import { color, border } from 'styled-system';
import { usePropsConfig } from '../../../hooks';
type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export type ICircularProgressProps = IBoxProps & {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[];
  value: number;
  size?: number | sizes;
  thickness?: number;
  color?: string;
  trackColor?: string;
  isIndeterminate?: any;
  max?: number;
  min?: number;
};

const StyleAnimatedView = styled(Animated.View)<IBoxProps>(color, border);

const CircularProgress = ({
  value,
  size,
  isIndeterminate,
  thickness,
  color: colorProp,
  trackColor,
  max,
  min,
  ...props
}: ICircularProgressProps) => {
  if (min) {
    value = value - min;
  }
  if (!size) {
    size = 'md';
  }
  let sizeProps;
  let newProps = usePropsConfig('CircularProgress', { size: size });
  if (typeof size === 'string') {
    sizeProps = {
      height: newProps.height,
      width: newProps.width,
    };
  } else {
    sizeProps = { height: size, width: size };
  }

  let defaultThickness = 4;
  if (thickness) {
    defaultThickness = thickness;
  }
  const degree: any = new Animated.Value(0);
  if (isIndeterminate) {
    Animated.loop(
      Animated.timing(degree, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }
  const [viewHeight, setViewHeight] = React.useState(0);
  const layout = (e: any) => {
    let height = e.nativeEvent.layout.height;
    setViewHeight(height);
  };
  const defaultStyling: any = {
    borderBottomLeftRadius: viewHeight / 2,
    borderBottomRightRadius: viewHeight / 2,
    borderTopLeftRadius: viewHeight / 2,
    borderTopRightRadius: viewHeight / 2,
    borderLeftWidth: defaultThickness,
    borderBottomWidth: defaultThickness,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    ...sizeProps,
  };
  const styles = StyleSheet.create({
    firstProgressLayer: {
      borderTopWidth: defaultThickness,
      borderRightWidth: defaultThickness,
      ...defaultStyling,
      transform: [{ rotateZ: '-135deg' }],
    },
    secondProgressLayer: {
      borderTopWidth: defaultThickness,
      borderRightWidth: defaultThickness,
      ...defaultStyling,
      transform: [{ rotateZ: '45deg' }],
    },
    offsetLayer: {
      borderTopWidth: defaultThickness,
      borderRightWidth: defaultThickness,
      ...defaultStyling,
      borderRadius: viewHeight / 2,
      transform: [{ rotateZ: '-135deg' }],
    },
    animateStyle: {
      borderTopWidth: defaultThickness,
      borderRightWidth: defaultThickness,
      ...defaultStyling,
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
  let halfSide = (max ? (min ? max - min : max) : 100) / 2; // calculating the halfvalue of the progress according to min and max

  const propStyle = (percent: number, base_degrees: number) => {
    const rotateBy = base_degrees + (percent * 180) / halfSide;
    return {
      transform: [{ rotateZ: rotateBy + 'deg' }],
    };
  };

  const renderThirdLayer = (percent: number) => {
    if (percent > halfSide) {
      return (
        <Box
          borderTopColor={colorProp ? colorProp : 'green.400'}
          borderRightColor={colorProp ? colorProp : 'green.400'}
          style={[
            styles.secondProgressLayer,
            propStyle(percent - halfSide, 45),
          ]}
        />
      );
    } else {
      return (
        <Box
          borderTopColor={trackColor ? trackColor : 'gray.200'}
          borderRightColor={trackColor ? trackColor : 'gray.200'}
          style={styles.offsetLayer}
        />
      );
    }
  };
  let firstProgressLayerStyle;
  if (value > halfSide) {
    firstProgressLayerStyle = propStyle(halfSide, -135);
  } else {
    firstProgressLayerStyle = propStyle(value, -135);
  }

  return (
    <Box
      {...sizeProps}
      rounded={100}
      borderWidth={defaultThickness}
      borderColor={trackColor ? trackColor : 'gray.200'}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {!isIndeterminate ? (
        <>
          <Box
            onLayout={layout}
            borderTopColor={colorProp ? colorProp : 'green.400'}
            borderRightColor={colorProp ? colorProp : 'green.400'}
            style={[styles.firstProgressLayer, firstProgressLayerStyle]}
          />
          {renderThirdLayer(value)}
          <Box fontSize={sizeProps.height / 4}>{props.children}</Box>
        </>
      ) : (
        <StyleAnimatedView
          onLayout={layout}
          borderTopColor={colorProp ? colorProp : 'green.400'}
          borderRightColor={colorProp ? colorProp : 'green.400'}
          style={styles.animateStyle}
        />
      )}
    </Box>
  );
};

export const CircularProgressLabel = (props: ITextProps) => {
  return <Text {...props} />;
};

export default CircularProgress;
