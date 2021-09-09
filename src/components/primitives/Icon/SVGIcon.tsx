import React, { memo, forwardRef } from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import { Svg, G } from './nbSvg';
import type { IIconProps } from './types';
import { questionOutlineIconPath } from './Icons/questionIconPath';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const SVG = makeStyledComponent(Svg);

const SVGIcon = ({ children, ...props }: IIconProps, ref: any) => {
  const {
    focusable,
    stroke,
    color,
    size,
    ...resolvedProps
  } = usePropsResolution('Icon', props);
  const strokeHex = useToken('colors', stroke || '');
  const colorHex = useToken('colors', color || '');
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
      size={size}
      color={colorHex}
      stroke={strokeHex}
      focusable={focusable}
      accessibilityRole="image"
      // style={style}
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
