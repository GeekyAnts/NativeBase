import React, { memo, forwardRef } from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import type { IIconProps } from './types';
import SVGIcon from './SVGIcon';
import { Factory } from '../../../factory';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Icon = (props: IIconProps, ref?: any) => {
  const { as, size, ...resolvedProps } = usePropsResolution('Icon', props);
  const tokenizedFontSize = useToken('space', size, undefined, {
    component: 'Icon',
    property: 'sizes',
  });

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
      ? (resProps) =>
          React.cloneElement(as, {
            ...resProps,
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
      ref={ref}
    />
  );
};

export default memo(forwardRef(Icon));
