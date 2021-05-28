import React, { memo, forwardRef } from 'react';
import { View } from 'react-native';
import { LinearGradient } from './LinearGradient';
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
import { usePropsResolution } from '../../../hooks';
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
const StyledLinearGradient = styled(LinearGradient)<IBoxProps>(
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

const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  // const { _text, ...resolvedProps } = useThemeProps('Box', props);
  const { _text, ...resolvedProps } = usePropsResolution('Box', props);
  const safeAreaProps = useSafeArea(resolvedProps);
  if (
    resolvedProps.bg?.linearGradient ||
    resolvedProps.background?.linearGradient ||
    resolvedProps.bgColor?.linearGradient ||
    resolvedProps.backgroundColor?.linearGradient
  ) {
    const lgrad =
      resolvedProps.bg?.linearGradient ||
      resolvedProps.background?.linearGradient ||
      resolvedProps.bgColor?.linearGradient ||
      resolvedProps.backgroundColor?.linearGradient;

    return (
      <StyledLinearGradient
        ref={ref}
        {...safeAreaProps}
        colors={lgrad.colors}
        start={lgrad.start}
        end={lgrad.end}
        locations={lgrad.locations}
      >
        {React.Children.map(children, (child) =>
          typeof child === 'string' ? <Text {..._text}>{child}</Text> : child
        )}
      </StyledLinearGradient>
    );
  }
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
