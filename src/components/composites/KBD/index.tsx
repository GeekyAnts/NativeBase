import React from 'react';
import { Platform } from 'react-native';
import { Box, Text } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { IKbdProps } from './types';

const Kbd = ({ children, ...props }: IKbdProps, ref?: any) => {
  let { _text, ...newProps } = useThemeProps('Kbd', props);
  return (
    <Box {...newProps} ref={ref}>
      <Text
        {..._text}
        fontFamily={
          _text?.fontFamily
            ? _text?.fontFamily
            : Platform.OS === 'ios'
            ? 'Courier'
            : 'monospace'
        }
      >
        {children}
      </Text>
    </Box>
  );
};

export default React.memo(React.forwardRef(Kbd));
export type { IKbdProps };
