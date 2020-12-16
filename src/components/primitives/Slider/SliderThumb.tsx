import React from 'react';
import { StyleSheet, Animated } from 'react-native';
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
      left: sliderOffset,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const sizedIcon = () =>
    React.cloneElement(
      children,
      {
        size: thumbSize,
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
        position="relative"
        borderRadius={999}
        backgroundColor="light.50"
        p={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...newProps}
      >
        {children ? (
          sizedIcon()
        ) : (
          <Icon
            name="circle-medium"
            type="MaterialCommunityIcons"
            color={colorScheme}
            size={thumbSize}
            opacity={0}
          />
        )}
      </Box>
    </Animated.View>
  );
};

export default SliderThumb;
