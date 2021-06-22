import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space, position } from 'styled-system';
import { View as RNView } from 'react-native';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
  customPosition,
} from '../../../utils/customProps';

import { useThemeProps } from '../../../hooks/useThemeProps';
import { useSafeArea } from '../../../hooks/useSafeArea';
import type { IViewProps } from './types';
const StyledView: any = styled(RNView)<IViewProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

const View = (props: IViewProps, ref: any) => {
  const viewProps = useThemeProps('View', props);
  const safeAreaProps = useSafeArea(viewProps);
  return <StyledView {...safeAreaProps} ref={ref} />;
};
export default React.memo(React.forwardRef(View));
export type { IViewProps };
