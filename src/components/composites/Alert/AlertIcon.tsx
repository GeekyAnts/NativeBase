import React from 'react';
import { Box, Icon } from '../../primitives';
import type { IAlertContext } from './index';
import { AlertContext } from './Context';
import { omitUndefined } from '../../../theme/tools/utils';

const AlertIcon = ({ children, ...props }: any) => {
  const newProps = omitUndefined(props);
  const { status, iconColor }: IAlertContext = React.useContext(AlertContext);
  const iconNameSetter = () => {
    switch (status) {
      case 'error':
        return 'close';
      case 'warning':
        return 'exclamation-thick';
      case 'success':
        return 'check';
      default:
        return 'information-variant';
    }
  };

  return (
    <Box alignSelf="center">
      {children || (
        <Icon
          name={iconNameSetter()}
          type="MaterialCommunityIcons"
          size={8}
          mr={2}
          color={iconColor}
          {...newProps}
        />
      )}
    </Box>
  );
};
export default AlertIcon;
