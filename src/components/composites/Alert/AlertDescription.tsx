import React from 'react';
import { Text } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { IAlertContext } from './index';
import { AlertContext } from './Context';

const AlertDescription = (
  { children, _text, ...props }: { _text?: any } & any,
  ref?: any
) => {
  const newProps = useThemeProps('AlertDescription', props);
  const { textColor }: IAlertContext = React.useContext(AlertContext);
  return (
    <Text color={textColor} {...newProps} {..._text} ref={ref}>
      {children}
    </Text>
  );
};
export default React.memo(React.forwardRef(AlertDescription));
