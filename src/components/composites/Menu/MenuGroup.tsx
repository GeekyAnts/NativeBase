import React from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { IMenuGroupProps } from './types';

export const MenuGroup = React.memo(
  React.forwardRef(function MenuGroup(
    { title, children }: IMenuGroupProps,
    ref: any
  ) {
    const { _title, ...newProps } = usePropsResolution('MenuGroup', {});

    return (
      <>
        <Box {...newProps} ref={ref}>
          <Text {..._title}>{title}</Text>
        </Box>
        {children}
      </>
    );
  })
);
