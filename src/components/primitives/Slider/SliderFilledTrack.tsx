import React from 'react';
import { SliderContext } from './Context';
import { StyleSheet } from 'react-native';
import Box from '../Box';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderFilledTrack = ({ style, ...props }: ISliderProps) => {
  const {
    isReversed,
    colorScheme,
    barSize = 0,
    sliderOffset = 0,
  }: ISliderContextProps = React.useContext(SliderContext);

  const leftPosition = isReversed ? sliderOffset : sliderOffset - barSize;
  // Fix for Web
  const customStyle = StyleSheet.create({
    SliderFilledTrack: {
      left: leftPosition,
    },
  });

  return (
    <Box
      position="absolute"
      left={leftPosition}
      backgroundColor={colorScheme}
      height="100%"
      width="100%"
      {...props}
      style={[style, customStyle.SliderFilledTrack]}
    />
  );
};

export default SliderFilledTrack;
