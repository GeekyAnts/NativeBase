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
import { useThemeProps } from '../../../hooks/useThemeProps';
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
  const newProps = useThemeProps('Text', props);
  return (
    <StyledText
      {...newProps}
      numberOfLines={noOfLines ? noOfLines : isTruncated ? 1 : 999}
      fontWeight={bold ? 'bold' : newProps.fontWeight}
      fontStyle={italic ? 'italic' : newProps.fontStyle}
      bg={highlight ? 'yellow.200' : newProps.bg}
      textDecorationLine={
        underline
          ? 'underline'
          : strikeThrough
          ? 'line-through'
          : newProps.textDecorationLine
      }
      fontSize={sub ? 10 : newProps.fontSize}
      style={style}
      ref={ref}
    >
      {children}
    </StyledText>
  );
};

export default React.memo(React.forwardRef<TextType, ITextProps>(Text));
export type { ITextProps };
