import React from 'react';
import { usePropsWithComponentTheme } from '../hooks/useThemeProps/usePropsWithComponentTheme';
import type { ComponentTheme } from '../theme';
import type { FactoryComponentProps } from './types';
import { makeStyledComponent } from '../utils/styled';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  return React.forwardRef(
    ({ children, ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = makeStyledComponent(Component);
      const calculatedProps = usePropsWithComponentTheme(
        componentTheme ?? {},
        props
      );
      return (
        <StyledComponent {...(calculatedProps as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
    }
  );
}
