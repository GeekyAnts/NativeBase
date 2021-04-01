import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { IAlertProps } from './types';
import { AlertContext } from './Context';

const Alert = (
  { children, _text, action, ...props }: IAlertProps,
  ref?: any
) => {
  const {
    status,
    variant,
    iconColor,
    textColor,
    colorScheme,
    ...newProps
  } = useThemeProps('Alert', props);

  return (
    <AlertContext.Provider
      value={{
        status,
        variant,
        iconColor,
        textColor,
        colorScheme,
      }}
    >
      <Box _text={_text} {...newProps} ref={ref}>
        {children}
        {action ? <Box ml="auto">{action}</Box> : null}
      </Box>
    </AlertContext.Provider>
  );
};

export default React.memo(React.forwardRef(Alert));
