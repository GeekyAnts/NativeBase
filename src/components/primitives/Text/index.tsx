import React, { memo, forwardRef, useRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ITextProps } from './types';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils/mergeRefs';
import { makeStyledComponent } from '../../../utils/styled';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';
import { Text as NativeText } from 'react-native';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

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
    numberOfLines,
    ...reslovedProps
  } = usePropsResolution('Text', props);

  const _ref = useRef(null);
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

  if (resolvedFontFamily) {
    fontFamily = resolvedFontFamily;
  }

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <StyledText
      {...reslovedProps}
      numberOfLines={
        numberOfLines || noOfLines
          ? numberOfLines || noOfLines
          : isTruncated
          ? 1
          : undefined
      }
      {...resolvedFontFamily}
      bg={highlight ? 'warning.300' : reslovedProps.bg}
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
