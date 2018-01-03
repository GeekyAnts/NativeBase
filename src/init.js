import { Theme } from "native-base-shoutem-theme";
import getThemeStyle from "./theme/components_2";

export default function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}
