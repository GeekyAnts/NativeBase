import React from 'react';
import Box from '../../primitives/Box';
import type { IActionsheetHeaderProps } from './types';
import { omitUndefined } from '../../../theme/tools/utils';

const ActionsheetHeader = ({ children, ...props }: IActionsheetHeaderProps) => {
  const newProps = omitUndefined(props);
  return (
    <Box
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      fontSize="md"
      color="gray.900"
      {...newProps}
    >
      {children}
    </Box>
  );
};

export default React.memo(ActionsheetHeader);
