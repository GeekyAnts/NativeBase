import React, { useContext } from "react";
import { TextStyle } from "react-native";
import { ThemeContext } from "styled-components";

import { IconProps } from "../../primitives";

import Button, { ButtonProps } from "../Button";

type iconProps = IconProps & {
  iconStyle?: TextStyle | {};
};

type IconButtonProps = ButtonProps & iconProps;

const IconButton = ({ name, type, iconStyle, ...props }: IconButtonProps) => {
  const theme: Theme = useContext(ThemeContext);

  const iconButtonDefaultprops: ButtonProps = {
    borderRadius: 40,
    padding: 4,
    overflow: "hidden",
    rippleColor: theme.colors.white,
  };

  return (
    <Button
      {...iconButtonDefaultprops}
      transparent
      icon={{ name, type, style: iconStyle }}
      {...props}
    />
  );
};

export default IconButton;
