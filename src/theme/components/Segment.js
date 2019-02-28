// @flow

import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;

  const segmentTheme = {
    height: 45,
    borderColor: variables.segmentBorderColorMain,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: variables.segmentBackgroundColor,
    "NativeBase.Button": {
      alignSelf: "center",
      borderRadius: 0,
      paddingTop: 3,
      paddingBottom: 3,
      height: 30,
      backgroundColor: "transparent",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderColor: variables.segmentBorderColor,
      elevation: 0,
      ".active": {
        backgroundColor: variables.segmentActiveBackgroundColor,
        "NativeBase.Text": {
          color: variables.segmentActiveTextColor
        },
        "NativeBase.Icon": {
          color: variables.segmentActiveTextColor
        }
      },
      ".first": {
        borderTopLeftRadius: platform === "ios" ? 5 : undefined,
        borderBottomLeftRadius: platform === "ios" ? 5 : undefined,
        borderLeftWidth: 1
      },
      ".last": {
        borderTopRightRadius: platform === "ios" ? 5 : undefined,
        borderBottomRightRadius: platform === "ios" ? 5 : undefined
      },
      "NativeBase.Text": {
        color: variables.segmentTextColor,
        fontSize: 14
      },
      "NativeBase.Icon": {
        fontSize: 22,
        paddingTop: 0,
        color: variables.segmentTextColor
      }
    }
  };

  return segmentTheme;
};
