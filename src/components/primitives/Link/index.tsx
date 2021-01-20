import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import type { View as ViewType } from 'react-native';
import View from './../View';
import styled from 'styled-components/native';
import { addTextAndPropsToStrings } from '../../../utils';
import type { ILinkProps } from './props';
import Box from '../Box';
import { useThemeProps } from '../../../hooks';
import { useLink } from './useLink';

const StyledLink = styled(View)<ILinkProps>({});

const addStyleAndPropsToChild = (
  props: any,
  children: JSX.Element[] | JSX.Element,
  IsUnderlined: boolean
) => {
  return React.Children.map(children, (child: any) => {
    let computedStyle: any = child.props.style;
    computedStyle = StyleSheet.flatten([
      child.props.style,
      { textDecorationLine: IsUnderlined ? 'underline' : 'none' },
    ]);
    return React.cloneElement(
      child,
      { ...props, ...child.props, style: computedStyle },
      child.props.children
    );
  });
};

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

  const { linkProps } = useLink({ href, onClick, isExternal });

  return (
    <Box {...layoutProps}>
      <TouchableWithoutFeedback {...linkProps} {...newProps} ref={ref}>
        <StyledLink
          {...newProps}
          textDecorationLine={isUnderlined ? 'underline' : 'none'}
          style={style}
        >
          {addStyleAndPropsToChild(
            newProps,
            addTextAndPropsToStrings(children, newProps),
            isUnderlined
          )}
        </StyledLink>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default React.memo(React.forwardRef<ViewType, ILinkProps>(Link));
export type { ILinkProps };
