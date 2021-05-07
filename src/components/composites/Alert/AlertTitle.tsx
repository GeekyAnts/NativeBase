import Text, { ITextProps } from '../../primitives/Text';
import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertTitle = ({ children, ...props }: ITextProps, ref?: any) => {
  const newProps = usePropsResolution('AlertTitle', props);
  return (
    <Text {...newProps} ref={ref}>
      {children}
    </Text>
  );
};
export default memo(forwardRef(AlertTitle));
