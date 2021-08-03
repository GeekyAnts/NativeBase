import React, { memo, forwardRef, useRef } from 'react';
import { Text as NativeText, useWindowDimensions } from 'react-native';
import { useTheme } from '../../../hooks';
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
import { usePropsResolution } from '../../../hooks/useThemeProps';
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
import type { ITextProps } from './types';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils/mergeRefs';
import isNil from 'lodash.isnil';
import { isResponsiveAnyProp } from '../../../theme/tools';

type IUseResolvedFontFamily = {
  fontFamily: string;
  fontStyle: string;
  fontWeight: string | number;
};

// Android doesn't support fontWeight or fontStyle properties. So, we pass fontFamily instead.
function useResolvedFontFamily(props: IUseResolvedFontFamily) {
  const { fontFamily, fontStyle, fontWeight } = props;

  const { fontConfig, fontWeights, fonts } = useTheme();
  const fontToken = fonts[fontFamily];

  if (fontConfig && fontConfig[fontToken]) {
    // fontWeights are also specified using "400"
    const parsedFontWeight = parseInt(fontWeight as any);
    let fontWeightNumber = Number.isNaN(parsedFontWeight)
      ? fontWeights[fontWeight]
      : fontWeight;
    let fontVariants = fontConfig[fontToken][fontWeightNumber];
    if (typeof fontVariants === 'object') {
      if (fontVariants[fontStyle]) return fontVariants[fontStyle];
    } else {
      return fontVariants;
    }
  }
}

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
  const windowDimensions = useWindowDimensions();
  if (isNil(windowDimensions.width) || isNil(windowDimensions.height)) {
    const responsivePropsExists = isResponsiveAnyProp(props);
    if (responsivePropsExists) {
      return null;
    }
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
