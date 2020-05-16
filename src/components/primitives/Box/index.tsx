import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
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

import { shadows } from "../../../styles";

export type IBoxProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps & { shadow?: number; style?: ViewStyle; children?: JSX.Element | JSX.Element[] };

const StyledBox = styled(View)<IBoxProps>(color, space, layout, flexbox, border);

const Box = ({ shadow, style, ...props }: IBoxProps) => {
  let computedStyle: ViewStyle | undefined = style;
  /*
  | If shadow prop exists, apply shadow style
  */
  if (shadow) {
    computedStyle = StyleSheet.flatten([
      style,
      shadows[shadow > shadows.length ? shadows.length : shadow],
    ]);
  }
  return <StyledBox {...props} style={computedStyle} />;
};

export default Box;
