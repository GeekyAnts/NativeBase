import { getStyleAndFilteredProps } from '../theme/styled-system';
import { useTheme } from 'styled-components/native';
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
import { StyleSheet } from 'react-native';

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

// @ts-ignore
export const makeStyledBox = (Comp: any) => {
  return React.forwardRef(
    ({ style: propStyle, children, ...props }: any, ref: any) => {
      const theme = useTheme();
      const { style, restProps } = React.useMemo(() => {
        const { styleSheet, restProps } = getStyleAndFilteredProps({
          ...props,
          theme,
        });

        return { style: [styleSheet.box, propStyle], restProps };
      }, [props, theme, propStyle]);

      return (
        <Comp {...restProps} style={style} ref={ref}>
          {children}
        </Comp>
      );
    }
  );
};
