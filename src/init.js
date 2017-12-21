import { Theme } from "native-base-shoutem-theme";
import getThemeStyle from "./theme/components/index.js";

export default function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}
