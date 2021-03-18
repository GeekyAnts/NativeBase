import React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';
import { border, color, flexbox, layout, space, position } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customPosition,
  customShadow,
  customTypography,
} from '../../../utils/customProps';

const TouchableItem = styled(TouchableHighlight)<any>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

export default React.memo(TouchableItem);
