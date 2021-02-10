import React from 'react';
import Box from '../../primitives/Box';
import Text from '../../primitives/Text';
import type { IToastProps } from './types';
import { useThemeProps } from '../../../hooks';

const ToastItem = ({ title, offset, _title, ...props }: IToastProps) => {
  let newProps = useThemeProps('Toast', props);

  return (
    <Box ml={offset?.x} mt={offset?.y} {...newProps}>
      <Text {..._title}>{title}</Text>
    </Box>
  );
};

export default React.memo(ToastItem);
