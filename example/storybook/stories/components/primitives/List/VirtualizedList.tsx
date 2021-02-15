import React from 'react';
import { VirtualizedList } from 'react-native';
import { List } from 'native-base';

const DATA: any = [];

const getItem = (_data: any, index: number) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data: any) => 500;

const Item = ({ title }: any) => (
  <List.Item
    bg="red.200"
    h="70"
    justifyContent="center"
    _text={{ fontSize: 32 }}
    p={5}
    borderBottomWidth={0}
    my={2}
  >
    {title}
  </List.Item>
);

export default function () {
  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item: any) => item.key}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
}
