import React from 'react';
import InputBase from './InputBase';
import Box from '../Box';
import type { IInputProps } from './types';
import { useThemeProps, usePlatformProps } from '../../../hooks';
import { themeTools } from '../../../theme';
import { useHover } from '@react-native-aria/interactions';

const styleSystemProps = {
  margin: [
    'margin',
    'm',
    'marginTop',
    'mt',
    'marginRight',
    'mr',
    'marginBottom',
    'mb',
    'marginLeft',
    'ml',
    'marginX',
    'mx',
    'marginY',
    'my',
  ],
  padding: [
    'padding',
    'p',
    'paddingTop',
    'pt',
    'paddingRight',
    'pr',
    'paddingBottom',
    'pb',
    'paddingLeft',
    'pl',
    'paddingX',
    'px',
    'paddingY',
    'py',
  ],
  border: [
    'border',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'borderRadius',
    'borderTop',
    'borderTopWidth',
    'borderTopStyle',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderRight',
    'borderRightWidth',
    'borderRightStyle',
    'borderRightColor',
    'borderBottom',
    'borderBottomWidth',
    'borderBottomStyle',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderLeft',
    'borderLeftWidth',
    'borderLeftStyle',
    'borderLeftColor',
    'borderX',
    'borderY',
  ],
  layout: [
    'width',
    'w',
    'height',
    'h',
    'display',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'size',
    'verticalAlign',
    'overflow',
    'overflowX',
    'overflowY',
  ],
  flexbox: [
    'alignItems',
    'alignContent',
    'justifyItems',
    'justifyContent',
    'flexWrap',
    'flexDirection',
    'flex',
    'flexGrow',
    'flexShrink',
    'flexBasis',
    'justifySelf',
    'alignSelf',
    'order',
  ],
  position: ['position', 'zIndex', 'top', 'right', 'bottom', 'left'],
  background: ['bg', 'backgroundColor'],
};

const InputAdvance = (
  {
    InputLeftElement,
    InputRightElement,
    onFocus,
    onBlur,
    inputProps,
    ...props
  }: IInputProps & {
    inputProps: any;
  },
  ref: any
) => {
  const inputThemeProps = {
    isDisabled: inputProps.disabled,
    isInvalid: inputProps.accessibilityInvalid,
    isReadOnly: inputProps.accessibilityReadOnly,
    isRequired: inputProps.required,
  };

  const themedProps = useThemeProps('Input', {
    ...inputThemeProps,
    ...props,
  });

  const {
    isInvalid,
    isDisabled,
    _hover,
    _disabled,
    _invalid,
    _focus,
    ...platformProps
  } = usePlatformProps(themedProps);
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const [
    layoutProps,
    remainingProps,
  ] = themeTools.extractInObject(platformProps, [
    ...styleSystemProps.margin,
    ...styleSystemProps.border,
    ...styleSystemProps.layout,
    ...styleSystemProps.flexbox,
    ...styleSystemProps.position,
    ...styleSystemProps.background,
  ]);

  // Extracting baseInputProps from remaining props
  const [, baseInputProps] = themeTools.extractInObject(remainingProps, [
    'variant',
  ]);

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      {...layoutProps}
      {...(isHovered && _hover)}
      {...(isFocused && _focus)}
      {...(isDisabled && _disabled)}
      {...(isInvalid && _invalid)}
      ref={_ref}
    >
      {InputLeftElement ? InputLeftElement : null}
      <InputBase
        inputProps={inputProps}
        {...baseInputProps}
        flex={1}
        disableFocusHandling
        ref={ref}
        variant="unstyled"
        onFocus={(e) => {
          handleFocus(true, onFocus ? () => onFocus(e) : () => {});
        }}
        onBlur={(e) => {
          handleFocus(false, onBlur ? () => onBlur(e) : () => {});
        }}
      />
      {InputRightElement ? InputRightElement : null}
    </Box>
  );
};

export default React.memo(React.forwardRef(InputAdvance));
