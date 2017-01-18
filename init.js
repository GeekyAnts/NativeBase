import { Theme } from '@shoutem/theme';
import getThemeStyle from './src/theme';

function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}

export default {
  setDefaultThemeStyle,
};
