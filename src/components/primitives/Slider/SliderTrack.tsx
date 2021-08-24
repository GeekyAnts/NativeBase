import React from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Pressable } from '../Pressable';
import Box from '../Box';
import { SliderContext } from './Context';
import type { ISliderTrackProps } from './types';

const SliderTrack = ({ children, ...props }: ISliderTrackProps, ref?: any) => {
  const {
    orientation,
    trackProps,
    onTrackLayout,
    colorScheme,
    sliderSize,
    isReadOnly,
    isDisabled,
  } = React.useContext(SliderContext);

  const { _readOnly, _disabled, ...themeProps } = usePropsResolution(
    'SliderTrack',
    {
      size: sliderSize,
      colorScheme,
      ...props,
    }
  );

  const isVertical = orientation === 'vertical';

  const trackStyle = React.useMemo(
    () => ({
      height: isVertical ? '100%' : themeProps.size,
      width: !isVertical ? '100%' : themeProps.size,
    }),
    [isVertical, themeProps.size]
  );

  return (
    <Pressable
      onLayout={onTrackLayout}
      ref={ref}
      {...trackProps}
      {...trackStyle}
      paddingY={!isVertical ? '12px' : undefined}
      paddingX={isVertical ? '12px' : undefined}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        {...themeProps}
        style={trackStyle}
        {...(isDisabled && _disabled)}
        {...(isReadOnly && _readOnly)}
      >
        {children}
      </Box>
    </Pressable>
  );
};

export default React.forwardRef(SliderTrack);
