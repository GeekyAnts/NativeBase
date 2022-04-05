import React, { memo, forwardRef } from 'react';
import { default as Box, InterfaceBoxProps } from '../Box';
import { getAbsoluteChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { CustomProps } from '../../../components/types';

export interface InterfaceZStackProps extends InterfaceBoxProps<IZStackProps> {
  /**
   * The direction to stack the elements.
   */
  reversed?: boolean;
}

export type IZStackProps = InterfaceZStackProps & CustomProps<'ZStack'>;
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
