import React, { forwardRef } from 'react';
import { useSliderState } from '@react-stately/slider';
import { useLayout } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ISliderProps } from './types';
import Box from '../Box';
import { SliderContext } from './Context';
import { useSlider } from '@react-native-aria/slider';

function Slider(props: ISliderProps, ref?: any) {
  let newProps = {
    ...props,
    'aria-label': props.accessibilityLabel ?? 'Slider',
  };

  if (typeof props.value === 'number') {
    //@ts-ignore - React Native Aria slider accepts array of values
    newProps.value = [props.value];
  }

  if (typeof props.defaultValue === 'number') {
    //@ts-ignore - React Native Aria slider accepts array of values
    newProps.defaultValue = [props.defaultValue];
  }

  props = newProps;

  const { onLayout, layout: trackLayout } = useLayout();

  const state = useSliderState({
    ...props,
    //@ts-ignore
    numberFormatter: { format: (e) => e },
    minValue: props.minValue,
    maxValue: props.maxValue,
    onChange: (val: any) => {
      props.onChange && props.onChange(val[0]);
    },
    onChangeEnd: (val: any) => {
      props.onChangeEnd && props.onChangeEnd(val[0]);
    },
  });

  const themeProps = usePropsResolution('Slider', props);

  let { trackProps } = useSlider((props as unknown) as any, state, trackLayout);

  const wrapperStyle = {
    height: props.orientation === 'vertical' ? '100%' : undefined,
    width: props.orientation !== 'vertical' ? '100%' : undefined,
  };

  return (
    <SliderContext.Provider
      value={{
        trackLayout,
        state,
        orientation: props.orientation,
        isReversed: props.isReversed,
        colorScheme: props.colorScheme,
        trackProps,
        onTrackLayout: onLayout,
        thumbSize: themeProps.thumbSize,
        sliderSize: themeProps.sliderSize,
      }}
    >
      <Box
        {...wrapperStyle}
        justifyContent="center"
        ref={ref}
        alignItems="center"
        {...themeProps}
      >
        {React.Children.map(props.children, (child, index) => {
          if (child.displayName === 'SliderThumb') {
            return React.cloneElement(child as React.ReactElement, {
              index,
            });
          }

          return child;
        })}
      </Box>
    </SliderContext.Provider>
  );
}

export default forwardRef(Slider);
