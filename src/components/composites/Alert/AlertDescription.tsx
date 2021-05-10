import React, { memo, forwardRef } from 'react';
import { ITextProps, Text } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertDescription = ({ children, ...props }: ITextProps, ref?: any) => {
  const themeProps = usePropsResolution('AlertDescription', props);
  return (
    <Text {...themeProps} ref={ref}>
      {children}
    </Text>
  );
};
export default memo(forwardRef(AlertDescription));
