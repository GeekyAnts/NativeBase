import React from "react";
import { ViewProps } from "react-native";
import styled from "styled-components/native";
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
  space as spacing,
} from "styled-system";

import { getSpacedChildren } from "../../../utils";

export type IStackProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const StyledStack = styled.View<IStackProps>`
  ${color}
  ${spacing}
  ${layout}
  ${flexbox}
  ${border}
`;

type StackProps = IStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    space?: number;
  };

const Stack = ({ space, children, ...props }: StackProps) => {
  return <StyledStack {...props}>{getSpacedChildren(children, space, "Y")}</StyledStack>;
};

export default Stack;
