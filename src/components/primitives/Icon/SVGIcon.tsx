import React from 'react';
import { useToken, usePropsResolution } from '../../../hooks';
import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  position,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
  customPosition,
} from '../../../utils/customProps';
import {
  Svg,
  Path,
  G,
  Circle,
  Ellipse,
  Text,
  TSpan,
  TextPath,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import type { IIconProps } from './types';
import { QuestionOutlineIcon } from './Icons';
const VALID_SVG_COMPONENTS: any = {
  G,
  Path,
  Circle,
  Ellipse,
  Text,
  TSpan,
  TextPath,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
};
const SVG = styled(Svg)<IIconProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
);

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
          {React.Children.map(children, ({ props: childProps, type }: any) =>
            type &&
            type.name &&
            Object.keys(VALID_SVG_COMPONENTS).includes(type.name) ? (
              <ChildPath {...childProps} tabIndex={-1} type={type.name} />
            ) : null
          )}
        </G>
      ) : (
        <QuestionOutlineIcon tabIndex={-1} />
      )}
    </SVG>
  );
};
const ChildPath = ({
  type,
  fill,
  stroke: pathStroke,
  ...remainingProps
}: any) => {
  const Component = VALID_SVG_COMPONENTS[type];
  const pathStrokeColor = useToken('colors', pathStroke || '');
  const fillColor = useToken('colors', fill || '');

  if (!Component) {
    return null;
  }
  return (
    <Component
      {...remainingProps}
      fill={fillColor ? fillColor : 'currentColor'}
      stroke={pathStrokeColor}
    />
  );
};
export default React.memo(React.forwardRef(SVGIcon));
