import variable from "./../variables/platform";

export default (variables = variable) => {
  const platform = variables.platform;
   
  const padding = { top: 10, right: 10, bottom: 10, left: 10 }; 
  if ( platform === 'android' ) {
    padding.top  = padding.bottom = 14;
    padding.left = padding.right  = 24;
  }

  const toastTheme = {
    ".danger": {
      backgroundColor: variables.brandDanger
    },
    ".warning": {
      backgroundColor: variables.brandWarning
    },
    ".success": {
      backgroundColor: variables.brandSuccess
    },
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: platform === "ios" ? 5 : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: padding.top,
    paddingBottom: padding.bottom,
    paddingLeft: padding.left,
    paddingRight: padding.right,
    minHeight: 50,
    "NativeBase.Text": {
      color: "#fff",
      flex: 1
    },
    "NativeBase.Button": {
      backgroundColor: "transparent",
      height: 30,
      elevation: 0,
      "NativeBase.Text": {
        fontSize: 14
      }
    }
  };

  return toastTheme;
};
