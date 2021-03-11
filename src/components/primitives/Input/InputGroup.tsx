import React from 'react';
import { default as Box, IBoxProps } from '../Box';
import type { IInputProps } from '../Input';
import { getAttachedChildren } from '../../../utils';
import { useColorModeValue } from '../../../core/color-mode/hooks';
import Flex from '../Flex';

export const InputLeftAddon = React.memo((props: IBoxProps & IInputProps) => {
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
    >
      <Box m="auto" _text={props._text || { fontWeight: 600 }}>
        {props.children}
      </Box>
    </Box>
  );
});
export const InputRightAddon = React.memo((props: IBoxProps & IInputProps) => {
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
    >
      <Box m="auto" _text={props._text || { fontWeight: 600 }}>
        {props.children}
      </Box>
    </Box>
  );
});

type InputGroupProps = {
  children: JSX.Element | JSX.Element[];
  variant?: string;
  size?: string;
};

const supplyPropsToChildren = (children: any, props: any) => {
  return React.Children.map(children, (child: JSX.Element) => {
    return React.cloneElement(child, props, child.props.children);
  });
};

export const InputGroup = React.memo(
  React.forwardRef(({ children, ...props }: InputGroupProps, ref: any) => {
    return (
      <Flex direction="row" ref={ref}>
        {supplyPropsToChildren(getAttachedChildren(children), props)}
      </Flex>
    );
  })
);
