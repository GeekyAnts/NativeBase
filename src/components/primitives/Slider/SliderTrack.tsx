import React from 'react';
import Box from '../Box';
import { SliderContext } from './Context';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderTrack = ({ children, ...props }: ISliderProps) => {
  const {
    sliderSize,
    trackColor,
    orientation,
  }: ISliderContextProps = React.useContext(SliderContext);

  return (
    <Box
      position="absolute"
      backgroundColor={trackColor}
      height={orientation === 'vertical' ? '100%' : `${sliderSize}px`}
      borderRadius={999}
      width={orientation === 'vertical' ? `${sliderSize}px` : '100%'}
      {...props}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default SliderTrack;
