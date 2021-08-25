import get from 'lodash.get';
import React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { makeStyledComponent } from '../../../utils/styled';
import { useTheme, useThemeProps } from '../../../hooks';
import { canUseDom } from '../../../utils';
import { default as Box } from '../../primitives/Box';
import type { ICircularProgressProps } from './types';
import { themeTools } from '../../../theme';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyleAnimatedView = makeStyledComponent(Animated.View);

const CircularProgress = (
  { value, isIndeterminate, max, min, ...props }: ICircularProgressProps,
  ref: any
) => {
  const theme = useTheme();

  const isDomUsable = canUseDom();
  if (min) {
    value = value - min;
  }

  let sizeProps;
  let newProps = useThemeProps('CircularProgress', props);
  let [, remainingProps] = themeTools.extractInObject(props, ['size']); // removing size from props so that Box don't accept size passed for CircularProgress

  if (!newProps.size) {
    sizeProps = {
      height: newProps.height,
      width: newProps.width,
    };
  } else {
    sizeProps = { height: newProps.size, width: newProps.size };
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

  const defaultThickness = newProps.thickness;
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
          borderTopColor={newProps.color}
          borderRightColor={newProps.color}
          style={[
            styles.secondProgressLayer,
            propStyle(percent - halfSide, 45),
          ]}
        />
      );
    } else {
      return (
        <Box
          borderTopColor={newProps.trackColor}
          borderRightColor={newProps.trackColor}
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
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      {...sizeProps}
      rounded={viewHeight / 2}
      borderWidth={defaultThickness}
      borderColor={newProps.trackColor}
      justifyContent="center"
      alignItems="center"
      {...remainingProps}
      ref={ref}
      accessible
      accessibilityRole="progressbar"
      accessibilityValue={{
        min,
        max,
        now: value,
      }}
    >
      {!isIndeterminate ? (
        <>
          <Box
            onLayout={layout}
            borderTopColor={newProps.color}
            borderRightColor={newProps.color}
            style={[styles.firstProgressLayer, firstProgressLayerStyle]}
          />
          {renderThirdLayer(value)}
          <Box _text={newProps._text}>{remainingProps.children}</Box>
        </>
      ) : (
        <StyleAnimatedView
          onLayout={layout}
          borderTopColor={newProps.color}
          borderRightColor={newProps.color}
          style={styles.animateStyle}
        />
      )}
    </Box>
  );
};

export default React.memo(React.forwardRef(CircularProgress));
