import React, { memo, forwardRef, useRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ITextProps } from './types';
// import { useHover } from '../../../core/color-mode/hooks';
import { mergeRefs } from '../../../utils/mergeRefs';
import { useHover } from '@react-native-aria/interactions';

import { makeStyledComponent } from '../../../utils/styled';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';
import { Text as NativeText } from 'react-native';
import stableHash from 'stable-hash';

const StyledText = makeStyledComponent(NativeText);
// updateComponentThemeMap('Text');

// To have a RN compatible behaviour, we'll inherit parent text styles as base style
const TextAncestorContext = React.createContext(false);

const Text = ({ children, ...props }: ITextProps, ref: any) => {
  const hasTextAncestor = React.useContext(TextAncestorContext);
  // const hasTextAncestor = true;

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
    fontSize,
    numberOfLines,
    // INTERNAL_themeStyle,
    ...reslovedProps
  } = usePropsResolution(
    'Text',
    props,
    {},
    {
      resolveResponsively: ['noOfLines', 'numberOfLines'],
      // We override the component base theme if text has an ancestor.
      componentTheme: hasTextAncestor ? {} : undefined,
    }
  );

  const _ref = useRef(null);
  // TODO: might have to add this condition
  const { isHovered } = useHover({}, _hover ? _ref : null);
  // const { isHovered } = useHover({}, _ref);

  let fontFamily = propFontFamily;
  const fontStyle = italic ? 'italic' : propFontStyle;
  const fontWeight = bold ? 'bold' : propFontWeight;

  const resolvedFontFamily = useResolvedFontFamily({
    fontFamily,
    fontWeight: fontWeight ?? (hasTextAncestor ? undefined : 400),
    fontStyle: fontStyle ?? (hasTextAncestor ? undefined : 'normal'),
  });

  if (resolvedFontFamily) {
    fontFamily = resolvedFontFamily;
  }

  const propsToSpread = React.useMemo(() => {
    return {
      ...reslovedProps,
      numberOfLines:
        numberOfLines || noOfLines
          ? numberOfLines || noOfLines
          : isTruncated
          ? 1
          : undefined,
      ...resolvedFontFamily,
      bg: highlight ? 'warning.300' : reslovedProps.bg,
      textDecorationLine:
        underline && strikeThrough
          ? 'underline line-through'
          : underline
          ? 'underline'
          : strikeThrough
          ? 'line-through'
          : reslovedProps.textDecorationLine,
      fontSize: sub ? 10 : fontSize,
      ref: mergeRefs([ref, _ref]),
      ...(isHovered && _hover),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fontSize,
    highlight,
    isTruncated,
    noOfLines,
    numberOfLines,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    stableHash(reslovedProps),
    resolvedFontFamily,
    strikeThrough,
    sub,
    underline,
  ]);

  return hasTextAncestor ? (
    <StyledText {...propsToSpread}>{children}</StyledText>
  ) : (
    <TextAncestorContext.Provider value={true}>
      <StyledText {...propsToSpread}>{children}</StyledText>
    </TextAncestorContext.Provider>
  );
};

export default memo(forwardRef(Text));
export type { ITextProps };
