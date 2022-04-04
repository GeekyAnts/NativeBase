import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { IInputComponentType, ITagProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Tag = ({ style, ...props }: ITagProps, ref: any) => {
  let resolvedProps = useThemeProps('Tag', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box style={style} {...resolvedProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Tag)) as IInputComponentType;
export type { ITagProps };
