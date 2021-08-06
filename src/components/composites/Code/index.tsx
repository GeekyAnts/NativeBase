import React from 'react';
import { Platform } from 'react-native';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { ICodeProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Code = ({ ...props }: ICodeProps, ref?: any) => {
  let { ...newProps } = useThemeProps('Code', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
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
