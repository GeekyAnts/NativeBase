import React, { memo, forwardRef } from 'react';
import { Box } from '../../primitives';
import {
  WarningIcon,
  WarningTwoIcon,
  InfoIcon,
  CheckCircleIcon,
} from '../../primitives/Icon/Icons';
import type { IAlertContext } from './index';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { AlertContext } from './Context';
import { omitUndefined } from '../../../theme/tools/utils';

const AlertIcon = ({ children, wrapperRef, ...props }: any, ref?: any) => {
  let newProps = usePropsResolution('AlertIcon', props);
  newProps = omitUndefined(newProps);
  const { status, iconColor }: IAlertContext = React.useContext(AlertContext);
  const getIcon = () => {
    switch (status) {
      case 'error':
        return <WarningTwoIcon color={iconColor} {...newProps} ref={ref} />;
      case 'warning':
        return <WarningIcon color={iconColor} {...newProps} ref={ref} />;
      case 'success':
        return <CheckCircleIcon color={iconColor} {...newProps} ref={ref} />;
      default:
        return <InfoIcon color={iconColor} {...newProps} ref={ref} />;
    }
  };

  // TODO: Refactor this and move alignSelf to Icon component.
  return (
    <Box alignSelf="center" ref={wrapperRef}>
      {children || getIcon()}
    </Box>
  );
};
export default memo(forwardRef(AlertIcon));
