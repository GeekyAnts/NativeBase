import React from 'react';
import { VirtualizedList } from 'react-native';
import { List } from 'native-base';

const DATA = [];

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data) => 500;

const Item = ({ title }: { title: String }) => (
  <List.Item
    bg="emerald.200"
    borderRadius="md"
    justifyContent="center"
    _text={{ fontSize: '2xl' }}
    px={4}
    py={2}
    my={2}
  >
    {title}
  </List.Item>
);

export const Example = () => {
  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.key}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};
