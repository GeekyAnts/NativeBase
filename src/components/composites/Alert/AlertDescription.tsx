import React, { memo, forwardRef } from 'react';
import { Text } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertDescription = (
  { children, ...props }: { _text?: any } & any,
  ref?: any
) => {
  const { _text, ...themeProps } = usePropsResolution(
    'AlertDescription',
    props
  );
  return (
    <Text {...themeProps} {..._text} ref={ref}>
      {children}
    </Text>
  );
};
export default memo(forwardRef(AlertDescription));
