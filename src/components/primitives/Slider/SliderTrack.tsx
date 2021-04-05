import React from 'react';
import Box from '../Box';
import { SliderContext } from './Context';
import type { ISliderProps, ISliderContextProps } from './types';

const SliderTrack = ({ children, ...props }: ISliderProps, ref?: any) => {
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
      borderRadius="full"
      width={orientation === 'vertical' ? `${sliderSize}px` : '100%'}
      {...props}
      overflow="hidden"
      ref={ref}
    >
      {children}
    </Box>
  );
};

export default React.forwardRef(SliderTrack);
