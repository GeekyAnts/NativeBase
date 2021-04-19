import React from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertTitle = (
  { children, _text, ...props }: { _text?: any } & any,
  ref?: any
) => {
  const newProps = usePropsResolution('AlertTitle', props);
  return (
    <Text {...newProps} {..._text} ref={ref}>
      {children}
    </Text>
  );
};
export default React.memo(React.forwardRef(AlertTitle));
