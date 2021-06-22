import React from 'react';
import { Platform } from 'react-native';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { ICodeProps } from './types';

const Code = ({ ...props }: ICodeProps, ref?: any) => {
  let { ...newProps } = useThemeProps('Code', props);
  return (
    <Box
      _text={{
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
      }}
      {...newProps}
      ref={ref}
    />
  );
};

export type { ICodeProps };
export default React.memo(React.forwardRef(Code));
