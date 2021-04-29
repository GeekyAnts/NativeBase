import React from 'react';
import { default as Box, IBoxProps } from '../Box';
import type { IInputProps } from '../Input';
import { getAttachedChildren } from '../../../utils';
import { useColorModeValue } from '../../../core/color-mode/hooks';
import Flex from '../Flex';
import { themeTools } from '../../../theme';

export const InputLeftAddon = React.memo(
  React.forwardRef((props: IBoxProps & IInputProps, ref?: any) => {
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
export const InputRightAddon = React.memo(
  React.forwardRef((props: IBoxProps & IInputProps, ref?: any) => {
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

type InputGroupProps = IBoxProps & {
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
    let [layoutProps, remProps] = themeTools.extractInObject(props, [
      'w',
      'width',
      'm',
      'mr',
      'ml',
      'mt',
      'mb',
      'mx',
      'my',
    ]);

    return (
      <Flex direction="row" {...layoutProps} ref={ref}>
        {supplyPropsToChildren(getAttachedChildren(children), remProps)}
      </Flex>
    );
  })
);
