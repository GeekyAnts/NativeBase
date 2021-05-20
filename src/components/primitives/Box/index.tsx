import React, { memo, forwardRef } from 'react';
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
import { usePropsResolution } from '../../../hooks/useThemeProps';
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
import { useSafeArea } from '../../../hooks/useSafeArea';
import { getStyleAndFilteredProps } from '../../../utils/styled-system/props';
import { useTheme } from '../../../hooks';

// const StyledBox = styled(View)<IBoxProps>(
//   color,
//   space,
//   layout,
//   flexbox,
//   border,
//   position,
//   typography,
//   customPosition,
//   customBorder,
//   customBackground,
//   customOutline,
//   customShadow,
//   customExtra,
//   customTypography,
//   customLayout
// );

const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  // const { _text, ...resolvedProps } = useThemeProps('Box', props);
  const { _text, ...resolvedProps } = usePropsResolution('Box', props);
  const theme = useTheme();
  console.log('new props 1233', resolvedProps);

  const newProps = getStyleAndFilteredProps(resolvedProps, theme);
  // const safeAreaProps = useSafeArea(newProps);
  console.log('new props ', newProps);

  return (
    <View ref={ref} {...newProps}>
      {React.Children.map(children, (child) =>
        typeof child === 'string' ? <Text {..._text}>{child}</Text> : child
      )}
    </View>
  );
};

export type { IBoxProps };

export default memo(forwardRef(Box));
