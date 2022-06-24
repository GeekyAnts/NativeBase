import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { ICenterProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Center = (props: ICenterProps, ref: any) => {
  const resolvedProps = usePropsResolution('Center', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box ref={ref} {...resolvedProps} />;
};

export default memo(forwardRef(Center));
