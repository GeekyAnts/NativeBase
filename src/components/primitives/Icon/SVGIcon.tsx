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
  { children, INTERNAL_themeStyle, ...props }: IIconProps,
  ref: any
) => {
  const { colorMode } = useColorMode();
  const {
    style,
    unResolvedProps,
    styleFromProps,
    restDefaultProps,
  } = getThemeProps('Icon', colorMode, {}, props);
  // return null;

  // let tokenizedFontSize = props.styleFromProps
  // ? props.styleFromProps.width
  // : styleFromProps.width;
  // return 'hello';

  const { focusable, stroke, color, size, ...resolvedProps } = {
    ...restDefaultProps,
    ...usePropsResolution('Icon', { ...unResolvedProps, ...props }),
  };

  // const iconStyleFromProps = { ...styleFromProps, ...props.styleFromProps };

  const strokeHex = useToken('colors', stroke || '');
  const colorHex = useToken('colors', color || '');

  console.log('resolvedProps ***', strokeHex, color);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  // return null;

  return (
    <SVG
      {...resolvedProps}
      // viewBox="0 0 24 24"
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
      stroke={strokeHex || colorHex}
      focusable={focusable}
      accessibilityRole="image"
      // size={4}
      // style={style}
      boxSize={size}
      // width={16}
      // height={16}
      // INTERNAL_themeStyle={[style, INTERNAL_themeStyle]}
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
