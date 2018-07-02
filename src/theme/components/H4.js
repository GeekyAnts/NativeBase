import variable from "./../variables/platform";

export default (variables = variable) => {
  const h4Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH4,
    lineHeight: variables.lineHeightH4,
  };

  return h4Theme;
};
