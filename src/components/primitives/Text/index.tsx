import React from 'react';
import { Text as NativeText } from 'react-native';
import type { Text as TextType } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  position,
  space,
  typography,
  layout,
  flexbox,
  border,
} from 'styled-system';
import { usePropsConfig } from '../../../hooks/usePropsConfig';
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
import type { ITextProps } from './props';

const StyledText = styled(NativeText)<ITextProps>(
  color,
  space,
  position,
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

const Text = (
  {
    children,
    style,
    isTruncated,
    noOfLines,
    bold,
    italic,
    sub,
    highlight,
    underline,
    strikeThrough,
    ...props
  }: ITextProps,
  ref: any
) => {
  const newProps = usePropsConfig('Text', props);
  return (
    <StyledText
      numberOfLines={noOfLines ? noOfLines : isTruncated ? 1 : 999}
      fontWeight={bold ? 'bold' : undefined}
      fontStyle={italic ? 'italic' : undefined}
      bg={highlight ? 'yellow.200' : undefined}
      textDecorationLine={
        underline ? 'underline' : strikeThrough ? 'line-through' : undefined
      }
      {...newProps}
      fontSize={sub ? 10 : newProps.fontSize}
      style={style}
      ref={ref}
    >
      {children}
    </StyledText>
  );
};

export default React.forwardRef<TextType, ITextProps>(Text);
export type { ITextProps };
