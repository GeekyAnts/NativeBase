import React from "react";
import { ThemeProvider as StyledThemeProvider, ThemeProps } from "styled-components/native";

import theme from "../../theme";

type ThemeProviderProps = ThemeProps<Theme>;

const ThemeProvider = (props: ThemeProviderProps) => {
  return <StyledThemeProvider {...props} />;
};
ThemeProvider.defaultProps = {
  theme,
};
export default ThemeProvider;
