import React, { useState, useCallback, forwardRef } from 'react';
import { ScrollView } from 'react-native';
import Box from '../../primitives/Box';
import Input from '../../primitives/Input';
import Button from '../../primitives/Button';
import Link from '../../primitives/Link';
import Text from '../../primitives/Text';
import { useColorMode } from './../../../core';
import { useTypeahead } from './useTypeahead';
import { extractInObject } from '../../../theme/tools';
import { ITypeaheadProps, layoutPropsList } from './types';

const Typeahead = (
  {
    options,
    renderItem,
    onChangeText,
    toggleIcon,
    dropdownHeight,
    numberOfItems,
    onSelectedItemChange,
    inputValue,
    getOptionLabel,
    ...props
  }: ITypeaheadProps,
  ref: any
) => {
  const [inputItems, setInputItems] = React.useState(options);
  const [layoutProps, newProps] = extractInObject(props, layoutPropsList);
  const { colorMode } = useColorMode();
  let tempOptions: any[] = [];
  if (getOptionLabel) {
    options.map((value: any, _ind: number) => {
      tempOptions.push(getOptionLabel(value));
    });
    options = tempOptions;
  }

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
        options.filter((item: any) =>
          item.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    },
    onSelectedItemChange,
  });
  const toggleIconSetter = () => {
    if (typeof toggleIcon === 'function')
      return toggleIcon({
        isOpen: isOpen && getInputProps(inputValue, onChangeText).value !== '',
      });
    return toggleIcon;
  };

  // Causing App to crash , commenting this might have caused future bugs , might need a revisit
  // React.useEffect(() => {
  //   if (getInputProps(inputValue, onChangeText).value === '') {
  //     // getToggleButtonProps().onPress();
  //   }
  // }, [inputValue, onChangeText, getInputProps, getToggleButtonProps]);

  const [dropdownTop, setDropDownTop]: any = useState(55);

  const onLayout = useCallback((event) => {
    const { height } = event.nativeEvent.layout;
    setDropDownTop(height % 2 === 0 ? height + 1 : height); //not to use theme values
  }, []);
  return (
    <Box width="100%" flexDirection="row" onLayout={onLayout} {...layoutProps}>
      <Box flex={1}>
        <Input
          {...newProps}
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
            getInputProps(inputValue, onChangeText).value !== '' &&
            (numberOfItems && numberOfItems < inputItems.length
              ? inputItems.slice(0, numberOfItems)
              : inputItems
            ).map((item: any, index: number) => (
              <Link
                isUnderlined={false}
                key={`${item}${index}`}
                {...getMenuItemProps(item, index)}
              >
                {renderItem ? (
                  renderItem(item)
                ) : (
                  <Box
                    flex={1}
                    bg={colorMode === 'light' ? 'gray.100' : 'gray.600'}
                    p={4}
                  >
                    <Text>{item}</Text>
                  </Box>
                )}
              </Link>
            ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default React.memo(forwardRef(Typeahead));
export { useTypeahead };
