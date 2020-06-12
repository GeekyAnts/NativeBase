
/**
 * @function extendThemeVars
 *
 * Don't use ES6 spread operator or Object.assign to extend the theme vars,
 * as they will not keep the getter/setters.
 *
 * see: https://stackoverflow.com/questions/60114652/object-assign-alternative-for-getters-setters
 */
export function extendThemeVars (themeVars, customVars) {

  customVars = customVars || {};

  Object.keys(customVars).forEach((key) => {
    themeVars[key] = customVars[key];
  });

  return themeVars;
}

