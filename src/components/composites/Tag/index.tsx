import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { ITagProps } from './types';

const Tag = ({ style, ...props }: ITagProps, ref: any) => {
  let newProps = useThemeProps('Tag', props);
  return <Box style={style} {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Tag));
export type { ITagProps };
