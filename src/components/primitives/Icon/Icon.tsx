import React, { memo, forwardRef } from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import type { IIconProps } from './types';
import SVGIcon from './SVGIcon';
import { Factory } from '../../../factory';

const Icon = (props: IIconProps, ref?: any) => {
  const { as, size, ...resolvedProps } = usePropsResolution('Icon', props);
  const tokenizedFontSize = useToken('space', size || resolvedProps.boxSize);

  if (!as) {
    return <SVGIcon size={size} {...resolvedProps} ref={ref} />;
  }

  const isJSX = React.isValidElement(as);
  // console.log('as', isJSX);

  const StyledAs = Factory(
    isJSX
      ? (resolvedProps) =>
          React.cloneElement(as, {
            ...resolvedProps,
            //@ts-ignore
            ...as.props,
          })
      : as,
    {
      defaultProps: {
        p: 100,
        bg: 'red.400',
      },
    }
  );
  // console.log(as, 'as');
  // console.log(StyledAs, 'StyledAs');

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
