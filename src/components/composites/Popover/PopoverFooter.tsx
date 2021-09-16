import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PopoverFooter = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('PopoverFooter', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(PopoverFooter));
