import React from 'react';
import {
  Input,
  Button,
  IconButton,
  Checkbox,
  Text,
  VStack,
  HStack,
  Heading,
  Icon,
} from 'native-base';

export default function () {
  const instState = [
    { title: 'code', isCompleted: true },
    { title: 'sleep', isCompleted: false },
    { title: 'repeat', isCompleted: false },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState('');
  const addItem = (title: string) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ]);
  };
  const handleDelete = (index: number) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };
  const handleStatusChange = (index: number) => {
    const temp = list.map((item, itemI) =>
      itemI !== index
        ? item
        : {
            ...item,
            isCompleted: !item.isCompleted,
          }
    );
    setList(temp);
  };
  return (
    <VStack space={4} flex={1} w="90%" mt={4}>
      <Heading color="emerald.400">Todo App</Heading>
      <Input
        variant="filled"
        w="100%"
        InputRightElement={
          <Button
            colorScheme="emerald"
            ml={1}
            onPress={() => {
              addItem(inputValue);
              setInputValue('');
            }}
          >
            <Icon type="FontAwesome5" name="plus" />
          </Button>
        }
        onChangeText={(v) => setInputValue(v)}
        value={inputValue}
        placeholder="Add Item"
      />
      <VStack>
        {list.map((item, itemI) => (
          <HStack
            w="100%"
            justifyContent="space-between"
            key={item.title + itemI.toString()}
          >
            <Checkbox
              colorScheme="emerald"
              isChecked={item.isCompleted}
              onChange={() => handleStatusChange(itemI)}
              value={item.title}
            >
              <Text mx={2} strikeThrough={item.isCompleted}>
                {item.title}
              </Text>
            </Checkbox>
            <IconButton
              colorScheme="emerald"
              icon={<Icon type="FontAwesome5" name="trash" />}
              onPress={() => handleDelete(itemI)}
            />
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}
