import get from 'lodash/get';
import React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { border, color } from 'styled-system';
import { useTheme, useThemeProps } from '../../../hooks';
import { canUseDom } from '../../../utils';
import { default as Box, IBoxProps } from '../../primitives/Box';
import type { ICircularProgressProps } from './types';

const StyleAnimatedView = styled(Animated.View)<IBoxProps>(color, border);

const CircularProgress = (
  {
    value,
    size,
    isIndeterminate,
    thickness,
    color: colorProp,
    trackColor,
    max,
    min,
    _text,
    ...props
  }: ICircularProgressProps,
  ref: any
) => {
  const theme = useTheme();

  const isDomUsable = canUseDom();
  if (min) {
    value = value - min;
  }
  if (!size) {
    size = 'lg';
  }
  let sizeProps;
  let newProps = useThemeProps('CircularProgress', { size: size });
  if (typeof size === 'string') {
    sizeProps = {
      height: newProps.height,
      width: newProps.width,
    };
  } else {
    sizeProps = { height: size, width: size };
  }
  // fetching size from theme for passing into style prop
  const themeHeight = get(theme, 'space.' + sizeProps.height);
  const themeWidth = get(theme, 'space.' + sizeProps.width);

  const styleSize = {
    height: themeHeight
      ? parseInt(themeHeight.slice(themeHeight.Length, -2), 10)
      : sizeProps.height,
    width: themeWidth
      ? parseInt(themeWidth.slice(themeWidth.Length, -2), 10)
      : sizeProps.width,
  };

  let defaultThickness = 8;
  if (thickness) {
    defaultThickness = thickness;
  }
  const degree: any = new Animated.Value(0);
  if (isIndeterminate) {
    if (isDomUsable) {
      Animated.loop(
        Animated.timing(degree, {
          toValue: 1,
          duration: 600,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
    }
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
    ...styleSize,
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
          borderTopColor={colorProp ? colorProp : 'blue.700'}
          borderRightColor={colorProp ? colorProp : 'blue.700'}
          style={[
            styles.secondProgressLayer,
            propStyle(percent - halfSide, 45),
          ]}
        />
      );
    } else {
      return (
        <Box
          borderTopColor={trackColor ? trackColor : 'blueGray.200'}
          borderRightColor={trackColor ? trackColor : 'blueGray.200'}
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
      rounded={viewHeight / 2}
      borderWidth={defaultThickness}
      borderColor={trackColor ? trackColor : 'blueGray.200'}
      justifyContent="center"
      alignItems="center"
      {...props}
      ref={ref}
    >
      {!isIndeterminate ? (
        <>
          <Box
            onLayout={layout}
            borderTopColor={colorProp ? colorProp : 'blue.700'}
            borderRightColor={colorProp ? colorProp : 'blue.700'}
            style={[styles.firstProgressLayer, firstProgressLayerStyle]}
          />
          {renderThirdLayer(value)}
          <Box fontSize={sizeProps.height / 4} _text={_text}>
            {props.children}
          </Box>
        </>
      ) : (
        <StyleAnimatedView
          onLayout={layout}
          borderTopColor={colorProp ? colorProp : 'blue.700'}
          borderRightColor={colorProp ? colorProp : 'blue.700'}
          style={styles.animateStyle}
        />
      )}
    </Box>
  );
};

export default React.memo(React.forwardRef(CircularProgress));
