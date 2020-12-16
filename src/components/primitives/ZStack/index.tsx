import React from 'react';
import { ViewProps, View } from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  position,
  space as spacing,
} from 'styled-system';

import { getAbsoluteChildren } from '../../../utils';

export type IZStackProps =
  | ColorProps
  | SpaceProps
  | LayoutProps
  | FlexboxProps
  | BorderProps;

const StyledZStack = styled(View)<IZStackProps>(
  color,
  spacing,
  layout,
  flexbox,
  border,
  position
);

type ZStackProps = IZStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    reversed?: boolean;
  };

const ZStack = ({ children, reversed, ...props }: ZStackProps) => {
  return (
    <StyledZStack {...props}>
      {getAbsoluteChildren(children, reversed)}
    </StyledZStack>
  );
};

export default ZStack;
