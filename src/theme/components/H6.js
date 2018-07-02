import variable from "./../variables/platform";

export default (variables = variable) => {
  const h6Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH6,
    lineHeight: variables.lineHeightH6,
  };

  return h6Theme;
};
