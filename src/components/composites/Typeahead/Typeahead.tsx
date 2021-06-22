import React from 'react';
import { useButton } from '@react-native-aria/button';
import { ComboBoxState, useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-native-aria/combobox';
import { useListBox, useOption } from '@react-native-aria/listbox';
import { ScrollView, findNodeHandle, Platform } from 'react-native';
import { Item } from '@react-stately/collections';
import Box from '../../primitives/Box';
import { Pressable } from '../../primitives/Pressable';
import Text from '../../primitives/Text';
import { extractInObject } from '../../../theme/tools';
import { ITypeaheadProps, IComboBoxProps, layoutPropsList } from './types';
import { Input } from '../../primitives/Input';
import { useThemeProps } from '../../../hooks';

export const Typeahead = React.forwardRef(
  (
    {
      onSelectedItemChange,
      options,
      renderItem,
      getOptionLabel,
      getOptionKey,
      onChange,
      numberOfItems,
      ...rest
    }: ITypeaheadProps,
    ref?: any
  ) => {
    return (
      <ComboBoxImplementation
        {...rest}
        onSelectionChange={onSelectedItemChange}
        items={
          numberOfItems !== undefined
            ? options.slice(0, numberOfItems)
            : options
        }
        onInputChange={onChange}
        ref={ref}
      >
        {(item: any) => {
          if (typeof item !== 'string' && getOptionLabel === undefined) {
            throw new Error('Please use getOptionLabel prop');
          }

          if (item.id === undefined && getOptionKey === undefined) {
            throw new Error('Please use getOptionKey prop');
          }

          const optionLabel = getOptionLabel ? getOptionLabel(item) : item;
          const optionKey = getOptionKey
            ? getOptionKey(item)
            : item.id !== undefined
            ? item.id
            : optionLabel;

          return (
            <Item textValue={optionLabel} key={optionKey}>
              {renderItem ? (
                renderItem(item)
              ) : (
                <Box p={2} justifyContent="center">
                  <Text>{optionLabel}</Text>
                </Box>
              )}
            </Item>
          );
        }}
      </ComboBoxImplementation>
    );
  }
);

const ComboBoxImplementation = React.forwardRef(
  (props: IComboBoxProps, ref?: any) => {
    const [layoutProps] = extractInObject(props, layoutPropsList);
    let state = useComboBoxState(props);

    let triggerRef = React.useRef(null);
    let inputRef = React.useRef(null);
    let listBoxRef = React.useRef(null);
    let popoverRef = React.useRef(null);

    let {
      buttonProps: triggerProps,
      inputProps,
      listBoxProps,
      labelProps,
    } = useComboBox(
      {
        ...props,
        inputRef,
        buttonRef: triggerRef,
        listBoxRef,
        popoverRef,
        menuTrigger: 'input',
      },
      state
    );

    const toggleIconSetter = () => {
      if (typeof props.toggleIcon === 'function')
        return props.toggleIcon({
          isOpen: state.isOpen,
        });
      return props.toggleIcon;
    };

    let { buttonProps } = useButton(triggerProps);

    return (
      <Box flexDirection="row" {...layoutProps} ref={ref}>
        <Box flex={1}>
          {props.label && (
            <Text {...labelProps} pb={1}>
              {props.label}
            </Text>
          )}
          <Input
            {...inputProps}
            ref={inputRef}
            InputRightElement={
              // @ts-ignore - RN has hitSlop type inconsistent for View and Pressable!
              <Pressable {...buttonProps} ref={triggerRef}>
                {toggleIconSetter()}
              </Pressable>
            }
          />

          {state.isOpen && (
            <ListBoxPopup
              {...listBoxProps}
              listBoxRef={listBoxRef}
              popoverRef={popoverRef}
              state={state}
              label={props.label}
            />
          )}
        </Box>
      </Box>
    );
  }
);

type IListBoxProps = {
  popoverRef: any;
  listBoxRef: any;
  state: ComboBoxState<any>;
  dropdownHeight: number;
  label: string;
};

function ListBoxPopup(props: IListBoxProps) {
  let { popoverRef, listBoxRef, state, dropdownHeight, label } = props;

  let { listBoxProps } = useListBox(
    {
      label,
      autoFocus: state.focusStrategy,
      disallowEmptySelection: true,
    },
    state,
    listBoxRef
  );

  return (
    <Box ref={popoverRef}>
      <Box position="absolute" width="100%" maxHeight={dropdownHeight ?? 200}>
        <ScrollView
          {...listBoxProps}
          keyboardShouldPersistTaps="handled"
          ref={(node) => {
            if (Platform.OS === 'web') {
              listBoxRef.current = findNodeHandle(node);
            } else {
              listBoxRef.current = node;
            }
          }}
        >
          {[...state.collection].map((item) => (
            <Option key={item.key} item={item} state={state} />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
}

function Option({ item, state }: { item: any; state: ComboBoxState<any> }) {
  const searchItemStyle = useThemeProps('TypeAheadSearchItem', {});

  let ref = React.useRef(null);
  let isDisabled = state.disabledKeys.has(item.key);
  let isSelected = state.selectionManager.isSelected(item.key);
  let isFocused = state.selectionManager.focusedKey === item.key;

  let { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldFocusOnHover: true,
      shouldUseVirtualFocus: true,
    },
    state,
    ref
  );

  let backgroundColor = searchItemStyle.backgroundColor;
  let opacity = 1;

  if (isSelected) {
    backgroundColor = searchItemStyle._focus.backgroundColor;
  } else if (isFocused) {
    backgroundColor = searchItemStyle._focus.backgroundColor;
  } else if (isDisabled) {
    opacity = 0.6;
    backgroundColor = searchItemStyle._disabled.backgroundColor;
  }

  return (
    <Pressable
      {...optionProps}
      opacity={opacity}
      cursor={
        isDisabled ? (Platform.OS === 'web' ? 'not-allowed' : null) : null
      }
      backgroundColor={backgroundColor}
      ref={ref}
    >
      {item.rendered}
    </Pressable>
  );
}
