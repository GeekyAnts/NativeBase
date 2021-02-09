import React from 'react';
import { Platform } from 'react-native';
import { Box, Text } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { IKbdProps } from './types';

const Kbd = ({ style, textStyle, children, ...props }: IKbdProps) => {
  let newProps = useThemeProps('Kbd', props);
  let { fontWeight, fontSize, lineHeight, ...viewProps } = newProps;
  const textProps = { fontWeight, fontSize, lineHeight };
  return (
    <Box {...viewProps} style={style}>
      <Text
        {...textProps}
        fontFamily={
          newProps.fontFamily
            ? newProps.fontFamily
            : Platform.OS === 'ios'
            ? 'Courier'
            : 'monospace'
        }
        style={textStyle}
      >
        {children}
      </Text>
    </Box>
  );
};

export default React.memo(Kbd);
export type { IKbdProps };
