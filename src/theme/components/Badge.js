// @flow

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const badgeTheme = {
    '.primary': {
      backgroundColor: variables.buttonPrimaryBg
    },
    '.warning': {
      backgroundColor: variables.buttonWarningBg
    },
    '.info': {
      backgroundColor: variables.buttonInfoBg
    },
    '.success': {
      backgroundColor: variables.buttonSuccessBg
    },
    '.danger': {
      backgroundColor: variables.buttonDangerBg
    },
    'NativeBase.Text': {
      color: variables.badgeColor,
      fontSize: variables.fontSizeBase,
      lineHeight: variables.lineHeight - 1,
      textAlign: 'center',
      paddingHorizontal: 3
    },
    backgroundColor: variables.badgeBg,
    padding: variables.badgePadding,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
    justifyContent: variables.platform === PLATFORM.IOS ? 'center' : undefined,
    borderRadius: 13.5,
    height: 27
  };
  return badgeTheme;
};
