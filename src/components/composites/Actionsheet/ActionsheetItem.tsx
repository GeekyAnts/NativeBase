import React from 'react';
import Button from '../../primitives/Button';
import type { IActionsheetItemProps } from './types';
import { useThemeProps } from '../../../hooks';

const ActionsheetItem = (
  { children, startIcon, endIcon, spinner, ...props }: IActionsheetItemProps,
  ref?: any
) => {
  const newProps = useThemeProps('ActionsheetItem', props);

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

export default React.memo(React.forwardRef(ActionsheetItem));
