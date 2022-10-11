import React, { useMemo } from 'react';
import { ComponentTheme, theme } from '../theme';
import { useComponentThemePropsResolution } from '../hooks/useThemeProps';
import type { FactoryComponentProps } from './types';
import { makeStyledComponent } from '../utils/makeStyledComponent';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  return React.forwardRef(
    ({ ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = useMemo(() => makeStyledComponent(Component), []);
      const calculatedProps = useComponentThemePropsResolution(
        componentTheme ?? {},
        props,
        theme
      );
      return <StyledComponent {...calculatedProps} ref={ref} />;
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
