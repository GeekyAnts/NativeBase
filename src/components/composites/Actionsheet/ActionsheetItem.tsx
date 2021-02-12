import React from 'react';
import Button from '../../primitives/Button';
import type { IActionsheetItemProps } from './types';
import { useThemeProps } from '../../../hooks';

const ActionsheetItem = ({ children, ...props }: IActionsheetItemProps) => {
  const newProps = useThemeProps('ActionsheetItem', props);

  return (
    <Button variant="unstyled" {...newProps}>
      {children}
    </Button>
  );
};

export default React.memo(ActionsheetItem);
