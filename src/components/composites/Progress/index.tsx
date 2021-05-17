import React, { memo, forwardRef } from 'react';
import { Box, IBoxProps } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export interface IProgressProps extends IBoxProps {
  /**
   * Value of Progress.
   * @default 0
   */
  value?: number;
  /**
   * Defines height of Progress
   * @default sm
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string;
  /**
   * The color scheme of the progress. This should be one of the color keys in the theme (e.g."green", "red").
   * @default primary
   */
  colorScheme?: string;
  /**
   * Whether progress is indeterminate
   * @default false
   */
  isIndeterminate?: any;
  /**
   * Min progress value
   * @default 0
   */
  min?: number;
  /**
   * Max progress value
   * @default 100
   */
  max?: number;
}

const Progress = (props: IProgressProps, ref?: any) => {
  // const width = new Animated.Value(0);
  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(width, {
  //       toValue: 270,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     })
  //   ).start();
  // });

  const { min, max, value, isIndeterminate, ...newProps } = usePropsResolution(
    'Progress',
    props
  );
  const { innerBg } = newProps;

  const innerProps = {
    bg: innerBg,
    shadow: 0,
    rounded: newProps.rounded,
    height: '100%',
    w:
      value < max && value > min
        ? ((value - min) / (max - min)) * 100 + '%'
        : value > min
        ? '100%'
        : '0%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  return (
    <Box
      {...newProps}
      style={newProps.style}
      ref={ref}
      accessible
      accessibilityRole="progressbar"
      accessibilityValue={{
        min: min,
        max: max,
        now:
          value < max && value > min
            ? ((value - min) / (max - min)) * 100
            : value > min
            ? 100
            : 0,
      }}
    >
      {isIndeterminate ? (
        // <Animated.View
        //   style={[
        //     {
        //       transform: [
        //         {
        //           translateX: width,
        //         },
        //       ],
        //     },
        //   ]}
        // >
        // </Animated.View>
        <Box {...innerProps} children={newProps.children} />
      ) : (
        <Box {...innerProps} children={newProps.children} />
      )}
    </Box>
  );
};

export default memo(forwardRef(Progress));
