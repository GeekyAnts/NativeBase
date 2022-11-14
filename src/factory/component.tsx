import React, { useMemo } from 'react';
// import { theme } from '../theme';
import type { ComponentTheme } from '../theme';
import { useComponentThemePropsResolution } from '../hooks/useThemeProps';
import type { FactoryComponentProps } from './types';
import { makeStyledComponent } from '../utils/makeStyledComponent';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  return React.forwardRef(
    ({ children, _state, ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = useMemo(() => makeStyledComponent(Component), []);

      const calculatedProps = useComponentThemePropsResolution(
        componentTheme ?? {},
        props,
        _state
      );
      return (
        <StyledComponent {...(calculatedProps as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
      // return <StyledComponent {...calculatedProps} ref={ref} />;
    }
  );

  // return React.forwardRef(
  //   ({ children, ...props }: P & FactoryComponentProps, ref: any) => {
  //     const StyledComponent = useMemo(() => makeStyledComponent(Component), []);
  //     const calculatedProps = usePropsResolutionWithComponentTheme(
  //       componentTheme ?? {},
  //       props,
  //       theme
  //     );
  //     return (
  //       <StyledComponent {...(calculatedProps as any)} ref={ref}>
  //         {children}
  //       </StyledComponent>
  //     );
  //   }
  // );
}
