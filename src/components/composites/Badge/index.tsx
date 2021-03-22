import React from 'react';
import Box from '../../primitives/Box';
import type { IBadgeProps } from './types';
import { useThemeProps } from '../../../hooks';

const Badge = (props: IBadgeProps, ref: any) => {
  let newProps = useThemeProps('Badge', props);
  return <Box {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Badge));
export type { IBadgeProps };
