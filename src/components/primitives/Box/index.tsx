import React, { forwardRef } from 'react';
import type { View as ViewType } from 'react-native';
import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';
import { useThemeProps } from '../../../hooks/useThemeProps';
import { themeTools } from '../../../theme';
import { addTextAndPropsToStrings } from '../../../utils/addTextAndPropsToStrings';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import type { IBoxProps } from './props';

const StyledBox = styled(View)<IBoxProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  typography,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  // TextProps that contain all the props related to text and gets added to child text components using addTextAndPropsToStrings() method
  let [textProps, remainingProps] = themeTools.extractInObject(props, [
    'fontWeight',
    'fontFamily',
    'fontSize',
    'color',
    'textDecoration',
    'txtDecor',
    'wordBreak',
    'textOverflow',
    'textTransform',
    'whiteSpace',
    'overflowWrap',
  ]);
  const boxProps = useThemeProps('Box', remainingProps);
  return (
    <StyledBox ref={ref} {...boxProps}>
      {addTextAndPropsToStrings(children, textProps)}
    </StyledBox>
  );
};

export type { IBoxProps } from './props';

export default forwardRef<ViewType, IBoxProps>(Box);
