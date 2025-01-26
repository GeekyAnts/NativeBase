import React from 'react';
import { SimpleGrid, Center } from 'native-base';

const items = 6;
const data = Array(items).fill(0);

export const Example = () => {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} space={4} width="50%">
      {data.map((_item, index) => {
        return (
          <Center
            key={index}
            bg="orange.500"
            height={100}
            children={`${index}`}
          />
        );
      })}
    </SimpleGrid>
  );
};
