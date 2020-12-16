import React, { forwardRef } from 'react';
import { View } from 'react-native';
import type { View as ViewType } from 'react-native';
import styled from 'styled-components/native';
import { usePropsConfig } from '../../../hooks/usePropsConfig';
import { themeTools } from '../../../theme';
import { addTextAndPropsToStrings } from '../../../utils';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
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
  typography,
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
  const boxProps = usePropsConfig('Box', remainingProps);
  return (
    <StyledBox ref={ref} {...boxProps}>
      {addTextAndPropsToStrings(children, textProps)}
    </StyledBox>
  );
};

export type { IBoxProps } from './props';

export default forwardRef<ViewType, IBoxProps>(Box);
