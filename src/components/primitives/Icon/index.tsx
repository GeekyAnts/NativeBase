import React from 'react';
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
import styled from 'styled-components/native';
import { useThemeProps } from '../../../hooks';
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

function getStyleIconComponent(type: IconType) {
  return styled(componentMap[type])<IIconProps>(
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
}

const Icon = ({ type, name, ...props }: IIconProps, ref?: any) => {
  const newProps = useThemeProps('Icon', props);
  if (!name) {
    return <SVGIcon {...props} />;
  }
  const Component = getStyleIconComponent(type ?? 'MaterialIcons');
  return <Component name={name} {...newProps} ref={ref} />;
};

export type { IIconProps, IconType, IconNameType };
export { createIcon } from './createIcon';
export default React.memo(React.forwardRef(Icon));
