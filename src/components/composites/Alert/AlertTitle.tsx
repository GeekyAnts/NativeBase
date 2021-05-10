import React, { forwardRef, memo } from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertTitle = (
  { children, ...props }: { _text?: any } & any,
  ref?: any
) => {
  const newProps = usePropsResolution('AlertTitle', props);
  return (
    <Text {...newProps} ref={ref}>
      {children}
    </Text>
  );
};
export default memo(forwardRef(AlertTitle));
