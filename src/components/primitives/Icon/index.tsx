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
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import type { IIconProps, IconType, IconNameType } from './types';
import SVGIcon from './SVGIcon';

const Icon = (iconProps: IIconProps, ref: any) => {
  const { name, type, size, color: colorProp, ...props } = iconProps;
  const newProps = useThemeProps('Icon', { size, color: colorProp, ...props });
  const rawColor = useToken('colors', newProps.color);
  // FIXME: temporary code, remove and replace with something generic
  const marginRight = useToken('space', newProps.marginRight || newProps.mr);
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
    case 'Fontisto':
      return (
        <Fontisto
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

export default styled(React.memo(React.forwardRef(Icon)))<IIconProps>(
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
export type { IIconProps, IconType, IconNameType };
export { createIcon } from './createIcon';
