import React from 'react';
import { Platform, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import type { ILinkProps } from './types';
import Box from '../Box';
import { useThemeProps } from '../../../hooks';
import { useLink } from './useLink';
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';

const StyledLink = styled(Box)<ILinkProps>({});
const Link = (
  {
    style,
    href,
    isUnderlined = false,
    onClick,
    isExternal,
    children,
    m,
    mt,
    mr,
    ml,
    mb,
    my,
    mx,
    p,
    pt,
    pl,
    pr,
    pb,
    px,
    py,
    w,
    width,
    h,
    height,
    _text,
    ...props
  }: ILinkProps,
  ref: any
) => {
  const layoutProps = {
    m,
    mt,
    mr,
    ml,
    mb,
    my,
    mx,
    p,
    pt,
    pr,
    pl,
    pb,
    py,
    px,
    w,
    width,
    h,
    height,
  };
  let { _hover, ...newProps } = useThemeProps('Link', props);
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const linkTextProps = {
    textDecorationLine: isUnderlined || isHovered ? 'underline' : 'none',
    ..._text,
  };
  const { linkProps } = useLink({ href, onClick, isExternal, _ref });
  return (
    <Box {...layoutProps}>
      {Platform.OS === 'web' ? (
        <StyledLink
          {...linkProps}
          {...newProps}
          _text={linkTextProps}
          {...(isHovered && _hover)}
          ref={mergeRefs([ref, _ref])}
          flexDirection="row"
          style={style}
        >
          {children}
        </StyledLink>
      ) : (
        <TouchableWithoutFeedback {...linkProps} {...newProps} ref={ref}>
          <StyledLink
            _text={linkTextProps}
            {...newProps}
            flexDirection="row"
            style={style}
          >
            {children}
          </StyledLink>
        </TouchableWithoutFeedback>
      )}
    </Box>
  );
};

export default React.memo(React.forwardRef(Link));
export type { ILinkProps };
