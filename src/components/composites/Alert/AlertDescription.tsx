import React, { memo, forwardRef } from 'react';
import Text, { ITextProps } from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertDescription = ({ children, ...props }: ITextProps, ref?: any) => {
  const newProps = usePropsResolution('AlertDescription', props);
  return (
    <Text {...newProps} ref={ref}>
      {children}
    </Text>
  );
};
export default memo(forwardRef(AlertDescription));
