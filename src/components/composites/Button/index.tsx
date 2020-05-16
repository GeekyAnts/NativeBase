import React, { useContext } from "react";
import { StyleSheet, TextStyle, TouchableWithoutFeedbackProps } from "react-native";
import Ripple from "react-native-material-ripple";
import styled, { ThemeContext } from "styled-components";
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

import { Icon, IconProps, Text, TextProps } from "../../primitives";

type RippleProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps & {
    rippleColor?: string;
    rippleOpacity?: number;
    rippleDuration?: number;
    shadow?: number | "none";
  };

const StyledRipple = styled(Ripple)(color, border, flexbox, layout, space);

type iconProps = {
  icon?: IconProps & {
    position?: "left" | "right";
  };
};

export type ButtonProps = iconProps &
  RippleProps &
  TouchableWithoutFeedbackProps & {
    label?: string;
    block?: boolean;
    outline?: boolean;
    transparent?: boolean;
    variant?: "critical" | "caution" | "positive" | "neutral" | "info" | "promote";
    labelStyle?: TextStyle;
  };

const Button = ({
  block,
  variant,
  transparent,
  label,
  style,
  shadow,
  labelStyle,
  outline,
  icon,
  ...props
}: ButtonProps) => {
  const theme: Theme = useContext(ThemeContext);

  /*
  | Default button style
  */
  const buttonDefaultprops: RippleProps = {
    shadow: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    rippleColor: theme.colors.white,
    px: 7,
    py: 4,
  };

  /*
  | Transparent button style
  */
  const transparentButtonProps: RippleProps = {
    bg: "transparent",
    rippleColor: theme.colors.black,
  };

  /*
  | Default button text style
  */
  const textDefaultProps: TextProps = {
    color: theme.colors.white,
    fontSize: 2,
    fontWeight: 2,
  };

  let computedStyle = style;
  /*
  | If shadow prop exists, apply shadow style otherwise fallback to default shadow
  */
  const buttonShadow = shadow ?? buttonDefaultprops.shadow;
  /*
  | If shadow="none", don't apply styles
  */
  if (buttonShadow !== "none" && !transparent && !outline) {
    computedStyle = StyleSheet.flatten([
      style,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      shadows[buttonShadow! > shadows.length ? shadows.length : buttonShadow!],
    ]);
  }

  /*
  | Updated button style based on props
  */
  const updatedButtonProps: ButtonProps = {
    ...buttonDefaultprops,
    bg: variant ?? "indigo.6",
    ...(block ? { alignSelf: "stretch" } : {}),
    ...(transparent ? transparentButtonProps : {}),
    ...(outline
      ? { ...transparentButtonProps, borderWidth: 1, borderColor: variant ?? "indigo.6" }
      : {}),
  };

  const updatedTextProps: TextProps = {
    ...textDefaultProps,
    ...(outline || transparent ? { color: variant ?? "indigo.6" } : {}),
  };

  const styles = StyleSheet.create({
    iconDefaultStyle: {
      fontSize: 24,
      color: theme.colors.white,
    },
  });

  const flattenedIconStyle: TextStyle = StyleSheet.flatten([styles.iconDefaultStyle, icon?.style]);

  return (
    <StyledRipple {...updatedButtonProps} {...props} style={computedStyle}>
      {icon && icon.position === "left" && (
        <Icon name={icon.name} style={flattenedIconStyle} type={icon.type} mr={3} />
      )}
      <Text {...updatedTextProps} style={labelStyle}>
        {label}
      </Text>
      {icon && icon.position === "right" && (
        <Icon name={icon.name} style={flattenedIconStyle} type={icon.type} ml={3} />
      )}
      {icon && !icon.position && (
        <Icon name={icon.name} style={flattenedIconStyle} type={icon.type} />
      )}
    </StyledRipple>
  );
};

export default Button;
