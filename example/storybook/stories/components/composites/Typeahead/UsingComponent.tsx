import React from 'react';
import { Typeahead, Box, Icon, Heading } from 'native-base';

let countries = [
  'Afghanistan',
  'Australia',
  'India',
  'USA',
  'Germany',
  'France',
  'Iceland',
  'Russia',
  'Japan',
  'China',
  'Denmark',
  'Norway',
];

export function UsingComponent() {
  return (
    <Box>
      <Heading>Typeahead</Heading>
      <Typeahead
        mt={4}
        size="2xl"
        numberOfItems={6}
        options={countries}
        toggleIcon={({ isOpen }: any) => {
          return isOpen ? (
            <Icon name="arrow-drop-up" type="MaterialIcons" size={12} />
          ) : (
            <Icon name="arrow-drop-down" type="MaterialIcons" size={12} />
          );
        }}
      />
    </Box>
  );
}
