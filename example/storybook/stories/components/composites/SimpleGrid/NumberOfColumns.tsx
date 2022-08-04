import { SimpleGrid, Center } from 'native-base';
import React from 'react';

const items = 6;
const data = Array(items).fill(0);

export const Example = () => {
  return (
    <SimpleGrid columns={2} space={4} width="50%">
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
