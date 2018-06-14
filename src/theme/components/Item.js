import { Platform } from "react-native";

import variable from "./../variables/platform";

export default (variables = variable) => {
  const itemTheme = {
    ".floatingLabel": {
      "NativeBase.Input": {
        height: 50,
        top: 8,
        paddingTop: 3,
        paddingBottom: 7,
        ".multiline": {
          minHeight: variables.inputHeightBase,
          paddingTop: Platform.OS === "ios" ? 10 : 3,
          paddingBottom: Platform.OS === "ios" ? 14 : 10
        }
      },
      "NativeBase.Label": {
        top: 8
      },
      "NativeBase.Icon": {
        top: 6,
        paddingTop: 8
      },
      "NativeBase.IconNB": {
        top: 6,
        paddingTop: 8
      }
    },
    ".fixedLabel": {
      "NativeBase.Label": {
        position: null,
        top: null,
        left: null,
        right: null,
        flex: 1,
        height: null,
        width: null,
        fontSize: variables.inputFontSize
      },
      "NativeBase.Input": {
        flex: 2,
        fontSize: variables.inputFontSize
      }
    },
    ".stackedLabel": {
      "NativeBase.Label": {
        position: null,
        top: null,
        left: null,
        right: null,
        paddingTop: 5,
        alignSelf: "flex-start",
        fontSize: variables.inputFontSize - 2
      },
      "NativeBase.Icon": {
        marginTop: 36
      },
      "NativeBase.Input": {
        alignSelf: Platform.OS === "ios" ? "stretch" : "flex-start",
        flex: 1,
        width: Platform.OS === "ios" ? null : variables.deviceWidth - 25,
        fontSize: variables.inputFontSize,
        lineHeight: variables.inputLineHeight - 6,
        ".secureTextEntry": {
          fontSize: variables.inputFontSize - 4
        },
        ".multiline": {
          paddingTop: Platform.OS === "ios" ? 9 : undefined,
          paddingBottom: Platform.OS === "ios" ? 9 : undefined,
        }
      },
      flexDirection: null,
      minHeight: variables.inputHeightBase + 15
    },
    ".inlineLabel": {
      "NativeBase.Label": {
        position: null,
        top: null,
        left: null,
        right: null,
        paddingRight: 20,
        height: null,
        width: null,
        fontSize: variables.inputFontSize
      },
      "NativeBase.Input": {
        paddingLeft: 5,
        fontSize: variables.inputFontSize
      },
      flexDirection: "row"
    },
    "NativeBase.Label": {
      fontSize: variables.inputFontSize,
      color: variables.inputColorPlaceholder,
      paddingRight: 5
    },
    "NativeBase.Icon": {
      fontSize: 24,
      paddingRight: 8
    },
    "NativeBase.IconNB": {
      fontSize: 24,
      paddingRight: 8
    },
    "NativeBase.Input": {
      ".multiline": {
        height: null
      },
      height: variables.inputHeightBase,
      color: variables.inputColor,
      flex: 1,
      top: Platform.OS === "ios" ? 1.5 : undefined,
      fontSize: variables.inputFontSize
    },
    ".underline": {
      "NativeBase.Input": {
        paddingLeft: 15
      },
      ".success": {
        borderColor: variables.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variables.inputErrorBorderColor
      },
      borderWidth: variables.borderWidth * 2,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variables.inputBorderColor
    },
    ".regular": {
      "NativeBase.Input": {
        paddingLeft: 8
      },
      "NativeBase.Icon": {
        paddingLeft: 10
      },
      ".success": {
        borderColor: variables.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variables.inputErrorBorderColor
      },
      borderWidth: variables.borderWidth * 2,
      borderColor: variables.inputBorderColor
    },
    ".rounded": {
      "NativeBase.Input": {
        paddingLeft: 8
      },
      "NativeBase.Icon": {
        paddingLeft: 10
      },
      ".success": {
        borderColor: variables.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variables.inputErrorBorderColor
      },
      borderWidth: variables.borderWidth * 2,
      borderRadius: 30,
      borderColor: variables.inputBorderColor
    },

    ".success": {
      "NativeBase.Icon": {
        color: variables.inputSuccessBorderColor
      },
      "NativeBase.IconNB": {
        color: variables.inputSuccessBorderColor
      },
      ".rounded": {
        borderRadius: 30,
        borderColor: variables.inputSuccessBorderColor
      },
      ".regular": {
        borderColor: variables.inputSuccessBorderColor
      },
      ".underline": {
        borderWidth: variables.borderWidth * 2,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: variables.inputSuccessBorderColor
      },
      borderColor: variables.inputSuccessBorderColor
    },

    ".error": {
      "NativeBase.Icon": {
        color: variables.inputErrorBorderColor
      },
      "NativeBase.IconNB": {
        color: variables.inputErrorBorderColor
      },
      ".rounded": {
        borderRadius: 30,
        borderColor: variables.inputErrorBorderColor
      },
      ".regular": {
        borderColor: variables.inputErrorBorderColor
      },
      ".underline": {
        borderWidth: variables.borderWidth * 2,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: variables.inputErrorBorderColor
      },
      borderColor: variables.inputErrorBorderColor
    },
    ".disabled": {
      "NativeBase.Icon": {
        color: "#384850"
      },
      "NativeBase.IconNB": {
        color: "#384850"
      }
    },

    borderWidth: variables.borderWidth * 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: variables.inputBorderColor,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 2
  };

  return itemTheme;
};
