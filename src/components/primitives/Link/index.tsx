import React from 'react';
import { Platform, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import type { ILinkProps } from './types';
import Box from '../Box';
import Text from '../Text';
import { useThemeProps } from '../../../hooks';
import { useLink } from './useLink';

const StyledLink = styled(Box)<ILinkProps>({});
const Link = (
  {
    style,
    href,
    isUnderlined = true,
    onClick,
    isExternal,
    children,
    m,
    mt,
    mr,
    ml,
    mb,
    p,
    pt,
    pl,
    pr,
    pb,
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
    p,
    pt,
    pr,
    pl,
    pb,
    w,
    width,
    h,
    height,
  };
  let newProps = useThemeProps('Link', props);
  const linkTextProps = {
    textDecorationLine: isUnderlined ? 'underline' : 'none',
    ..._text,
  };
  const { linkProps } = useLink({ href, onClick, isExternal });
  return (
    <Box {...layoutProps}>
      {Platform.OS === 'web' ? (
        // Using <Text /> as currently rn - web only supports target="_blank" on Text element
        <Text
          {...linkTextProps}
          {...linkProps}
          {...newProps}
          ref={ref}
          flexDirection="row"
          style={style}
        >
          {children}
        </Text>
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
