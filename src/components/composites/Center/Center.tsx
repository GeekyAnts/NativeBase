import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { ICenterProps } from './types';

const Center = (props: ICenterProps, ref: any) => {
  const resolvedProps = usePropsResolution('Center', props, {});

  return <Box ref={ref} {...resolvedProps} />;
};

export default memo(forwardRef(Center));
