import React from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Pressable } from '../Pressable';
import Box from '../Box';
import { SliderContext } from './Context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
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

  const { _wrap, ...resolvedProps } = usePropsResolution(
    'SliderTrack',
    {
      size: sliderSize,
      colorScheme,
      ...props,
    },
    { isReadOnly, isDisabled }
  );

  const isVertical = orientation === 'vertical';

  const trackStyle = React.useMemo(
    () => ({
      height: isVertical ? '100%' : resolvedProps.size,
      width: !isVertical ? '100%' : resolvedProps.size,
    }),
    [isVertical, resolvedProps.size]
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Pressable
      onLayout={onTrackLayout}
      ref={ref}
      {...trackProps}
      {...trackStyle}
      paddingY={!isVertical ? '3' : undefined}
      paddingX={isVertical ? '3' : undefined}
      alignItems={_wrap.alignItems}
      justifyContent={_wrap.justifyContent}
    >
      <Box {...resolvedProps} style={trackStyle}>
        {children}
      </Box>
    </Pressable>
  );
};

export default React.forwardRef(SliderTrack);
