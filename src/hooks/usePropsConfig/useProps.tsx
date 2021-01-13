import get from 'lodash/get';
import omit from 'lodash/omit';
import { useWindowDimensions } from 'react-native';
import { useNativeBase } from './../useNativeBase';
import { omitUndefined, extractInObject } from './../../theme/tools/';
import { filterShadowProps } from './../../utils/filterShadowProps';
import { calculateProps } from './utils';

const filterAndCalculateProps = (
  theme: any,
  colorModeProps: any,
  componentTheme: any,
  propsReceived: any,
  windowWidth: any
) => {
  // Extracting out children and style, as they do not contribute in props calculation
  let [ignoredProps, props] = extractInObject(propsReceived, [
    'children',
    'style',
    'onPress',
    'icon',
    'onOpen',
    'onClose',
  ]);
  let newProps = calculateProps(
    theme,
    colorModeProps,
    componentTheme,
    props,
    windowWidth
  );
  let mergedProps = filterShadowProps(newProps, ignoredProps);
  return omitUndefined(mergedProps);
};

export function usePropsConfig(component: string, propsReceived: any) {
  const { theme, ...colorModeProps } = useNativeBase();
  const componentTheme = get(theme, `components.${component}`);
  let windowWidth = useWindowDimensions()?.width;
  return filterAndCalculateProps(
    omit(theme, ['components']),
    colorModeProps,
    componentTheme,
    propsReceived,
    windowWidth
  );
}
