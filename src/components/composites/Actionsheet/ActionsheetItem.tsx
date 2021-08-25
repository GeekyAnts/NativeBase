import React, { memo, forwardRef } from 'react';
import { Button } from '../../primitives/Button';
import type { IActionsheetItemProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ActionsheetItem = (
  { children, startIcon, endIcon, spinner, ...props }: IActionsheetItemProps,
  ref?: any
) => {
  const newProps = usePropsResolution('ActionsheetItem', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
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
