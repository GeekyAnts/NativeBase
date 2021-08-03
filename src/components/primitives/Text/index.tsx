import React, { memo, forwardRef, useRef } from 'react';
import { Text as NativeText } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ITextProps } from './types';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils/mergeRefs';
import { makeStyledComponent } from '../../../utils/styled';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';
import { useToken } from '../../../hooks/useToken';
const StyledText = makeStyledComponent(NativeText);

const Text = ({ children, ...props }: ITextProps, ref: any) => {
  const {
    isTruncated,
    noOfLines,
    bold,
    italic,
    sub,
    highlight,
    underline,
    strikeThrough,
    fontFamily: propFontFamily,
    fontWeight: propFontWeight,
    fontStyle: propFontStyle,
    _hover,
    fontSize = 'md',
    lineHeight = '2xs',
    letterSpacing = 'sm',
    ...reslovedProps
  } = usePropsResolution('Text', props);

  const _ref = useRef(null);

  const [lineHeightValue] = useToken('lineHeights', [lineHeight]);
  const [fontSizeValue] = useToken('fontSizes', [fontSize]);
  const [letterSpacingValue] = useToken('letterSpacings', [letterSpacing]);
  //lineheight calculations
  let calculatedLineHeight =
    parseFloat(lineHeightValue) * parseFloat(fontSizeValue);
  let calculatedLineHeightWithUnits =
    typeof fontSizeValue === 'string'
      ? fontSizeValue.includes('rem')
        ? calculatedLineHeight + 'rem'
        : fontSizeValue.includes('px')
        ? calculatedLineHeight + 'px'
        : calculatedLineHeight
      : calculatedLineHeight;

  //letter-spacing calculations
  let calculatedLetterSpacing =
    parseFloat(letterSpacingValue) * parseFloat(fontSizeValue);
  let calculatedLetterSpacingWithUnits =
    typeof fontSizeValue === 'string'
      ? fontSizeValue.includes('rem')
        ? calculatedLetterSpacing + 'rem'
        : fontSizeValue.includes('px')
        ? calculatedLetterSpacing + 'px'
        : calculatedLetterSpacing
      : calculatedLetterSpacing;

  // TODO: might have to add this condition
  const { isHovered } = useHover({}, _hover ? _ref : null);
  // const { isHovered } = useHover({}, _ref);
  let fontFamily = propFontFamily;
  let fontStyle = italic ? 'italic' : propFontStyle;
  let fontWeight = bold ? 'bold' : propFontWeight;

  const resolvedFontFamily = useResolvedFontFamily({
    fontFamily,
    fontWeight,
    fontStyle,
  });

  return (
    <StyledText
      {...reslovedProps}
      numberOfLines={noOfLines ? noOfLines : isTruncated ? 1 : undefined}
      {...resolvedFontFamily}
      fontWeight={bold ? 'bold' : fontWeight}
      lineHeight={calculatedLineHeightWithUnits}
      letterSpacing={calculatedLetterSpacingWithUnits}
      fontStyle={italic ? 'italic' : fontStyle}
      bg={highlight ? 'warning.200' : reslovedProps.bg}
      textDecorationLine={
        underline && strikeThrough
          ? 'underline line-through'
          : underline
          ? 'underline'
          : strikeThrough
          ? 'line-through'
          : reslovedProps.textDecorationLine
      }
      fontSize={sub ? 10 : fontSize}
      ref={mergeRefs([ref, _ref])}
      {...(isHovered && _hover)}
    >
      {children}
    </StyledText>
  );
};

export default memo(forwardRef(Text));
export type { ITextProps };
