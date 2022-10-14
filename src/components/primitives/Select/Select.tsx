import React, { forwardRef, memo } from 'react';
import type { ISelectProps } from './types';
import { Platform, Keyboard } from 'react-native';
import { Actionsheet } from '../../composites/Actionsheet';
import Box from '../Box';
import { Input } from '../Input';
import { useFocusRing } from '@react-native-aria/focus';
import { useControllableState } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { useFormControl } from '../../composites/FormControl';
import { ChevronDownIcon } from '../Icon/Icons';
import type { IButtonProps } from '../Button/types';
import { ScrollView } from '../../basic/ScrollView';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { FlatList } from '../../basic/FlatList';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { ISelectItemProps } from './types';
import { Pressable } from '../Pressable';

export const SelectContext = React.createContext({
  onValueChange: (() => {}) as any,
  selectedValue: null as any,
  _selectedItem: {} as IButtonProps,
  _item: {} as IButtonProps,
});

const Select = (
  {
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    variant,
    ...props
  }: ISelectProps,
  ref: any
) => {
  const selectProps = useFormControl({
    isDisabled: props.isDisabled,
    nativeID: props.nativeID,
  });
  const flatListData: ISelectItemProps[] = [];

  const isDisabled = selectProps.disabled;
  const tempFix = '__NativebasePlaceholder__';
  const _ref = React.useRef(null);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const { focusProps, isFocusVisible } = useFocusRing();
  const { hoverProps, isHovered } = useHover({ isDisabled }, _ref);

  const {
    onValueChange,
    selectedValue,
    children,
    dropdownIcon,
    dropdownCloseIcon,
    dropdownOpenIcon,
    placeholder,
    accessibilityLabel,
    defaultValue,
    _item,
    _selectedItem,
    onOpen,
    onClose,
    optimized,
    customDropdownIconProps,
    _actionSheet,
    _actionSheetContent,
    _actionSheetBody,
    _webSelect,
    ...resolvedProps
  } = usePropsResolution(
    'Select',
    props,
    {
      isDisabled,
      isHovered: isHoveredProp || isHovered,
      isFocused: isFocusedProp || isFocused,
      isFocusVisible: isFocusVisibleProp || isFocusVisible,
    },
    undefined
  );

  const [value, setValue] = useControllableState({
    value: selectedValue,
    defaultValue,
    onChange: (newValue) => {
      onValueChange && onValueChange(newValue);
      setIsOpen(false);
    },
  });

  const itemsList: Array<{
    label: string;
    value: string;
  }> = React.Children.toArray(children).map((child: any) => {
    return {
      label: child?.props?.label,
      value: child?.props?.value,
    };
  });

  const selectedItemArray = itemsList.filter(
    (item: any) => item?.value === value
  );

  const selectedItem =
    selectedItemArray && selectedItemArray.length ? selectedItemArray[0] : null;

  const contextValue = React.useMemo(() => {
    return {
      onValueChange: setValue,
      selectedValue: value,
      _selectedItem: _selectedItem ?? {},
      _item: _item ?? {},
    };
  }, [value, setValue, _selectedItem, _item]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  const rightIcon =
    isOpen && dropdownOpenIcon ? (
      dropdownOpenIcon
    ) : !isOpen && dropdownCloseIcon ? (
      dropdownCloseIcon
    ) : dropdownIcon ? (
      dropdownIcon
    ) : (
      <ChevronDownIcon {...customDropdownIconProps} />
    );

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  if (optimized) {
    React.Children.toArray(children).map((child: any) => {
      flatListData.push(child.props);
    });
  }

  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
    ...stylingProps.margin,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    'shadow',
    'opacity',
  ]);

  const commonInput = (
    <Input
      placeholder={placeholder}
      InputRightElement={rightIcon}
      {...nonLayoutProps}
      // NOTE: Adding ts-ignore as we're not exposing isFocused in the Input component
      // @ts-ignore-next-line
      isFocused={isFocused}
      isHovered={isHovered}
      aria-hidden={true}
      importantForAccessibility="no"
      value={selectedItem ? selectedItem.label : ''}
      editable={false}
      focusable={false}
      isDisabled={isDisabled}
      pointerEvents="none"
      variant={variant}
    />
  );

  return Platform.OS === 'android' || Platform.OS === 'ios' ? (
    <>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          setIsOpen(true);
          onOpen && onOpen();
        }}
        disabled={isDisabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        ref={mergeRefs([ref, _ref])}
        {...layoutProps}
      >
        {commonInput}
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={handleClose} {..._actionSheet}>
        <Actionsheet.Content {..._actionSheetContent}>
          {/* TODO: Replace ScrollVeiw with FlatList */}
          {optimized ? (
            <FlatList
              {..._actionSheetBody}
              data={flatListData}
              // eslint-disable-next-line no-shadow
              keyExtractor={(_item, index) => index.toString()}
              renderItem={({ item }: any) => {
                const isSelected = selectedValue === item?.value;
                return (
                  <Actionsheet.Item
                    onPress={() => {
                      if (!isDisabled) {
                        setValue(item?.value);
                      }
                    }}
                    accessibilityState={{ selected: isSelected }}
                    {...item}
                    {..._item}
                    {...(isSelected && _selectedItem)}
                  >
                    {item?.label}
                  </Actionsheet.Item>
                );
              }}
            />
          ) : (
            <ScrollView {..._actionSheetBody}>
              <SelectContext.Provider value={contextValue}>
                {children}
              </SelectContext.Provider>
            </ScrollView>
          )}
        </Actionsheet.Content>
      </Actionsheet>
    </>
  ) : (
    <Box {...layoutProps}>
      {/* <Box w="100%" h="100%" position="absolute" opacity="0" zIndex={1}> */}
      <select
        aria-readonly={selectProps.readOnly}
        required={selectProps.required}
        disabled={isDisabled}
        {...focusProps}
        {...hoverProps}
        ref={mergeRefs([ref, _ref])}
        //@ts-ignore
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={selectedItem === null ? tempFix : value}
        aria-label={placeholder}
        onFocus={() => {
          setIsFocused(true);
          onOpen && onOpen();
        }}
        onBlur={() => {
          setIsFocused(false);
          onClose && onClose();
        }}
        {..._webSelect}
      >
        <option disabled value={tempFix}>
          {placeholder}
        </option>
        {children}
      </select>
      {/* </Box> */}
      {commonInput}
    </Box>
  );
};

export default memo(forwardRef(Select));
