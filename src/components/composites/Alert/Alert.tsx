import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
// import { HStack } from '../../primitives/Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAlertProps } from './types';
import { AlertContext } from './Context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Alert = ({ children, ...props }: IAlertProps, ref?: any) => {
  const {
    status,
    variant,
    _icon,
    colorScheme,
    ...newProps
  } = usePropsResolution('Alert', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <AlertContext.Provider
      value={{
        status,
        variant,
        _icon,
        colorScheme,
      }}
    >
      <Box {...newProps} ref={ref}>
        {children}
      </Box>
    </AlertContext.Provider>
  );
};

export default memo(forwardRef(Alert));
