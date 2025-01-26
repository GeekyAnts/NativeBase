import React from 'react';
import { Center, SimpleGrid } from 'native-base';

const items = 6;
const data = Array(items).fill(0);

export const Example = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacingX={3}
      spacingY={4}
      bg="cyan.400"
      flex={1}
      width="50%"
      p={4}
    >
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
