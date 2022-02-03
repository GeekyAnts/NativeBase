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
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Link = (props: ILinkProps, ref: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const {
    isUnderlined,
    children,
    _text,
    href,
    onPress,
    isExternal,
    ...resolvedProps
  } = usePropsResolution('Link', props, { isHovered });
  const { linkProps } = useLink({ href, onPress, isExternal, _ref });

  const linkTextProps = {
    textDecorationLine: isUnderlined ? 'underline' : 'none',
    ..._text,
  };
  // function getHoverProps() {
  //   let hoverTextProps = {
  //     ...linkTextProps,
  //     ..._hover?._text,
  //   };
  //   return {
  //     ...hoverTextProps,
  //   };
  // }
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <>
      {/* On web we render Link in anchor tag */}
      {Platform.OS === 'web' ? (
        <Box
          {...linkProps}
          {...resolvedProps}
          _text={linkTextProps}
          ref={mergeRefs([ref, _ref])}
          flexDirection="row"
        >
          {children}
        </Box>
      ) : (
        <>
          {React.Children.map(children, (child) =>
            typeof child === 'string' || typeof child === 'number' ? (
              <Text {...resolvedProps._text} {...linkTextProps} {...linkProps} {...resolvedProps} ref={ref}>
                {child}
              </Text>
            ) : (
              <Pressable
                {...linkProps}
                {...resolvedProps}
                ref={ref}
                flexDirection="row"
              >
                {child}
              </Pressable>
            )
          )}
        </>
      )}
    </>
  );
};

export default memo(forwardRef(Link));
export type { ILinkProps };
