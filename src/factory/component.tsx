import React from 'react';
import type { AnyStyledComponent } from 'styled-components';
import { usePropsWithComponentTheme } from '../hooks/useThemeProps/usePropsWithComponentTheme';
import type { ComponentTheme } from '../theme';
import type { FactoryComponentProps } from './types';
import { makeStyledBox } from '../utils/styled';

export default function <P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  return React.forwardRef(
    ({ children, ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = makeStyledBox(Component as AnyStyledComponent);
      const calculatedProps = usePropsWithComponentTheme(componentTheme, props);
      return (
        <StyledComponent {...(calculatedProps as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
    }
  );
}
