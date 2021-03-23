import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import type { IAlertContext } from './index';
import { AlertContext } from './Context';

const AlertTitle = ({ children, _text, ...props }: { _text?: any } & any) => {
  const newProps = useThemeProps('AlertTitle', props);
  const { textColor }: IAlertContext = React.useContext(AlertContext);
  return (
    <Text color={textColor} {...newProps} {..._text}>
      {children}
    </Text>
  );
};
export default React.memo(AlertTitle);
