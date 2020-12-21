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
    orientation,
  }: ISliderContextProps = React.useContext(SliderContext);

  const sliderTrackPosition = isReversed
    ? sliderOffset
    : sliderOffset - barSize;
  // NOTE: Required for WEB compatibility
  const customStyle = StyleSheet.create({
    verticalStyle: {
      top: -sliderTrackPosition,
    },
    horizontalStyle: {
      left: sliderTrackPosition,
    },
  });

  return (
    <Box
      position="absolute"
      left={orientation === 'vertical' ? 0 : sliderTrackPosition}
      top={orientation === 'vertical' ? -sliderTrackPosition : 0}
      backgroundColor={colorScheme}
      height="100%"
      width="100%"
      {...props}
      style={[
        style,
        orientation === 'vertical'
          ? customStyle.verticalStyle
          : customStyle.horizontalStyle,
      ]}
    />
  );
};

export default SliderFilledTrack;
