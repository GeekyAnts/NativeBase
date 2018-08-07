import variable from "./../variables/platform";

export default (variables = variable) => {
  const h5Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH5,
    lineHeight: variables.lineHeightH5,
  };

  return h5Theme;
};
