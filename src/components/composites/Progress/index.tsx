import React from 'react';
import type { ViewStyle } from 'react-native';
import { Box, IBoxProps } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';

type SpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type IProgressProps = IBoxProps & {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[] | string;
  value?: number;
  size?: SpaceType | string;
  colorScheme?: string;
  isIndeterminate?: any;
  min?: number;
  max?: number;
};

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

export default React.memo(React.forwardRef(Progress));
