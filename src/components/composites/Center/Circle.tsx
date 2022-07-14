import React from 'react';
import Box from '../../primitives/Box';
import type { ICircleProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const Circle = (props: ICircleProps, ref: any) => {
  const resolvedProps = usePropsResolution('Circle', props);

  return <Box {...resolvedProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Circle));
