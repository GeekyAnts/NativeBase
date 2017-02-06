import { Theme } from '@shoutem/theme';
import getThemeStyle from './theme';

export default function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}
