import React from 'react';
import { usePropsWithComponentTheme } from '../hooks/useThemeProps/usePropsWithComponentTheme';
import { ComponentTheme, theme } from '../theme';
import type { FactoryComponentProps } from './types';
import { makeStyledComponent } from '../utils/makeStyledComponent';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  return React.forwardRef(
    ({ children, ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = makeStyledComponent(Component);
      const calculatedProps = usePropsWithComponentTheme(
        componentTheme ?? {},
        props,
        theme
      );
      return (
        <StyledComponent {...(calculatedProps as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
    }
  );
}
