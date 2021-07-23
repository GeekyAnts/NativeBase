import { getStyleAndFilteredProps } from '../theme/styled-system';
import styled, { useTheme } from 'styled-components/native';
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
} from './customProps';
import React from 'react';
import { useNativeBaseConfig } from '../core/NativeBaseContext';

export const resolversForBox: any = [
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
  customLayout,
];

export let shouldEnableNewStyledSystemImplementation = true;

export const makeStyledComponent = (Comp: any) => {
  if (shouldEnableNewStyledSystemImplementation) {
    return React.forwardRef(
      ({ style: propStyle, children, debug, ...props }: any, ref: any) => {
        const theme = useTheme();
        const currentBreakpoint = useNativeBaseConfig('makeStyledComponent')
          .currentBreakpoint;

        const { style, restProps } = React.useMemo(() => {
          const { styleSheet, restProps } = getStyleAndFilteredProps({
            ...props,
            theme,
            debug,
            currentBreakpoint,
          });
          if (propStyle) {
            return { style: [styleSheet.box, propStyle], restProps };
          } else {
            return { style: styleSheet.box, restProps };
          }
        }, [props, theme, propStyle, currentBreakpoint, debug]);

        return (
          <Comp {...restProps} style={style} ref={ref}>
            {children}
          </Comp>
        );
      }
    );
  } else {
    //@ts-ignore
    return styled(Comp)(...resolversForBox);
  }
};
