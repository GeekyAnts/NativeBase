import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import type { ITabContentsProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const TabContents = ({ children, ...props }: ITabContentsProps, ref?: any) => {
  const { ...resolvedProps } = usePropsResolution('TabContent', props);
  return (
    <Box {...resolvedProps} {...props} ref={ref}>
      {children}
    </Box>
  );
};

export default memo(forwardRef(TabContents));
