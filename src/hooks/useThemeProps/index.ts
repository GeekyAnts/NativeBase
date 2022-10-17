export { useThemeProps } from './useProps';
export { usePropsResolution } from './usePropsResolution';
import type { ComponentTheme } from '../../theme';
import { usePropsResolutionWithComponentTheme } from './usePropsResolution';
import merge from 'lodash.merge';
import { getStyledObject } from '../../utils/getStyledComponentAndObjects';
import { Platform } from 'react-native';
import { isLiteral, omitUndefined } from '../../theme/tools';
import {
  PSEUDO_PROP_COMPONENT_MAP,
  useColorMode,
  getThemeProps,
} from '../../core';
import { isEmptyObj } from '../../utils/isEmptyObj';
import { useNativeBaseConfig } from '../../core/NativeBaseContext';

const sizesExistsInTheme = (componentTheme: any, size: any) => {
  if (componentTheme?.sizes) {
    if (componentTheme.sizes[size]) {
      return true;
    }
  }
  return false;
};

export const useComponentThemePropsResolution = (
  componentTheme: ComponentTheme,
  incomingProps: any,
  theme?: any
) => {
  const { colorMode } = useColorMode();
  const providerId = useNativeBaseConfig('NativeBase').providerId;

  const incomingInternalThemeProps = merge.apply(
    {},
    incomingProps?.INTERNAL_themeStyle
  );
  const incomingStateProps = incomingProps?.stateProps;

  const modifiedIncomingProps = incomingProps;

  delete modifiedIncomingProps?.INTERNAL_themeStyle;
  delete modifiedIncomingProps?.stateProps;

  const styleObj = getStyledObject(
    theme,
    '',
    componentTheme,
    {
      platform: Platform.OS,
      colorMode: colorMode,
    },
    merge({}, modifiedIncomingProps),
    true
  );

  const resolvedPropsWithStateProps = usePropsResolutionWithComponentTheme(
    componentTheme,
    merge(
      {},
      styleObj?.unResolvedProps,
      styleObj?.restDefaultProps,
      modifiedIncomingProps
    ),
    theme,
    {}
  );

  resolvedPropsWithStateProps.flattenProps = merge(
    {},
    resolvedPropsWithStateProps.flattenProps,
    modifiedIncomingProps
  );

  let resolvedFlattenProps = resolvedPropsWithStateProps.flattenProps;
  const resolvedStateProps = {
    ...resolvedPropsWithStateProps?.stateProps,
    ...incomingStateProps,
  };

  const restDefaultWithStateProps = styleObj?.stateRestDefaultProps;
  const stateStyleFromProps = omitUndefined(styleObj?.stateStyleFromProps);

  for (const property in restDefaultWithStateProps) {
    resolvedFlattenProps[property] =
      resolvedPropsWithStateProps.stateProps[property] ??
      restDefaultWithStateProps[property];
  }
  // Merge default props with inline resolved props
  resolvedFlattenProps.INTERNAL_themeStyle = [
    styleObj.styleFromProps,
    incomingInternalThemeProps,
  ];

  resolvedStateProps.INTERNAL_themeStyle = isEmptyObj(stateStyleFromProps)
    ? []
    : [stateStyleFromProps];

  // merge rest default props with resolved props
  resolvedFlattenProps = {
    ...resolvedFlattenProps,
    ...styleObj.restDefaultProps,
  };

  if (resolvedFlattenProps.size) {
    if (
      !sizesExistsInTheme(componentTheme, resolvedFlattenProps.size) &&
      isLiteral(resolvedFlattenProps.size)
    ) {
      resolvedFlattenProps = {
        boxSize: resolvedFlattenProps.size,
        ...resolvedFlattenProps,
      };
    }

    resolvedFlattenProps.size = undefined;
  }

  for (const property in styleObj?.internalPseudoProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      const pseudoComponentThemeProps = getThemeProps(
        theme,
        providerId,
        ``,
        { colorMode, platform: Platform.OS },
        {},
        incomingProps,
        false
      );

      resolvedFlattenProps[property] = {
        ...pseudoComponentThemeProps.restDefaultProps,
        ...styleObj?.internalPseudoProps[property],
        ...resolvedFlattenProps[property],
        INTERNAL_themeStyle: resolvedFlattenProps[property]?.INTERNAL_themeStyle
          ? [
              pseudoComponentThemeProps.styleFromProps,
              ...resolvedFlattenProps[property].INTERNAL_themeStyle,
            ]
          : [pseudoComponentThemeProps.styleFromProps],
      };
    }
  }

  // for inline pseudo compoennt props- merge property
  for (const property in resolvedStateProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      if (resolvedFlattenProps[property]) {
        resolvedFlattenProps[property].stateProps =
          resolvedStateProps[property];
      } else {
        resolvedFlattenProps[property] = {
          stateProps: resolvedStateProps[property],
        };
      }
    }
  }

  const resolvedProps = omitUndefined({
    ...resolvedFlattenProps,
    stateProps: resolvedStateProps,
  });

  return resolvedProps;
};
