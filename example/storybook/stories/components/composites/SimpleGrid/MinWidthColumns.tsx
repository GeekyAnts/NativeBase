import { SimpleGrid, Box } from 'native-base';
import React from 'react';

const items = 12;
const data = Array(items).fill(0);

export default function MinChildWidthSimpleGrid() {
  return (
    <SimpleGrid minChildWidth={70} space={4}>
      {data.map((_item, index) => {
        return <Box key={index} bg="primary.400" height={60} />;
      })}
    </SimpleGrid>
  );
}
