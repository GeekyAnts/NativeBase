import React from 'react';
import { PressableProps, Pressable as RNPressable } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import type { IBoxProps } from '../Box';

type IPressableProps = PressableProps & IBoxProps;

const StyledPressable = styled(RNPressable)<IPressableProps>(
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
  customLayout
);

const Pressable = (props: IPressableProps, ref: any) => {
  return <StyledPressable {...props} ref={ref} />;
};

export default React.forwardRef(Pressable);
