import React, { useState, useCallback, forwardRef } from 'react';
import { ScrollView } from 'react-native';
import {
  Box,
  Input,
  Button,
  IInputProps,
  IBoxProps,
  Link,
} from '../../primitives';
import { useTypeahead } from '../../../hooks';
export type ITypeaheadProps = IBoxProps &
  IInputProps & {
    data: any[];
    renderItem: any;
    onChange?: Function;
    toggleIcon: any;
    dropdownHeight?: number | string;
    numberOfItems?: number;
    inputValue?: string;
    onSelectedItemChange?: any;
  };

const Typeahead = (
  {
    data,
    renderItem,
    onChangeText,
    toggleIcon,
    dropdownHeight,
    numberOfItems,
    onSelectedItemChange,
    inputValue,
    m,
    mt,
    mb,
    ml,
    mr,
    ...props
  }: ITypeaheadProps,
  ref: any
) => {
  const [inputItems, setInputItems] = React.useState(data);
  const marginalProps = { m, mt, mb, ml, mr };
  const {
    isOpen,
    getInputProps,
    getMenuItemProps,
    getMenuProps,
    getToggleButtonProps,
  } = useTypeahead({
    items: inputItems,
    itemToString: (item) => item.toString(),
    onInputValueChange: ({ inputValue }) => {
      onChangeText && onChangeText(inputValue);
      setInputItems(
        data.filter((item) =>
          item.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    },
    onSelectedItemChange,
  });
  const toggleIconSetter = () => {
    if (typeof toggleIcon === 'function') return toggleIcon({ isOpen });
    return toggleIcon;
  };

  const [dropdownTop, setDropDownTop]: any = useState(55);

  const onLayout = useCallback((event) => {
    const { height } = event.nativeEvent.layout;
    setDropDownTop(height % 2 === 0 ? height + 1 : height); //not to use theme values
  }, []);
  return (
    <Box
      width="100%"
      flexDirection="row"
      onLayout={onLayout}
      {...marginalProps}
    >
      <Box flex={1}>
        <Input
          {...props}
          {...getInputProps(inputValue, onChangeText)}
          InputRightElement={
            <Button variant="unstyled" m={0} p={0} {...getToggleButtonProps()}>
              {toggleIconSetter()}
            </Button>
          }
          ref={ref}
        />
      </Box>
      <Box
        position="absolute"
        top={dropdownTop}
        width="100%"
        height={dropdownHeight ? dropdownHeight : 200}
        {...getMenuProps()}
      >
        <ScrollView>
          {isOpen &&
            (numberOfItems && numberOfItems < inputItems.length
              ? inputItems.slice(0, numberOfItems)
              : inputItems
            ).map((item, index) => (
              <Link
                isUnderlined={false}
                key={`${item}${index}`}
                {...getMenuItemProps(item, index)}
              >
                {renderItem(item)}
              </Link>
            ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default forwardRef<any, ITypeaheadProps>(Typeahead);
