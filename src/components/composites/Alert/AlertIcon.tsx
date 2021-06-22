import React, { memo, forwardRef } from 'react';
import { Box } from '../../primitives';
import {
  WarningIcon,
  WarningTwoIcon,
  InfoIcon,
  CheckCircleIcon,
} from '../../primitives/Icon/Icons';
import type { IAlertContext, IAlertIconProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { AlertContext } from './Context';
import { omitUndefined } from '../../../theme/tools/utils';

const AlertIcon = (
  { children, wrapperRef, ...props }: IAlertIconProps,
  ref?: any
) => {
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

  return <Box ref={wrapperRef}>{children || getIcon()}</Box>;
};
export default memo(forwardRef(AlertIcon));
