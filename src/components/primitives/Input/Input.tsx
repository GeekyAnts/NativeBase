import React, { memo, forwardRef } from 'react';
import type { IInputProps } from './types';
import { TextInput, StyleSheet, View } from 'react-native';
import { useTheme } from '../../../hooks';
import { useColorMode } from '../../../core/color-mode';

// Helper pour convertir les valeurs éventuellement en string vers number si possible
const normalize = (val: any) => {
  if (typeof val === 'number') return val;
  const n = Number(val);
  return Number.isFinite(n) ? n : val;
};

// Input basé sur TextInput RN, mais conserve les éléments gauche/droite et le theming clair/sombre.
const Input = (
  {
  InputLeftElement,
  InputRightElement,
  leftElement,
  rightElement,
  isDisabled,
  isReadOnly,
  style,
  placeholderTextColor,
  width,
  w,
  h,
  borderRadius,
  borderWidth,
  borderColor,
  px,
  py,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  color,
  ...rest
}: IInputProps,
  ref: any
) => {
  const theme = useTheme?.() || {};
  const { colorMode } = useColorMode?.() || { colorMode: 'light' };
  const colors = theme.colors || {};

  const colorConfig =
    colorMode === 'dark'
      ? {
          backgroundColor: colors.dark?.['100'] || '#111',
          borderColor: colors.muted?.['700'] || '#555',
          text: colors.text?.['50'] || '#f5f5f5',
          placeholder: colors.text?.['600'] || '#9ca3af',
        }
      : {
          backgroundColor: colors.light?.['50'] || '#fff',
          borderColor: colors.muted?.['300'] || '#d1d5db',
          text: colors.text?.['900'] || '#111827',
          placeholder: colors.text?.['400'] || '#9ca3af',
        };

  const containerStyle = StyleSheet.flatten([
    defaultContainer,
    {
      backgroundColor: colorConfig.backgroundColor,
      borderColor: borderColor || colorConfig.borderColor,
      width: width ? normalize(width) : w ? normalize(w) : undefined,
      height: h ? normalize(h) : undefined,
      borderRadius: borderRadius ? normalize(borderRadius) : defaultContainer.borderRadius,
      borderWidth: borderWidth ? normalize(borderWidth) : defaultContainer.borderWidth,
      paddingHorizontal: px ? normalize(px) : defaultContainer.paddingHorizontal,
      paddingVertical: py ? normalize(py) : defaultContainer.paddingVertical,
    },
    style,
  ]);

  const textStyle = StyleSheet.flatten([
    styles.textInput,
    {
      color: color || colorConfig.text,
      fontSize: fontSize ? normalize(fontSize) : 16,
      fontFamily: fontFamily || undefined,
      fontWeight: fontWeight || undefined,
      fontStyle: fontStyle || undefined,
    },
  ]);

  return (
    <View style={containerStyle}>
      {InputLeftElement || leftElement}
      <TextInput
        ref={ref}
        style={textStyle}
        editable={!(isDisabled || isReadOnly)}
        placeholderTextColor={placeholderTextColor || colorConfig.placeholder}
        {...rest}
      />
      {InputRightElement || rightElement}
    </View>
  );
};

const defaultContainer = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  height: 44,
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderWidth: 1,
  borderRadius: 6,
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    height: '100%',
  },
});

export default memo(forwardRef(Input));
