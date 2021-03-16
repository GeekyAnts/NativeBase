import React from 'react';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { ICodeProps } from './types';

const Code = ({ ...props }: ICodeProps) => {
  let { ...newProps } = useThemeProps('Code', props);

  return <Box {...newProps} />;
};

export type { ICodeProps };
export default React.memo(Code);
