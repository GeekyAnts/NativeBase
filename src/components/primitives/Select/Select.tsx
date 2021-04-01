import React from 'react';
import type { ISelectProps } from './types';
import { Platform, View, Pressable } from 'react-native';
import { Actionsheet } from '../../composites/Actionsheet';
import Icon from '../Icon';
import Box from '../Box';
import { Input } from '../Input';
import { useFocusRing } from '@react-native-aria/focus';
import { useControllableState, useThemeProps } from '../../../hooks';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { useFormControl } from '../../composites/FormControl';

const unstyledSelecWebtStyles = {
  width: '100%',
  height: '100%',
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
};

export const SelectContext = React.createContext({
  onValueChange: (() => {}) as any,
  selectedValue: null as any,
});

const Select = (
  {
    onValueChange,
    selectedValue,
    children,
    variant,
    dropdownIcon,
    placeholder,
    accessibilityLabel,
    defaultValue,
    ...props
  }: ISelectProps,
  ref: any
) => {
  const selectProps = useFormControl({
    isDisabled: props.isDisabled,
    nativeID: props.nativeID,
  });

  const isDisabled = selectProps.disabled;

  const _ref = React.useRef(null);
  const themeProps = useThemeProps('Input', props);
  let [isOpen, setIsOpen] = React.useState<boolean>(false);

  const { focusProps, isFocusVisible } = useFocusRing();
  const { hoverProps, isHovered } = useHover({ isDisabled }, _ref);

  const [value, setValue] = useControllableState({
    value: selectedValue,
    defaultValue,
    onChange: (newValue) => {
      onValueChange && onValueChange(newValue);
      setIsOpen(false);
    },
  });

  let itemsList: Array<{ label: string; value: string }> = React.Children.map(
    children,
    (child: any) => {
      return {
        label: child.props.label,
        value: child.props.value,
      };
    }
  );

  const selectedItemArray = itemsList.filter(
    (item: any) => item.value === value
  );
  const selectedItem =
    selectedItemArray && selectedItemArray.length ? selectedItemArray[0] : null;

  const commonInput = (
    <Input
      aria-hidden={true}
      importantForAccessibility="no"
      value={selectedItem?.label}
      placeholder={placeholder}
      editable={false}
      focusable={false}
      variant={variant}
      InputRightElement={
        dropdownIcon ? (
          dropdownIcon
        ) : (
          <Icon type="MaterialIcons" name="keyboard-arrow-down" />
        )
      }
      {...(isFocusVisible ? themeProps._focus : {})}
      {...(isHovered ? themeProps._hover : {})}
    />
  );

  return (
    <Box {...props}>
      {Platform.OS === 'web' ? (
        <>
          <Box w="100%" h="100%" position="absolute" opacity="0" zIndex={1}>
            <select
              {...selectProps}
              disabled={isDisabled}
              {...focusProps}
              {...hoverProps}
              ref={mergeRefs([ref, _ref])}
              //@ts-ignore
              style={unstyledSelecWebtStyles}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
              aria-label={placeholder}
            >
              {children}
            </select>
          </Box>
          {commonInput}
        </>
      ) : (
        <>
          <Pressable
            onPress={() => setIsOpen(true)}
            disabled={isDisabled}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="button"
          >
            <View pointerEvents="none">{commonInput}</View>
          </Pressable>
          <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Actionsheet.Content>
              <SelectContext.Provider
                value={{
                  onValueChange: setValue,
                  selectedValue: value,
                }}
              >
                {children}
              </SelectContext.Provider>
            </Actionsheet.Content>
          </Actionsheet>
        </>
      )}
    </Box>
  );
};

export default React.forwardRef(Select);
