import React from 'react';
import { Box, Icon } from '../../primitives';
import type { IAlertContext } from './index';
import { useThemeProps } from '../../../hooks';
import { AlertContext } from './Context';
import { omitUndefined } from '../../../theme/tools/utils';

const AlertIcon = ({ children, ...props }: any) => {
  let newProps = useThemeProps('AlertIcon', props);
  newProps = omitUndefined(newProps);
  const { status, iconColor }: IAlertContext = React.useContext(AlertContext);
  const getIconName = () => {
    switch (status) {
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'success':
        return 'check-circle';
      default:
        return 'info';
    }
  };

  // TODO: Refactor this and move alignSelf to Icon component.
  return (
    <Box alignSelf="center">
      {children || (
        <Icon name={getIconName()} color={iconColor} {...newProps} />
      )}
    </Box>
  );
};
export default React.memo(AlertIcon);
