import React from 'react';
import { StyleSheet } from 'react-native';
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
import { useThemeProps, useToken } from '../../../hooks';
import styled from 'styled-components/native';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';

import type { IIconProps, IconType } from './props';
import SVGIcon from './SVGIcon';
import {
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

const Icon = (iconProps: IIconProps, ref: any) => {
  const { name, type, size, color: colorProp, ...props } = iconProps;
  const newProps = useThemeProps('Icon', { size, color: colorProp, ...props });
  const rawColor = useToken('colors', newProps.color);
  // TODO: temporary code, remove and replace with something generic
  const marginRight =
    newProps.marginRight || newProps.mr
      ? useToken('space', newProps.marginRight || newProps.mr)
      : undefined;
  if (!name) {
    return <SVGIcon {...iconProps} />;
  }
  const flattenedIconStyle = StyleSheet.flatten([
    {
      fontSize: parseInt(newProps.size, 10),
      marginRight,
    },
  ]);
  switch (type) {
    case 'AntDesign':
      return (
        <AntDesign
          // TODO: remove this
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'Feather':
      return (
        <Feather
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    case 'Zocial':
      return (
        <Zocial
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
    default:
      return (
        <MaterialIcons
          // @ts-ignore
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
          ref={ref}
        />
      );
  }
};

const styledIcon: any = styled(React.forwardRef(Icon))<IIconProps>(
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

export default React.memo(styledIcon);
export {
  G as SvgG,
  Path as SvgPath,
  Circle as SvgCircle,
  Ellipse as SvgEllipse,
  Text as SvgText,
  TSpan as SvgTSpan,
  TextPath as SvgTextPath,
  Polygon as SvgPolygon,
  Polyline as SvgPolyline,
  Line as SvgLine,
  Rect as SvgRect,
  Use as SvgUse,
  Image as SvgImage,
  Symbol as SvgSymbol,
  Defs as SvgDefs,
  LinearGradient as SvgLinearGradient,
  RadialGradient as SvgRadialGradient,
  Stop as SvgStop,
  ClipPath as SvgClipPath,
  Pattern as SvgPattern,
  Mask as SvgMask,
};
export type { IIconProps, IconType };
export { createIcon } from './createIcon';
