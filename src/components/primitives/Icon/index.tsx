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

const componentMap = {
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
};

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

  const Component = type ? componentMap[type] : MaterialIcons;
  return (
    <Component
      name={name}
      {...props}
      style={flattenedIconStyle}
      color={rawColor}
      ref={ref}
    />
  );
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
