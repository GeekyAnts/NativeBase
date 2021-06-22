import React, { memo, forwardRef } from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { IMenuGroupProps } from './types';

const MenuGroup = ({ title, children }: IMenuGroupProps, ref: any) => {
  const { _title, ...newProps } = usePropsResolution('MenuGroup', {});

  return (
    <>
      <Box {...newProps} ref={ref}>
        <Text {..._title}>{title}</Text>
      </Box>
      {children}
    </>
  );
};

export default memo(forwardRef(MenuGroup));
