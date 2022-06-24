import React, { memo, forwardRef } from 'react';
import { Platform } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from './../../primitives/Box';
import type { IDividerProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Divider = (props: IDividerProps, ref?: any) => {
  const { orientation, ...resolvedProps } = usePropsResolution(
    'Divider',
    props,
    {},
    { resolveResponsively: ['thickness'] }
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  const orientationProps =
    orientation === 'vertical'
      ? {
          width: `${resolvedProps.thickness}px`, // handle for web : To be discussed
          height: '100%',
        }
      : {
          width: '100%',
          height: `${resolvedProps.thickness}px`,
        };

  return (
    <Box
      {...resolvedProps}
      {...orientationProps}
      ref={ref}
      aria-orientation={orientation}
      //@ts-ignore web only role
      accessibilityRole={Platform.OS === 'web' ? 'separator' : undefined}
    />
  );
};

export default memo(forwardRef(Divider));
