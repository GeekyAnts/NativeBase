import React, { memo, forwardRef } from 'react';
import { default as Box, IBoxProps } from '../Box';
import { getAbsoluteChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export interface IZStackProps extends IBoxProps {
  /**
   * The direction to stack the elements.
   */
  reversed?: boolean;
}

const ZStack = ({ children, reversed, ...props }: IZStackProps, ref?: any) => {
  const newProps = usePropsResolution('ZStack', props);
  return (
    <Box {...newProps} ref={ref}>
      {getAbsoluteChildren(children, reversed)}
    </Box>
  );
};

export default memo(forwardRef(ZStack));
