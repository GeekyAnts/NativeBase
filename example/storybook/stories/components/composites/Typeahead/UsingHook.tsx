import React from 'react';
import {
  useTypeahead,
  Box,
  Input,
  Button,
  Text,
  Icon,
  IconButton,
} from 'native-base';
import { ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

let countries = [
  'Afghanistan',
  'Australia',
  'India',
  'USA',
  'Germany',
  'France',
  'Iceland',
  'Russia',
  'Japan',
  'China',
  'Denmark',
  'Norway',
];

export function UsingHook() {
  const [inputItems, setInputItems] = React.useState(countries);

  const {
    isOpen,
    getInputProps,
    getMenuItemProps,
    getMenuProps,
    getToggleButtonProps,
  } = useTypeahead({
    items: inputItems,
    itemToString: (item: any) => item.toString(),
    onInputValueChange: ({ inputValue }: { inputValue: string }) => {
      setInputItems(
        countries.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <Box width="60%" flexDirection="row">
      <Box flex={1}>
        <Input size="2xl" {...getInputProps()} />
      </Box>
      <Box>
        <IconButton
          bg="gray.300"
          {...getToggleButtonProps()}
          icon={
            isOpen ? (
              <Icon as={MaterialIcons} name="arrow-drop-up" size={12} />
            ) : (
              <Icon as={MaterialIcons} name="arrow-drop-down" size={12} />
            )
          }
        />
      </Box>
      <Box
        position="absolute"
        top={55}
        width="100%"
        height="200"
        {...getMenuProps()}
      >
        <ScrollView>
          {isOpen &&
            inputItems.map((item, index) => (
              <Button
                key={`${item}${index}`}
                {...getMenuItemProps(item, index)}
              >
                <Text>{item}</Text>
              </Button>
            ))}
        </ScrollView>
      </Box>
    </Box>
  );
}
