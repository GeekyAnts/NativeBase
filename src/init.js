import { Theme } from "native-base-shoutem-theme";
import getThemeStyle from "/src/theme/components/index";

export default function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}
