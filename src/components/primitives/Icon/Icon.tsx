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
import { usePropsResolution } from '../../../hooks/useThemeProps';
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
import type { IIconProps, IconType } from './types';
import SVGIcon from './SVGIcon';
import Text from '../Text';

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

let memoizedStyledIcons: any = {};
function getStyledIconComponent(type: IconType) {
  if (!memoizedStyledIcons[type]) {
    memoizedStyledIcons[type] = styled(componentMap[type])<IIconProps>(
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
  return memoizedStyledIcons[type];
}

const Icon = ({ as, ...props }: IIconProps, ref?: any) => {
  const { size, ...resolvedProps } = usePropsResolution('Icon', props);
  if (!as) {
    return <SVGIcon {...resolvedProps} size={size} ref={ref} />;
  }

  console.log(
    '%c MYLOG: Icon-resolvedProps',
    'background: #374151; color: #FBBF24; font-weight: 700; padding: 2px 8px;',
    resolvedProps
  );

  return (
    <Text fontSize={size} {...resolvedProps}>
      {as}
    </Text>
  );
  // const Component = getStyledIconComponent(type ?? 'MaterialIcons');
  // return (
  //   <Component
  //     name={name}
  //     {...resolvedProps}
  //     ref={ref}
  //     style={[style, { fontSize: parseInt(size, 10) }]}
  //   />
  // );
};

export default React.memo(React.forwardRef(Icon));
