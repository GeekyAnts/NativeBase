import React from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import type { IIconProps } from './types';
import SVGIcon from './SVGIcon';

const Icon = ({ as, ...props }: IIconProps, ref?: any) => {
  const { size, color, ...resolvedProps } = usePropsResolution('Icon', props);
  const hexColor = useToken('colors', color || '');
  const themeSize = useToken('space', size || '');
  if (!as) {
    return <SVGIcon {...props} ref={ref} />;
  }

  const asWithProps = React.cloneElement(as, {
    ...as.props,
    ...resolvedProps,
    color: hexColor,
    size: themeSize,
  });
  return asWithProps;
};

export default React.memo(React.forwardRef(Icon));
