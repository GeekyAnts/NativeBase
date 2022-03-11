import React from 'react';
import Box from '../../primitives/Box';
import type { ICircleProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Circle = (props: ICircleProps, ref: any) => {
  const resolvedProps = usePropsResolution('Circle', props);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box {...resolvedProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Circle));
