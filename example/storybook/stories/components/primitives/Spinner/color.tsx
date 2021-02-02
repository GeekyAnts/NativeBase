import React from 'react';
import { Spinner, HStack, Icon } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Spinner color="danger.400" variant="dotted" size="sm" />
      <Spinner color="blue.500" variant="stroked" size="lg" />
      <Spinner color="gray.900" variant="multiColorDotted" />
      <Spinner color="yellow.500" variant="squareDotted" />
      <Spinner
        variant="custom"
        renderProp={<Icon name="search" color="warning.500" />}
      />
      <Spinner />
    </HStack>
  );
}
