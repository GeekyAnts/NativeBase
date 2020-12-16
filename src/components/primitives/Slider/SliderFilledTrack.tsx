import React from 'react';
import { SliderContext } from './Context';
import Box from '../Box';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderFilledTrack = ({ ...props }: ISliderProps) => {
  const {
    isReversed,
    colorScheme,
    barSize = 0,
    sliderOffset = 0,
  }: ISliderContextProps = React.useContext(SliderContext);
  return (
    <Box
      left={isReversed ? sliderOffset : sliderOffset - barSize}
      backgroundColor={colorScheme}
      height="100%"
      width="100%"
      {...props}
    />
  );
};

export default SliderFilledTrack;
