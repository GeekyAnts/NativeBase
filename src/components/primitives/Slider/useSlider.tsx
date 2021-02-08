import React from 'react';
import { useSlider } from '@react-aria/slider';

type SliderProps = {
  accessible: boolean;
  accessibilityRole: String;
  accessibilityLabel: String;
  accessibilityValue: any;
  accessibilityHint: String;
  accessibilityActions: any;
  onAccessibilityAction: any;
};

export function useSlider(props: any): any {
  return {
    inputProps: {
      accessible: props.accessible,
      accessibilityRole: props.accessibilityRole ?? 'Slider',
      accessibilityLabel: props.accessibilityLabel ?? 'Slider',
      // accessibilityValue:{{
      //   min,
      //   max,
      //   now: value,
      // }},
      // accessibilityHint={this.props.accessibilityHint}
      // accessibilityActions={[
      //   {
      //     name: 'increment',
      //     label: 'Increment',
      //   },

      //   {
      //     name: 'decrement',
      //     label: 'Decrement',
      //   },
      // ]}
      // onAccessibilityAction={this.onAccessibilityAction}
    },
  };
}
