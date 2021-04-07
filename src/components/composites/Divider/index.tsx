import React from 'react';
import { Platform } from 'react-native';
import { useThemeProps } from '../../../hooks';
import Box from './../../primitives/Box';
import type { IDividerProps } from './types';

const Divider = (props: IDividerProps, ref?: any) => {
  const { orientation, ...newProps } = useThemeProps('Divider', props);
  const orientationProps =
    orientation === 'vertical'
      ? {
          width: 0,
          height: '100%',
        }
      : {
          width: '100%',
          height: 0,
        };
  return (
    <Box
      {...orientationProps}
      borderColor={newProps.bg ?? newProps.backgroundColor}
      {...newProps}
      ref={ref}
      aria-orientation={orientation}
      //@ts-ignore web only role
      accessibilityRole={Platform.OS === 'web' ? 'separator' : undefined}
    />
  );
};

export default React.memo(React.forwardRef(Divider));
export type { IDividerProps };
