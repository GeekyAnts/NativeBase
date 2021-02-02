import React from 'react';
import { Box, Icon } from '../../primitives';
import type { IAlertContext } from './index';
import { AlertContext } from './Context';
import { omitUndefined } from '../../../theme/tools/utils';

const AlertIcon = ({ children, ...props }: any) => {
  const newProps = omitUndefined(props);
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
        <Icon
          name={getIconName()}
          type="MaterialIcons"
          size={8}
          mr={4}
          color={iconColor}
          {...newProps}
        />
      )}
    </Box>
  );
};
export default React.memo(AlertIcon);
