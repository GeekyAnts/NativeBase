import React from 'react';
import type { AnyStyledComponent } from 'styled-components';
import styled from 'styled-components/native';
import { usePropsWithComponentTheme } from '../hooks/useThemeProps/usePropsWithComponentTheme';
import type { ComponentTheme } from '../theme';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  margin,
  padding,
  position,
  space,
  typography,
} from 'styled-system';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
  customTypography,
} from '../utils/customProps';
import type { FactoryComponentProps } from './types';

export default function <P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  return React.forwardRef(
    ({ children, ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = styled(Component as AnyStyledComponent)(
        color,
        background,
        padding,
        margin,
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
      const calculatedProps = usePropsWithComponentTheme(componentTheme, props);
      return (
        <StyledComponent {...(calculatedProps as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
    }
  );
}
