import React, { memo, forwardRef } from 'react';
import { default as Box, IBoxProps } from '../Box';
import { getAbsoluteChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils/mergeRefs';

export interface IZStackProps extends IBoxProps {
  /**
   * The direction to stack the elements.
   */
  reversed?: boolean;
}

const ZStack = ({ children, reversed, ...props }: IZStackProps, ref?: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const newProps = usePropsResolution('ZStack', props, { isHovered });

  return (
    <Box {...newProps} ref={mergeRefs([ref, _ref])}>
      {getAbsoluteChildren(children, reversed)}
    </Box>
  );
};

export default memo(forwardRef(ZStack));
