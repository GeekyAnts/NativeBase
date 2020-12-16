import styled from 'styled-components/native';
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
} from 'styled-system';

import Box, { IBoxProps } from '../Box';

export type IViewProps =
  | ColorProps
  | SpaceProps
  | LayoutProps
  | FlexboxProps
  | BorderProps
  | IBoxProps;

const View: any = styled(Box)<IViewProps>(
  color,
  space,
  layout,
  flexbox,
  border
);

export default View;
