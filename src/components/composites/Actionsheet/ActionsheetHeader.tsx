import React from 'react';
import Box from '../../primitives/Box';
import type { IActionsheetHeaderProps } from './props';
import { omitUndefined } from '../../../theme/tools/utils';

const ActionsheetHeader = ({ children, ...props }: IActionsheetHeaderProps) => {
  const newProps = omitUndefined(props);
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      fontSize="md"
      color="muted.200"
      {...newProps}
    >
      {children}
    </Box>
  );
};

export default React.memo(ActionsheetHeader);
