import { SimpleGrid, Center } from 'native-base';
import React from 'react';

const items = 12;
const data = Array(items).fill(0);

export default function NumberOfColumnsSimpleGrid() {
  return (
    <SimpleGrid columns={3} space={4}>
      {data.map((_item, index) => {
        return (
          <Center
            key={index}
            bg="primary.200"
            height={100}
            width={100}
            children={`${index}`}
          />
        );
      })}
    </SimpleGrid>
  );
}
