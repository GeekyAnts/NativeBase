import React, { memo, forwardRef } from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/makeStyledComponent';
import { Svg, G } from './nbSvg';
import type { IIconProps } from './types';
import { questionOutlineIconPath } from './Icons/questionIconPath';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';
import { Platform } from 'react-native';
import { useNativeBase } from '../../../hooks';

const SVG = makeStyledComponent(Svg);

const SVGIcon = (
  { children, ...props }: IIconProps & { styleFromProps?: any },
  ref: any
) => {
  const { colorMode } = useColorMode();
  const { theme } = useNativeBase();

  const { styleFromProps } = getThemeProps(
    theme,
    'Icon',
    { colorMode, platform: Platform.OS },
    {},
    props
  );
  // return null;

  // let tokenizedFontSize = props.styleFromProps
  // ? props.styleFromProps.width
  // : styleFromProps.width;
  // return 'hello';

  const {
    focusable,
    stroke,
    color,
    // size,
    ...resolvedProps
  } = usePropsResolution('Icon', props);

  const iconStyleFromProps = { ...styleFromProps, ...props.styleFromProps };

  const strokeHex = useToken('colors', stroke || '');
  const colorHex = useToken('colors', color || '');

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
      color={colorHex || iconStyleFromProps.color}
      stroke={strokeHex || ''}
      focusable={focusable}
      accessibilityRole="image"
      // size={size}
      // style={style}
      // TODO: Hack refactor
      // boxSize={size}
      // width={16}
      // height={16}
      // INTERNAL_themeStyle={[style, INTERNAL_themeStyle]}
      ref={ref}
      // overflow="visible"
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
