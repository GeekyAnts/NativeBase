import omit from 'lodash.omit';
import { useWindowDimensions } from 'react-native';
import { useNativeBase } from './../useNativeBase';
import { calculateProps } from './utils';

export function usePropsWithComponentTheme(
  localTheme: any,
  propsReceived: any
) {
  const { theme, ...colorModeProps } = useNativeBase();
  let windowWidth = useWindowDimensions()?.width;
  return calculateProps(
    omit(theme, 'components'),
    colorModeProps,
    localTheme,
    propsReceived,
    windowWidth
  );
}
