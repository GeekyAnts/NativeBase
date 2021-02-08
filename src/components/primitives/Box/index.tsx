import React, { forwardRef } from 'react';
import type { View as ViewType } from 'react-native';
import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';
import { useThemeProps } from '../../../hooks/useThemeProps';
import Text from './../Text';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import type { IBoxProps } from './types';

const StyledBox = styled(View)<IBoxProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  typography,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

const Box = ({ children, _text, ...props }: IBoxProps, ref: any) => {
  const boxProps = useThemeProps('Box', props);
  return (
    <StyledBox ref={ref} {...boxProps}>
      {React.Children.map(children, (child) =>
        typeof child === 'string' ? <Text {..._text}>{child}</Text> : child
      )}
    </StyledBox>
  );
};

export type { IBoxProps };

export default React.memo(forwardRef<ViewType, IBoxProps>(Box));
