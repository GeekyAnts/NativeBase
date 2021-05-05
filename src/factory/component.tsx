//@ts-nocheck
import React from 'react';
import type { AnyStyledComponent } from 'styled-components';
import { usePropsWithComponentTheme } from '../hooks/useThemeProps/usePropsWithComponentTheme';
import { StyleSheet } from 'react-native';
import type { ComponentTheme } from '../theme';
import {
  border,
  color,
  flexbox,
  layout,
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
import { useNativeBase } from '../hooks';

const composeStyles = (props: any, ...args: any) => {
  let styles: any = {};
  args.forEach((arg: any) => {
    styles = { ...styles, ...arg(props) };
  });

  for (let key in styles) {
    if (typeof styles[key] === 'string' && styles[key].endsWith('px')) {
      styles[key] = parseInt(styles[key], 10);
    }

    if (key === 'fontWeight' && typeof styles[key] === 'number') {
      styles[key] = styles[key].toString();
    }
  }

  return styles;
};

export function styled(Component: any) {
  return <T extends unknown>(...args: any) =>
    React.forwardRef(({ style, ...props }: any, ref: any) => {
      style = Array.isArray(style) ? style : [style];
      const { theme } = useNativeBase();
      const styledComponentStyles = composeStyles({ ...props, theme }, ...args);

      const styles = StyleSheet.create({
        style: StyleSheet.flatten([styledComponentStyles, style]),
      });

      return <Component ref={ref} {...props} style={styles.style} />;
    });
}
export default function <P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  return React.forwardRef(
    ({ children, ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = styled(Component)(
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
      const calculatedProps = usePropsWithComponentTheme(componentTheme, props);
      return (
        <StyledComponent {...(calculatedProps as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
    }
  );
}

export function nativebaseFactory<P>(Component: React.ComponentType<P>) {
  return React.forwardRef(
    ({ children, ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = styled(Component as AnyStyledComponent)(
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

      return (
        <StyledComponent {...(props as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
    }
  );
}
