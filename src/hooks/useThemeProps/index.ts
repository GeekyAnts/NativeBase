export { useThemeProps } from './useProps';
export { usePropsResolution } from './usePropsResolution';
import type { ComponentTheme } from '../../theme';
import {
  mergeFinalResolvedProps,
  usePropsResolutionWithComponentTheme,
} from './usePropsResolution';
import merge from 'lodash.merge';
import { getStyledObject } from '../../utils/getStyledComponentAndObjects';
import { Platform } from 'react-native';
import { omitUndefined } from '../../theme/tools';
import { ColorMode, useColorMode } from '../../core';
import { useNativeBaseConfig } from '../../core/NativeBaseContext';

const useResolvedFactoryProps = (
  styleObj: any,
  incomingProps: any,
  colorMode: ColorMode,
  theme: any,
  componentTheme: ComponentTheme,
  incomingInternalThemeProps: any,
  incomingStateProps: any
) => {
  const providerId = useNativeBaseConfig('NativeBase').providerId;

  const resolvedPropsWithStateProps = usePropsResolutionWithComponentTheme(
    componentTheme,
    incomingProps,
    theme,
    {}
  );

  resolvedPropsWithStateProps.stateProps = merge(
    {},
    resolvedPropsWithStateProps?.stateProps,
    incomingStateProps
  );

  styleObj.styleFromProps = merge(
    {},
    styleObj.styleFromProps,
    incomingInternalThemeProps
  );

  const stateStyleFromProps = omitUndefined(styleObj?.stateStyleFromProps);

  const resolvedProps = mergeFinalResolvedProps(
    componentTheme,
    styleObj,
    incomingProps,
    '',
    stateStyleFromProps,
    resolvedPropsWithStateProps,
    {
      component: '',
      theme,
      providerId,
      colorMode,
      ignoredProps: {},
      stateProps: {},
      notResolveThemeProps: false,
    }
  );

  return resolvedProps;
};

const getModiefiedIncomingProps = (incomingProps: any) => {
  const incomingInternalThemeProps = merge.apply(
    {},
    incomingProps?.INTERNAL_themeStyle
  );
  const incomingStateProps = incomingProps?.stateProps;

  const modifiedIncomingProps = incomingProps;

  delete modifiedIncomingProps?.INTERNAL_themeStyle;
  delete modifiedIncomingProps?.stateProps;

  return {
    modifiedIncomingProps,
    incomingInternalThemeProps,
    incomingStateProps,
  };
};

export const useComponentThemePropsResolution = (
  componentTheme: ComponentTheme,
  incomingProps: any,
  theme?: any
) => {
  const { colorMode } = useColorMode();

  const {
    modifiedIncomingProps,
    incomingInternalThemeProps,
    incomingStateProps,
  } = getModiefiedIncomingProps(incomingProps);

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

  const resolvedProps = useResolvedFactoryProps(
    styleObj,
    merge(
      {},
      styleObj?.unResolvedProps,
      styleObj?.restDefaultProps,
      modifiedIncomingProps
    ),
    colorMode,
    theme,
    componentTheme,
    incomingInternalThemeProps,
    incomingStateProps
  );

  return resolvedProps;
};
