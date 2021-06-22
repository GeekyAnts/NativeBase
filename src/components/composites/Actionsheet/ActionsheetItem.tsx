import React, { memo, forwardRef } from 'react';
import { Button } from '../../primitives/Button';
import type { IActionsheetItemProps } from './types';
import { usePropsResolution } from '../../../hooks';

const ActionsheetItem = (
  { children, startIcon, endIcon, spinner, ...props }: IActionsheetItemProps,
  ref?: any
) => {
  const newProps = usePropsResolution('ActionsheetItem', props);

  return (
    <Button
      startIcon={startIcon}
      endIcon={endIcon}
      spinner={spinner}
      {...newProps}
      ref={ref}
    >
      {children}
    </Button>
  );
};

export default memo(forwardRef(ActionsheetItem));
