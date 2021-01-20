import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { IAlertProps } from './props';
import { AlertContext } from './Context';

const Alert = ({ children, ...props }: IAlertProps) => {
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
        {...newProps}
      >
        {children}
      </Box>
    </AlertContext.Provider>
  );
};

export default React.memo(Alert);
