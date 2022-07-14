import React, { forwardRef, memo } from 'react';
import Box from '../../primitives/Box';
import type { IActionsheetHeaderProps } from './types';
import { usePropsResolution } from '../../../hooks';

const ActionsheetHeader = (props: IActionsheetHeaderProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ActionsheetHeader', props);

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      {...resolvedProps}
      ref={ref}
    />
  );
};

export default memo(forwardRef(ActionsheetHeader));
