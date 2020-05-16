import styled from "styled-components/native";
import { ColorProps, SpaceProps, TypographyProps, color, space, typography } from "styled-system";

export type TextProps = ColorProps | SpaceProps | TypographyProps;

const Text = styled.Text<TextProps>`
  ${color}
  ${space}
  ${typography}
`;

export default Text;
