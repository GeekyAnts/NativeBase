import React from "react";
import styled from "styled-components";
import { border, color, flexbox, layout, space } from "styled-system";

import { Box, IBoxProps, Text, TextProps } from "../../primitives";

type AppBarProps = IBoxProps & {
  actions?: Array<JSX.Element>;
  leading?: JSX.Element;
  title?: JSX.Element | string;
};

const StyledAppBar = styled(Box)(color, border, flexbox, layout, space);

const defaultAppBarProps: IBoxProps = {
  height: 64,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "blue.6",
  px: 4,
};

const defaultTitleProps: TextProps = {
  color: "white",
  fontSize: 3,
  fontWeight: 2,
};

const AppBar = ({ actions, leading, title, ...props }: AppBarProps) => {
  const getTitleJSX = (headerTitle: JSX.Element | string | undefined) => {
    if (!headerTitle) return undefined;

    return typeof headerTitle === "string" ? (
      <Text {...defaultTitleProps}>{title}</Text>
    ) : (
      React.cloneElement(headerTitle, defaultTitleProps, headerTitle.props.children)
    );
  };

  return (
    <StyledAppBar {...defaultAppBarProps} {...props}>
      <Box justifyContent="center" mr={4}>
        {leading || <Box width={40} height={40} />}
      </Box>

      <Box flexDirection="row" flexGrow={1} justifyContent="space-between" alignItems="center">
        <Box>{getTitleJSX(title)}</Box>
        <Box flexDirection="row">{actions && actions.map((action: JSX.Element) => action)}</Box>
      </Box>
    </StyledAppBar>
  );
};

export default AppBar;
