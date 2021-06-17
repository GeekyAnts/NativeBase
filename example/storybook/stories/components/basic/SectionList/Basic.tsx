import React from 'react';
import { Box, SectionList } from 'native-base';
export const Example = () => {
  const data = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <Box px={5} py={2} rounded="md" my={2} bg="secondary.200">
          {item}
        </Box>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Box
          px={5}
          py={2}
          rounded="md"
          my={2}
          bg="primary.200"
          _text={{ fontWeight: 'bold' }}
        >
          {title}
        </Box>
      )}
    />
  );
};
