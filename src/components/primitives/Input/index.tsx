import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  layout,
  space,
  typography,
} from "styled-system";
import styled from "styled-components";

type InputProps = TextInputProps &
  TypographyProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  ColorProps;

const StyledInput = styled(TextInput)<InputProps>(typography, space, border, color, layout);

/* 
  Default styles for Input
*/
const inputDefaultProps: InputProps = {
  p: 4,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: "gray.4",
  fontSize: 2,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = (props: InputProps, ref: any) => {
  return <StyledInput ref={ref} {...inputDefaultProps} {...props} />;
};

export default forwardRef(Input);
