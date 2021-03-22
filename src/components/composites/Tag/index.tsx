import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { ITagProps } from './types';

const Tag = (props: ITagProps, ref: any) => {
  const newProps = useThemeProps('Tag', props);
  return <Box {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Tag));
export type { ITagProps };
