import React from 'react';
import { SliderContext } from './Context';
import { StyleSheet } from 'react-native';
import Box from '../Box';
import type { ISliderProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const SliderFilledTrack = ({ style, ...props }: ISliderProps, ref?: any) => {
  const {
    isReversed,
    colorScheme,
    state,
    trackLayout,
    orientation,
    sliderSize,
  } = React.useContext(SliderContext);

  const sliderTrackPosition = isReversed
    ? orientation === 'vertical'
      ? trackLayout.height - trackLayout.height * state.getThumbPercent(0)
      : trackLayout.width - trackLayout.width * state.getThumbPercent(0)
    : state.getThumbPercent(0) * 100 + '%';

  const themeProps = usePropsResolution('SliderFilledTrack', {
    size: sliderSize,
    colorScheme,
    ...props,
  });
  // NOTE: Required for WEB compatibility
  const customStyle = StyleSheet.create({
    verticalStyle: {
      height: sliderTrackPosition,
      width: sliderSize,
    },
    horizontalStyle: {
      width: sliderTrackPosition,
      height: sliderSize,
    },
  });

  return (
    <Box
      position="absolute"
      {...themeProps}
      left={orientation !== 'vertical' && !isReversed ? 0 : undefined}
      bottom={orientation === 'vertical' && !isReversed ? 0 : undefined}
      right={orientation !== 'vertical' && isReversed ? 0 : undefined}
      top={orientation === 'vertical' && isReversed ? 0 : undefined}
      {...props}
      style={[
        style,
        orientation === 'vertical'
          ? customStyle.verticalStyle
          : customStyle.horizontalStyle,
      ]}
      ref={ref}
    />
  );
};

export default React.forwardRef(SliderFilledTrack);
