import React, { memo, forwardRef } from 'react';
import { default as Box, IBoxProps } from '../Box';
import type { IInputProps } from './types';
import { useColorModeValue } from '../../../core/color-mode/hooks';

export const InputLeftAddon = memo(
  forwardRef((props: IBoxProps & IInputProps, ref?: any) => {
    const addonsDefaultStyle = {
      p: 3,
      borderColor: useColorModeValue('gray.300', 'gray.600'),
      borderWidth: 1,
    };
    return (
      <Box
        {...addonsDefaultStyle}
        borderRightWidth={0}
        roundedLeft={4}
        bg={useColorModeValue('gray.50', 'gray.700')}
        {...props}
        ref={ref}
      >
        <Box m="auto" _text={props._text || { fontWeight: 600 }}>
          {props.children}
        </Box>
      </Box>
    );
  })
);
export const InputRightAddon = memo(
  forwardRef((props: IBoxProps & IInputProps, ref?: any) => {
    const addonsDefaultStyle = {
      p: 3,
      borderColor: useColorModeValue('gray.300', 'gray.600'),
      borderWidth: 1,
    };
    return (
      <Box
        {...addonsDefaultStyle}
        borderLeftWidth={0}
        roundedRight={4}
        bg={useColorModeValue('gray.50', 'gray.700')}
        {...props}
        ref={ref}
      >
        <Box m="auto" _text={props._text || { fontWeight: 600 }}>
          {props.children}
        </Box>
      </Box>
    );
  })
);
