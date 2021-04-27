import React from 'react';
import { Text } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertDescription = (
  { children, _text, ...props }: { _text?: any } & any,
  ref?: any
) => {
  const newProps = usePropsResolution('AlertDescription', props);
  return (
    <Text {...newProps} {..._text} ref={ref}>
      {children}
    </Text>
  );
};
export default React.memo(React.forwardRef(AlertDescription));
