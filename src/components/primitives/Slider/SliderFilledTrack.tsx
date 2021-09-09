import React from 'react';
import { SliderContext } from './Context';
import { StyleSheet } from 'react-native';
import Box from '../Box';
import type { ISliderTrackFilledProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const SliderFilledTrack = (
  { style, ...props }: ISliderTrackFilledProps,
  ref?: any
) => {
  const {
    isReversed,
    colorScheme,
    state,
    trackLayout,
    orientation,
    isDisabled,
    sliderSize,
    isReadOnly,
  } = React.useContext(SliderContext);

  const sliderTrackPosition = isReversed
    ? orientation === 'vertical'
      ? trackLayout.height - trackLayout.height * state.getThumbPercent(0)
      : trackLayout.width - trackLayout.width * state.getThumbPercent(0)
    : state.getThumbPercent(0) * 100 + '%';

  const resolvedProps = usePropsResolution(
    'SliderFilledTrack',
    {
      size: sliderSize,
      colorScheme,
      ...props,
    },
    { isDisabled, isReadOnly }
  );
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
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box
      position="absolute"
      {...resolvedProps}
      left={orientation !== 'vertical' && !isReversed ? 0 : undefined}
      bottom={orientation === 'vertical' && !isReversed ? 0 : undefined}
      right={orientation !== 'vertical' && isReversed ? 0 : undefined}
      top={orientation === 'vertical' && isReversed ? 0 : undefined}
      style={[
        style,
        orientation === 'vertical'
          ? customStyle.verticalStyle
          : customStyle.horizontalStyle,
      ]}
      ref={ref}
      // {...(isReadOnly && _readOnly)}
      // {...(isDisabled && _disabled)}
    />
  );
};

export default React.forwardRef(SliderFilledTrack);
