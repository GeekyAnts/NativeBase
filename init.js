import { Theme } from '@shoutem/theme';
import getThemeStyle from './src/theme';

export default function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}
