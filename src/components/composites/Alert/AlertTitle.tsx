import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import type { IAlertContext } from './index';
import { AlertContext } from './Context';

const AlertTitle = ({ children, ...props }: any) => {
  const newProps = useThemeProps('AlertTitle', props);
  const { textColor }: IAlertContext = React.useContext(AlertContext);
  return (
    <Text mr={2} color={textColor} {...newProps}>
      {children}
    </Text>
  );
};
export default AlertTitle;
