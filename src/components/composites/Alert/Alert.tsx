import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { IAlertProps } from './types';
import { AlertContext } from './Context';

const Alert = (
  { children, _text, action, ...props }: IAlertProps,
  ref: any
) => {
  const { status, variant, iconColor, textColor, ...newProps } = useThemeProps(
    'Alert',
    props
  );

  return (
    <AlertContext.Provider
      value={{
        status,
        variant,
        iconColor,
        textColor,
      }}
    >
      <Box
        minW="100%"
        maxW="100%"
        position="relative"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        flexWrap="wrap"
        _text={_text}
        {...newProps}
        ref={ref}
      >
        {children}
        {action ? <Box mr={0}>{action}</Box> : null}
      </Box>
    </AlertContext.Provider>
  );
};

export default React.memo(React.forwardRef(Alert));
