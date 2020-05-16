import React, { forwardRef } from "react";
import { Image, ImageProps } from "react-native";
import styled from "styled-components";
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  flex,
  layout,
  space,
} from "styled-system";

type NBImageProps = ImageProps & LayoutProps & SpaceProps & BorderProps & FlexboxProps;

const StyledImage = styled(Image)<NBImageProps>(layout, space, border, flex);

const defaultImageProps: NBImageProps = {
  width: 100,
  height: 100,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NBImage = (props: NBImageProps, ref: any) => {
  return <StyledImage {...defaultImageProps} ref={ref} {...props} />;
};

export default forwardRef(NBImage);
