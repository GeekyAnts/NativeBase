import get from 'lodash.get';
import merge from 'lodash.merge';
import isEmpty from 'lodash.isempty';
import { useNativeBase } from '../useNativeBase';
import { useColorMode } from '../../core/color-mode';
import { omitUndefined, extractInObject } from '../../theme/tools';
import { useResponsiveSSRProps } from '../useResponsiveSSRProps';

export const useComponentThemeResolver = (
  component: string,
  incomingProps: any
) => {
  const { theme } = useNativeBase();
  const colorModeProps = useColorMode();
  const componentTheme = get(theme, `components.${component}`, {});
  const modifiedPropsForSSR = useResponsiveSSRProps(incomingProps);

  const [
    ignoredProps,
    cleanIncomingProps,
  ] = extractInObject(modifiedPropsForSSR, [
    'children',
    'onPress',
    'icon',
    'onOpen',
    'onClose',
  ]);

  const extendedTheme: Array<any> = [];
  if (!isEmpty(componentTheme)) extendedTheme.push(componentTheme);
  const resolveComponentTheme = (
    themeType: Array<string>,
    providedTheme: any
  ): any => {
    try {
      if (themeType[1]) {
        return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
          ? providedTheme[themeType[0]][themeType[1]]
          : providedTheme[themeType[0]][themeType[1]]({
              theme,
              ...incomingWithDefaultProps,
              ...colorModeProps,
            });
      } else {
        return typeof providedTheme[themeType[0]] !== 'function'
          ? providedTheme[themeType[0]]
          : providedTheme[themeType[0]]({
              theme,
              ...incomingWithDefaultProps,
              ...colorModeProps,
            });
      }
    } catch {
      return {};
    }
  };

  const incomingWithDefaultProps = merge(
    {},
    componentTheme.defaultProps || {},
    cleanIncomingProps
  );
  // STEP 1.5: resolving component theme
  let combinedBaseStyle = {};
  let combinedVariantStyle = {};
  let combinedSizeStyle = {};
  extendedTheme.map((extededComponentTheme: any) => {
    if (extededComponentTheme.baseStyle) {
      combinedBaseStyle = {
        ...combinedBaseStyle,
        ...resolveComponentTheme(['baseStyle'], extededComponentTheme),
      };
    }

    if (incomingWithDefaultProps.variant) {
      if (extededComponentTheme.variants) {
        combinedVariantStyle = {
          ...combinedVariantStyle,
          ...resolveComponentTheme(
            ['variants', incomingWithDefaultProps.variant],
            extededComponentTheme
          ),
        };
      }
    }
    if (
      incomingWithDefaultProps.size &&
      extededComponentTheme?.sizes &&
      extededComponentTheme?.sizes[incomingWithDefaultProps.size]
    ) {
      if (
        typeof extededComponentTheme.sizes[incomingWithDefaultProps.size] ===
          'string' ||
        typeof extededComponentTheme.sizes[incomingWithDefaultProps.size] ===
          'number'
      ) {
        incomingWithDefaultProps.size =
          extededComponentTheme.sizes[incomingWithDefaultProps.size];
      } else {
        combinedSizeStyle = {
          ...combinedSizeStyle,
          ...resolveComponentTheme(
            ['sizes', incomingWithDefaultProps.size],
            extededComponentTheme
          ),
        };
        incomingWithDefaultProps.size = undefined;
      }
    }
  });
  const defaultStyles = merge(
    {},
    combinedBaseStyle,
    combinedVariantStyle,
    combinedSizeStyle,
    incomingWithDefaultProps
  );
  const resolvedProps = omitUndefined({
    ...defaultStyles,
    ...ignoredProps,
  });

  // STEP 5: Return
  return resolvedProps;
};
