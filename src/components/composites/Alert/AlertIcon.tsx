import React from 'react';
import { Box, Icon } from '../../primitives';
import type { IAlertContext } from './index';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { AlertContext } from './Context';
import { omitUndefined } from '../../../theme/tools/utils';

const AlertIcon = ({ children, ...props }: any, ref?: any) => {
  let newProps = usePropsResolution('AlertIcon', props);
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
        <Icon name={getIconName()} color={iconColor} {...newProps} ref={ref} />
      )}
    </Box>
  );
};
export default React.memo(React.forwardRef(AlertIcon));
