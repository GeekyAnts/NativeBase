import React, { memo, forwardRef } from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { IMenuGroupProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const MenuGroup = ({ title, children }: IMenuGroupProps, ref: any) => {
  const { _title, ...resolvedProps } = usePropsResolution('MenuGroup', {});

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({ ...resolvedProps, title })) {
    return null;
  }
  return (
    <>
      <Box {...resolvedProps} ref={ref}>
        <Text {..._title}>{title}</Text>
      </Box>
      {children}
    </>
  );
};

export default memo(forwardRef(MenuGroup));
