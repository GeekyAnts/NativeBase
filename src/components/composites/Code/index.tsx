import React from 'react';
import { Platform } from 'react-native';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { ICodeProps } from './types';

const Code = ({ ...props }: ICodeProps) => {
  let { ...newProps } = useThemeProps('Code', props);
  return (
    <Box
      fontFamily={Platform.OS === 'ios' ? 'Courier' : 'monospace'}
      {...newProps}
    />
  );
};

export type { ICodeProps };
export default React.memo(Code);
