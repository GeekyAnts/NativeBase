import React, { memo, forwardRef } from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import { Svg, G } from './nbSvg';
import type { IIconProps } from './types';
import { questionOutlineIconPath } from './Icons/questionIconPath';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';

const SVG = makeStyledComponent(Svg);

const SVGIcon = (
  { INTERNAL_themeStyle, children, ...props }: IIconProps,
  ref: any
) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps } = getThemeProps(
    'Icon',
    colorMode,
    {},
    props
  );

  const {
    focusable,
    stroke,
    color,
    ...resolvedProps
  } = usePropsResolution('Icon', { ...unResolvedProps, ...props });

  // console.log('style here 11', size, resolvedProps);

  // console.log('hello icon render', props);

  const strokeHex = useToken('colors', stroke || '');
  const colorHex = useToken('colors', color || '');

  console.log('resolvedProps ***', color);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <SVG
      {...resolvedProps}
      // height={
      //   newProps.size
      //     ? parseInt(newProps.size, 10)
      //     : parseInt(newProps.height, 10)
      // }
      // width={
      //   newProps.size
      //     ? parseInt(newProps.size, 10)
      //     : parseInt(newProps.width, 10)
      // }
      color={colorHex}
      stroke={strokeHex}
      focusable={focusable}
      accessibilityRole="image"
      // size={20}
      // style={style}
      INTERNAL_themeStyle={[style, INTERNAL_themeStyle]}
      ref={ref}
    >
      {React.Children.count(children) > 0 ? (
        <G>
          {React.Children.map(children, (child, i) => (
            <ChildPath
              key={child?.key ?? i}
              element={child}
              {...child?.props}
            />
          ))}
        </G>
      ) : (
        questionOutlineIconPath
      )}
    </SVG>
  );
};
const ChildPath = ({ element, fill, stroke: pathStroke }: any) => {
  const pathStrokeColor = useToken('colors', pathStroke || '');
  const fillColor = useToken('colors', fill || '');

  if (!element) {
    return null;
  }

  return React.cloneElement(element, {
    fill: fillColor ? fillColor : 'currentColor',
    stroke: pathStrokeColor,
  });
};
export default memo(forwardRef(SVGIcon));
