import React from 'react';
import { StyleSheet, Animated, Platform } from 'react-native';
import { SliderContext } from './Context';
import Box from '../Box';
import Icon from '../Icon';
import { useThemeProps } from '../../../hooks';
import type { ISliderProps, ISliderContextProps } from './types';

const SliderThumb = ({ children, ...props }: ISliderProps) => {
  const { ...newProps } = useThemeProps('SliderThumb', props);
  const {
    sliderOffset = 0,
    panResponder,
    colorScheme,
    thumbSize = 0,
    orientation,
    isDisabled,
  }: ISliderContextProps = React.useContext(SliderContext);

  const sliderThumbPosition = sliderOffset - 8 - thumbSize / 2;

  const customStyle = StyleSheet.create({
    SliderThumb: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 999,
      padding: 4, // increased touch area for better touch detection.
    },
    verticalStyle: {
      bottom: sliderThumbPosition,
    },
    horizontalStyle: {
      left: sliderThumbPosition,
    },
  });

  const sizedIcon = () =>
    React.cloneElement(
      children,
      {
        size: `${thumbSize}px`,
        color: children.props.color ? children.props.color : colorScheme,
      },
      children.props.children
    );

  return (
    <Animated.View
      style={[
        customStyle.SliderThumb,
        orientation === 'vertical'
          ? customStyle.verticalStyle
          : customStyle.horizontalStyle,
      ]}
      {...panResponder.panHandlers}
    >
      <Box
        cursor={
          Platform.OS === 'web'
            ? isDisabled
              ? 'not-allowed'
              : 'pointer'
            : null
        }
        position="relative"
        borderRadius="full"
        backgroundColor="light.50"
        p={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        userSelect={Platform.OS === 'web' ? 'none' : null}
        {...newProps}
      >
        {children ? (
          sizedIcon()
        ) : (
          <Icon
            name="circle-medium"
            type="MaterialCommunityIcons"
            color={colorScheme}
            size={`${thumbSize}px`}
            opacity={0}
          />
        )}
      </Box>
    </Animated.View>
  );
};

export default SliderThumb;
