import React from 'react';
import Button from '../../primitives/Button';
import type { IActionsheetItemProps } from './props';
import { omitUndefined } from '../../../theme/tools/utils';

const ActionsheetItem = ({ children, ...props }: IActionsheetItemProps) => {
  const newProps = omitUndefined(props);
  return (
    <Button bg="transparent" {...newProps}>
      {children}
    </Button>
  );
};

export default React.memo(ActionsheetItem);
