
import color from 'color';
import {
  Platform,
  Dimensions,
  PixelRatio
} from 'react-native';

import {
  PLATFORM,
  defineThemeVars as common_defineThemeVars
} from './common';
import {
  extendThemeVars
} from '../utils';

export function defineThemeVars () {
  return extendThemeVars(
    common_defineThemeVars(),
    {
      containerBgColor: '#000'
    }
  );
}

const themeVars = defineThemeVars();

export default themeVars;

