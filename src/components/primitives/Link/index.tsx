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
  let {
    _hover,
    _underline,
    children,
    _external,
    ...remainingProps
  } = usePropsResolution('Link', props);
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const { linkProps } = useLink({ href, onPress, isExternal, _ref });
  if (_external == undefined) {
    _external = {};
  }
  return (
    <>
      {/* <Box {...layoutProps} ref={wrapperRef}> */}
      {/* On web we render Link in anchor tag */}
      {Platform.OS === 'web' ? (
        <Box
          {...linkProps}
          {...(isExternal && _external)}
          {...remainingProps}
          {...(isUnderlined && _underline)}
          {...(isExternal && _external)}
          {...(isHovered && _hover)}
          ref={mergeRefs([ref, _ref])}
          flexDirection="row"
        >
          {/* <a {...linkProps}> */}
          {children}
          {/* </a> */}
        </Box>
      ) : (
        <Pressable
          {...linkProps}
          {...remainingProps}
          ref={ref}
          flexDirection="row"
          {...(isExternal && _external)}
          {...(isUnderlined && _underline)}
        >
          {React.Children.map(children, (child) =>
            typeof child === 'string' ? (
              <Text
                {...remainingProps._text}
                {...(isExternal && _external._text)}
                {...(isUnderlined && _underline._text)}
              >
                {child}
              </Text>
            ) : (
              child
            )
          )}
        </Pressable>
      )}
      {/* </Box> */}
    </>
  );
};

export default memo(forwardRef(Link));
export type { ILinkProps };
