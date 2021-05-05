import React from 'react';
import type { ISelectProps } from './types';
import { Platform, View, Pressable, ScrollView } from 'react-native';
import { Actionsheet } from '../../composites/Actionsheet';
import Box from '../Box';
import { Input } from '../Input';
import { useFocusRing } from '@react-native-aria/focus';
import { useControllableState } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { useFormControl } from '../../composites/FormControl';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { ChevronDownIcon } from '../Icon/Icons';

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
  _selectedItem: null as any,
  _item: null as any,
});

const Select = (
  {
    onValueChange,
    selectedValue,
    children,
    dropdownIcon,
    placeholder,
    accessibilityLabel,
    defaultValue,
    size,
    _item,
    _selectedItem,
    wrapperRef,
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
  const themeProps = usePropsResolution('Input', { ...props, size });
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

  const {
    variant,
    customDropdownIconProps,
    _actionSheetContent,
    ...newProps
  } = usePropsResolution('Select', props);
  const [borderProps, remainingProps] = extractInObject(newProps, [
    ...stylingProps.border,
  ]);
  const [layoutProps, nonLayoutProps] = extractInObject(remainingProps, [
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    ...stylingProps.background,
  ]);

  const commonInput = (
    <Input
      aria-hidden={true}
      importantForAccessibility="no"
      value={selectedItem?.label}
      placeholder={placeholder}
      editable={false}
      focusable={false}
      size={size}
      variant={variant}
      InputRightElement={
        dropdownIcon ? (
          dropdownIcon
        ) : (
          <ChevronDownIcon {...customDropdownIconProps} />
        )
      }
      {...(isHovered ? themeProps._hover : {})}
      {...nonLayoutProps}
      {...borderProps}
    />
  );

  return (
    <Box
      borderWidth={1}
      borderColor="transparent"
      {...layoutProps}
      borderRadius={themeProps.borderRadius}
      {...(isFocusVisible ? themeProps._focus : {})}
      ref={wrapperRef}
    >
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
            ref={mergeRefs([ref, _ref])}
          >
            <View pointerEvents="none">{commonInput}</View>
          </Pressable>
          <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Actionsheet.Content {..._actionSheetContent}>
              <ScrollView style={{ width: '100%' }}>
                <SelectContext.Provider
                  value={{
                    onValueChange: setValue,
                    selectedValue: value,
                    _selectedItem: _selectedItem,
                    _item: _item,
                  }}
                >
                  {children}
                </SelectContext.Provider>
              </ScrollView>
            </Actionsheet.Content>
          </Actionsheet>
        </>
      )}
    </Box>
  );
};

export default React.forwardRef(Select);
