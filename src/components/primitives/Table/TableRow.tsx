import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import HStack from '../../primitives/Stack/HStack';

const TableRow = ({ children, ...props }: any, ref?: any) => {
  const { ...resolvedProps } = usePropsResolution('TableRow', props);
  return (
    <HStack {...resolvedProps} ref={ref}>
      {children}
    </HStack>
  );
};

export default memo(forwardRef(TableRow));
