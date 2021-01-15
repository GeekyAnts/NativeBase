import React from 'react';
import Box from '../../primitives/Box';
import Text from '../../primitives/Text';
import type { IToastProps } from './props';
import { themeTools } from '../../../theme';
import { useThemeProps } from '../../../hooks';

const ToastItem = ({ title, offset, ...props }: IToastProps) => {
  let newProps = useThemeProps('Toast', props);
  const [textProps, wrapperProp] = themeTools.extractInObject(newProps, [
    'color',
    'fontWeight',
    'fontStyle',
    'fontFamily',
    'fontSize',
    'textAlign',
  ]);
  return (
    <Box ml={offset?.x} mt={offset?.y} {...wrapperProp}>
      <Text {...textProps}>{title}</Text>
    </Box>
  );
};

export default ToastItem;
