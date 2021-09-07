import React, { memo, forwardRef } from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { IMenuGroupProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const MenuGroup = (
  { title, children, ...props }: IMenuGroupProps,
  ref: any
) => {
  const { _title, ...newProps } = usePropsResolution('MenuGroup', props);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({ ...props, title })) {
    return null;
  }
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
