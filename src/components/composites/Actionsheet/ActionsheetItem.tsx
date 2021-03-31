import React from 'react';
import Button from '../../primitives/Button';
import type { IActionsheetItemProps } from './types';
import { useThemeProps } from '../../../hooks';

const ActionsheetItem = ({
  children,
  startIcon,
  endIcon,
  spinner,
  ...props
}: IActionsheetItemProps) => {
  const newProps = useThemeProps('ActionsheetItem', props);

  return (
    <Button
      startIcon={startIcon}
      endIcon={endIcon}
      spinner={spinner}
      {...newProps}
    >
      {children}
    </Button>
  );
};

export default React.memo(ActionsheetItem);
