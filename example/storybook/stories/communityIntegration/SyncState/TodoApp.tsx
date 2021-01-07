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
import { createDocStore } from '@syncstate/core';
import { Provider, useDoc } from '@syncstate/react';
export default function () {
  const store = createDocStore({
    todos: [
      { title: 'code', isCompleted: true },
      { title: 'sleep', isCompleted: false },
      { title: 'repeat', isCompleted: false },
    ],
    filter: 'all',
  });

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
const TodoApp = () => {
  const todoPath = '/todos';
  const [todos, setTodos] = useDoc(todoPath);
  const [input, setInput] = React.useState('');
  console.log(todos, 'Todos'); //log todos array

  const addItem = (todoItem: any) => {
    setTodos((todos: any) => {
      todos.push({
        title: todoItem,
        isCompleted: false,
      });
    });
    setInput('');
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
              addItem(input);
              setInput('');
            }}
          >
            <Icon type="FontAwesome5" name="plus" />
          </Button>
        }
        onChangeText={(v) => setInput(v)}
        value={input}
        placeholder="Add Item"
      />
      <VStack>
        {todos.map((item: any, itemI: any) => (
          <TodoItem
            item={item}
            itemI={itemI}
            todoItemPath={todoPath + '/' + itemI}
          />
        ))}
      </VStack>
    </VStack>
  );
};
const TodoItem = ({ item, itemI, todoItemPath }: any) => {
  console.log(todoItemPath); //log todoItemPath

  const [todoItem, setTodoItem] = useDoc(todoItemPath);
  const [, setTodos] = useDoc('/todos', Infinity);

  console.log(todoItem, 'todoItem'); //log todoItem

  const handleDelete = (index: number) => {
    setTodos((todos: any) => {
      todos.splice(index, 1);
    });
  };
  const handleStatusChange = () => {
    setTodoItem((todoItem: any) => {
      todoItem.isCompleted = !todoItem.isCompleted;
    });
  };
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      key={item.title + itemI.toString()}
    >
      <Checkbox
        colorScheme="emerald"
        isChecked={item.isCompleted}
        onChange={handleStatusChange}
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
  );
};
