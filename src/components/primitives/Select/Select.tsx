import React from 'react';
import type { ISelectProps } from './types';
import { Platform } from 'react-native';
import { Box, Icon, Input } from '..';
import { Actionsheet } from '../../composites/Actionsheet';
// import { FormControlContext } from '../../composites/FormControl';

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
  closeMenu: () => {},
});

const Select = (
  {
    onValueChange,
    selectedValue,
    children,
    dropdownIcon,
    placeholder,
    ...props
  }: ISelectProps,
  ref: any
) => {
  // const formControlContext: IFormControlContext = React.useContext(
  //   FormControlContext
  // );
  let [isOpen, setIsOpen] = React.useState<boolean>(false);

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
    (item: any) => item.value === selectedValue
  );
  const selectedItem =
    selectedItemArray && selectedItemArray.length ? selectedItemArray[0] : null;

  const commonInput = (
    <Input
      aria-hidden={true}
      value={selectedItem?.label}
      placeholder={placeholder}
      editable={false}
      focusable={false}
      // @ts-ignore RN supports this Prop
      // https://reactnative.dev/docs/textinput#onpressout
      onPressOut={() => setIsOpen(true)}
      InputRightElement={
        dropdownIcon ? (
          dropdownIcon
        ) : (
          <Icon type="MaterialIcons" name="keyboard-arrow-down" />
        )
      }
    />
  );

  return (
    <Box {...props}>
      {Platform.OS !== 'web' ? (
        <>
          <Box w="100%" h="100%" position="absolute" opacity="0" zIndex={1}>
            <select
              ref={ref}
              //@ts-ignore
              style={unstyledSelecWebtStyles}
              onChange={(e) => {
                onValueChange && onValueChange(e.target.value);
              }}
              aria-label={placeholder}
            >
              {children}
            </select>
          </Box>
          {commonInput}
        </>
      ) : (
        <>
          {commonInput}
          <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Actionsheet.Content>
              <Actionsheet.Header>{placeholder}</Actionsheet.Header>
              <SelectContext.Provider
                value={{
                  onValueChange,
                  selectedValue,
                  closeMenu: () => setIsOpen(false),
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
