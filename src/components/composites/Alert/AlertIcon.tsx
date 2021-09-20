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
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AlertIcon = ({ children, ...props }: IAlertIconProps, ref?: any) => {
  let newProps = usePropsResolution('AlertIcon', props);
  newProps = omitUndefined(newProps);
  const { status, _icon }: IAlertContext = React.useContext(AlertContext);
  const getIcon = () => {
    switch (status) {
      case 'error':
        return <WarningTwoIcon {..._icon} {...newProps} ref={ref} />;
      case 'warning':
        return <WarningIcon {..._icon} {...newProps} ref={ref} />;
      case 'success':
        return <CheckCircleIcon {..._icon} {...newProps} ref={ref} />;
      default:
        return <InfoIcon {..._icon} {...newProps} ref={ref} />;
    }
  };
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box>{children || getIcon()}</Box>;
};
export default memo(forwardRef(AlertIcon));
