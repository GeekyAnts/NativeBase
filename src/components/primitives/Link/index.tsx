import React, { memo, forwardRef } from 'react';
import { Platform } from 'react-native';
import type { ILinkProps } from './types';
import Box from '../Box';
import { usePropsResolution } from '../../../hooks';
import { useLink } from './useLink';
import { mergeRefs } from '../../../utils';
import { Pressable } from '../Pressable';
import { useHover } from '@react-native-aria/interactions';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';

const Link = (
  {
    style,
    href,
    isUnderlined = false,
    onPress,
    isExternal,
    children,
    _text,
    wrapperRef,
    ...props
  }: ILinkProps,
  ref: any
) => {
  const [layoutProps, remProps] = extractInObject(props, [
    ...stylingProps.margin,
    ...stylingProps.position,
    ...stylingProps.layout,
  ]);
  let { _hover, ...newProps } = usePropsResolution('Link', remProps);
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const linkTextProps = {
    textDecorationLine: isUnderlined ? 'underline' : 'none',
    ..._text,
  };
  const { linkProps } = useLink({ href, onPress, isExternal, _ref });
  return (
    <Box {...layoutProps} ref={wrapperRef}>
      {/* On web we render Link in anchor tag */}
      {Platform.OS === 'web' ? (
        <Box
          {...linkProps}
          {...newProps}
          _text={linkTextProps}
          {...(isHovered && _hover)}
          ref={mergeRefs([ref, _ref])}
          flexDirection="row"
          style={style}
        >
          {children}
        </Box>
      ) : (
        <Pressable {...linkProps} {...newProps} ref={ref}>
          <Box
            _text={linkTextProps}
            {...newProps}
            flexDirection="row"
            style={style}
          >
            {children}
          </Box>
        </Pressable>
      )}
    </Box>
  );
};

export default memo(forwardRef(Link));
export type { ILinkProps };
