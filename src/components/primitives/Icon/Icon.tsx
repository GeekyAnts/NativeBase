import React from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import type { IIconProps } from './types';
import SVGIcon from './SVGIcon';
import Box from '../Box';

const Icon = ({ as, ...props }: IIconProps, ref?: any) => {
  const { size, color, ...resolvedProps } = usePropsResolution('Icon', props);
  const hexColor = useToken('colors', color || '');
  const themeSize = parseInt(useToken('space', size || ''), 10);
  if (!as) {
    return <SVGIcon {...props} ref={ref} />;
  }

  const asWithProps = React.cloneElement(as, {
    ...as.props,
    color: hexColor,
    size: themeSize,
  });

  return <Box {...resolvedProps}>{asWithProps}</Box>;
};

export default React.memo(React.forwardRef(Icon));
