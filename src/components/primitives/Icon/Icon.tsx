import React, { memo, forwardRef } from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import type { IIconProps } from './types';
import SVGIcon from './SVGIcon';
import { Factory } from '../../../factory';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { getThemeProps } from '../../../core';

import { useColorMode } from '../../../core/color-mode';

const Icon = ({ as, ...props }: IIconProps, ref?: any) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps, styleFromProps } = getThemeProps(
    'Icon',
    colorMode,
    {},
    props
  );

  const { size, ...resolvedProps } = usePropsResolution('Icon', props);

  //TODO: hack - refactor
  let tokenizedFontSize = props.styleFromProps
    ? props.styleFromProps.width
    : styleFromProps.width;

  // let tokenizedFontSize = useToken('space', size);
  // if (size) {
  // }

  // console.log(tokenizedFontSize, 'hello &&&&');
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
      // size={size}
      // style={{ width: 16, height: 16 }}
      // fontSize={16}
      // lineHeight={16}
      ref={ref}
    />
  );
};

export default memo(forwardRef(Icon));
