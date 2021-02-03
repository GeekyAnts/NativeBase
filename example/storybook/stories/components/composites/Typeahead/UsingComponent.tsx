import React from 'react';
import { Typeahead, Box, Text, Icon, Heading, useColorMode } from 'native-base';

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
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Heading>Typeahead</Heading>
      <Typeahead
        flex={1}
        mt={4}
        size="2xl"
        numberOfItems={6}
        data={countries}
        renderItem={(item: any) => {
          return (
            <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.600'} p={4}>
              <Text>{item}</Text>
            </Box>
          );
        }}
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
