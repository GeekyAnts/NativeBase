import React, { memo, forwardRef } from 'react';
import { default as Box, IBoxProps } from '../Box';
import { getAbsoluteChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export interface IZStackProps extends IBoxProps<IZStackProps> {
  /**
   * The direction to stack the elements.
   */
  reversed?: boolean;
}

const ZStack = ({ children, reversed, ...props }: IZStackProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ZStack', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box {...resolvedProps} ref={ref}>
      {getAbsoluteChildren(children, reversed)}
    </Box>
  );
};

export default memo(forwardRef(ZStack));
