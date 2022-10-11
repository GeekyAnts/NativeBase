import { Platform } from 'react-native';
import get from 'lodash.get';
import { convertStringNumberToNumber } from './convertStringNumberToNumber';
import { resolveValueWithBreakpoint } from '../hooks/useThemeProps/utils';

/**
 * Common Logic Sharing between useSx and useStyledSytem
 */
export const getRNKeyAndStyleValue = ({
  config,
  value,
  key,
  theme,
  styledSystemProps,
  currentBreakpoint,
}: any) => {
  let style: any = {};
  if (config === true) {
    style = {
      ...style,
      [key]: convertStringNumberToNumber(key, value),
    };
  } else if (config) {
    //@ts-ignore
    const { property, scale, properties, transformer } = config;
    let val = value;

    if (transformer) {
      val = transformer(val, theme[scale], theme, styledSystemProps.fontSize);
    } else {
      // If a token is not found in the theme
      val = get(theme[scale], value, value);
    }

    if (typeof val === 'string') {
      if (val.endsWith('px')) {
        val = parseFloat(val);
      } else if (val.endsWith('em') && Platform.OS !== 'web') {
        const fontSize = resolveValueWithBreakpoint(
          styledSystemProps.fontSize,
          theme.breakpoints,
          currentBreakpoint,
          key
        );
        val =
          parseFloat(val) *
          parseFloat(get(theme.fontSizes, fontSize, fontSize));
      }
    }

    val = convertStringNumberToNumber(key, val);

    if (properties) {
      //@ts-ignore
      properties.forEach((property) => {
        style = {
          ...style,
          [property]: val,
        };
      });
    } else if (property) {
      style = {
        ...style,
        [property]: val,
      };
    } else {
      style = {
        ...style,
        ...val,
      };
    }
  }

  return style;
};
