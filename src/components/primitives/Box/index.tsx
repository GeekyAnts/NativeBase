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
  getStyleAndFilteredProps,
} from '../../../utils/styled-system/props';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Text from './../Text';
import type { IBoxProps } from './types';
import { useSafeArea } from '../../../hooks/useSafeArea';

const StyledBox = styled(View)<IBoxProps>(
  getStyleAndFilteredProps({
    ...color,
    ...space,
    ...layout,
    ...flexbox,
    ...border,
    ...position,
    ...typography,
  })
);

const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  // const { _text, ...resolvedProps } = useThemeProps('Box', props);
  const { _text, ...resolvedProps } = usePropsResolution('Box', props);
  const safeAreaProps = useSafeArea(resolvedProps);

  return (
    <StyledBox ref={ref} {...safeAreaProps}>
      {React.Children.map(children, (child) =>
        typeof child === 'string' ? <Text {..._text}>{child}</Text> : child
      )}
    </StyledBox>
  );
};

export type { IBoxProps };

export default memo(forwardRef(Box));
