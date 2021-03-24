import React from 'react';
import { useThemeProps } from '../../../hooks';
import { default as View } from './../../primitives/View';
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
    <View
      {...orientationProps}
      borderColor={newProps.bg ?? newProps.backgroundColor}
      {...newProps}
      ref={ref}
      aria-orientation={orientation}
      //@ts-ignore web only role
      accessibilityRole="separator"
    />
  );
};

export default React.memo(React.forwardRef(Divider));
export type { IDividerProps };
