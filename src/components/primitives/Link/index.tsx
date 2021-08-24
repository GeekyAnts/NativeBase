import React, { memo, forwardRef } from 'react';
import { Platform } from 'react-native';
import type { ILinkProps } from './types';
import Box from '../Box';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks';
import { useLink } from './useLink';
import { mergeRefs } from '../../../utils';
import { Pressable } from '../Pressable';
import { useHover } from '@react-native-aria/interactions';

const Link = (
  { href, isUnderlined = false, onPress, isExternal, ...props }: ILinkProps,
  ref: any
) => {
  let { _hover, children, _text, ...remainingProps } = usePropsResolution(
    'Link',
    props
  );
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const { linkProps } = useLink({ href, onPress, isExternal, _ref });

  const linkTextProps = {
    textDecorationLine: isUnderlined ? 'underline' : 'none',
    ..._text,
  };
  function getHoverProps() {
    let hoverTextProps = {
      ...linkTextProps,
      ..._hover?._text,
    };
    return {
      ...hoverTextProps,
    };
  }
  return (
    <>
      {/* On web we render Link in anchor tag */}
      {Platform.OS === 'web' ? (
        <Box
          {...linkProps}
          {...remainingProps}
          _text={linkTextProps}
          {...(isHovered && getHoverProps())}
          ref={mergeRefs([ref, _ref])}
          flexDirection="row"
        >
          {children}
        </Box>
      ) : (
        <Pressable
          {...linkProps}
          {...remainingProps}
          ref={ref}
          flexDirection="row"
        >
          {React.Children.map(children, (child) =>
            typeof child === 'string' ? (
              <Text {...remainingProps._text} {...linkTextProps}>
                {child}
              </Text>
            ) : (
              child
            )
          )}
        </Pressable>
      )}
    </>
  );
};

export default memo(forwardRef(Link));
export type { ILinkProps };
