import React, { memo, forwardRef } from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import type { IIconProps } from './types';
import SVGIcon from './SVGIcon';
import { Factory } from '../../../factory';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Icon = (props: IIconProps, ref?: any) => {
  const { as, size, ...resolvedProps } = usePropsResolution('Icon', props);
  const tokenizedFontSize = useToken('space', size);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  if (!as) {
    return <SVGIcon size={size} {...resolvedProps} ref={ref} />;
  }
  const isJSX = React.isValidElement(as);
  const StyledAs = Factory(
    isJSX
      ? (resolvedProps) =>
          React.cloneElement(as, {
            ...resolvedProps,
            //@ts-ignore
            ...as.props,
          })
      : as
  );

  return (
    <StyledAs
      {...resolvedProps}
      fontSize={tokenizedFontSize}
      lineHeight={tokenizedFontSize}
      size={size}
      ref={ref}
    />
  );
};

export default memo(forwardRef(Icon));
