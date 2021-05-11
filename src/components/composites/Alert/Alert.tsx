import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { HStack } from '../../primitives/Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAlertProps } from './types';
import { AlertContext } from './Context';

const Alert = ({ children, action, ...props }: IAlertProps, ref?: any) => {
  const {
    status,
    variant,
    iconColor,
    colorScheme,
    _text,
    _actionProps,
    ...newProps
  } = usePropsResolution('Alert', props);

  return (
    <AlertContext.Provider
      value={{
        status,
        variant,
        iconColor,
        colorScheme,
      }}
    >
      <HStack _text={_text} {...newProps} ref={ref}>
        {children}
        {action ? <Box {..._actionProps}>{action}</Box> : null}
      </HStack>
    </AlertContext.Provider>
  );
};

export default memo(forwardRef(Alert));
