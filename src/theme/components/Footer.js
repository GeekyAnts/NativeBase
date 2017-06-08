import variable from "./../variables/platform";

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const footerTheme = {
    "NativeBase.Left": {
      "NativeBase.Button": {
        ".transparent": {
          backgroundColor: "transparent",
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        "NativeBase.Icon": {
          color: variables.topTabBarActiveTextColor
        },
        "NativeBase.IconNB": {
          color: variables.topTabBarActiveTextColor
        },
        alignSelf: null
      },
      flex: 1,
      alignSelf: "center",
      alignItems: "flex-start"
    },
    "NativeBase.Body": {
      flex: 1,
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "row",
      "NativeBase.Button": {
        alignSelf: "center",
        ".transparent": {
          backgroundColor: "transparent",
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        ".full": {
          height: variables.footerHeight,
          flex: 1
        },
        "NativeBase.Icon": {
          color: variables.topTabBarActiveTextColor
        },
        "NativeBase.IconNB": {
          color: variables.topTabBarActiveTextColor
        }
      }
    },
    "NativeBase.Right": {
      "NativeBase.Button": {
        ".transparent": {
          backgroundColor: "transparent",
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        "NativeBase.Icon": {
          color: variables.topTabBarActiveTextColor
        },
        "NativeBase.IconNB": {
          color: variables.topTabBarActiveTextColor
        },
        alignSelf: null
      },
      flex: 1,
      alignSelf: "center",
      alignItems: "flex-end"
    },
    backgroundColor: variables.footerDefaultBg,
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: platform === "ios" && platformStyle !== "material"
      ? variables.borderWidth
      : undefined,
    borderColor: platform === "ios" && platformStyle !== "material"
      ? "#cbcbcb"
      : undefined,
    height: variables.footerHeight,
    elevation: 3,
    left: 0,
    right: 0
  };

  return footerTheme;
};
