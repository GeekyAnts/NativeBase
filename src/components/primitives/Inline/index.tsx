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
  space,
} from "styled-system";

export type IStackProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const Stack = styled.View<IStackProps>`
  flex-direction: row;
  flex-wrap: wrap;
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

export default Stack;
