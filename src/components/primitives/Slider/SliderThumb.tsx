import React from 'react';
import { StyleSheet, Animated, Platform } from 'react-native';
import { SliderContext } from './Context';
import Box from '../Box';
import Icon from '../Icon';
import { usePropsConfig } from '../../../hooks';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderThumb = ({ children, ...props }: ISliderProps) => {
  const { ...newProps } = usePropsConfig('SliderThumb', props);
  const {
    sliderOffset,
    panResponder,
    colorScheme,
    thumbSize,
  }: ISliderContextProps = React.useContext(SliderContext);

  const customStyle = StyleSheet.create({
    SliderThumb: {
      position: 'absolute',
      display: 'flex',
      left: sliderOffset && thumbSize ? sliderOffset - 2 - thumbSize / 2 : 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 999,
      padding: 4, // increased touch area for better touch detection.
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
      style={customStyle.SliderThumb}
      {...panResponder.panHandlers}
    >
      <Box
        cursor={Platform.OS === 'web' ? 'pointer' : null}
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
