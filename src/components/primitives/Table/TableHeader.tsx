import React, { memo, forwardRef } from 'react';
import HStack from '../../primitives/Stack/HStack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ITableHeaderProps } from './types';

const TableHeader = ({ children, ...props }: ITableHeaderProps, ref?: any) => {
  const { ...resolvedProps } = usePropsResolution('TableRow', props);
  return (
    <HStack {...resolvedProps} ref={ref}>
      {children}
    </HStack>
  );
};

export default memo(forwardRef(TableHeader));
