import React from 'react';
import { useThemeProps } from '../../../hooks';
import { default as View } from './../../primitives/View';
import type { IDividerProps } from './types';

const Divider = (
  { style, orientation, ...props }: IDividerProps,
  ref?: any
) => {
  let orientationProps =
    orientation === 'vertical'
      ? {
          width: 0,
          height: '100%',
        }
      : {
          width: '100%',
          height: 0,
        };
  let newProps = useThemeProps('Divider', props);

  return (
    <View
      {...orientationProps}
      borderColor={newProps.bg ?? newProps.backgroundColor}
      {...newProps}
      style={style}
      ref={ref}
    />
  );
};

export default React.memo(React.forwardRef(Divider));
export type { IDividerProps };
