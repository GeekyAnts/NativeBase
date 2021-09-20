import React from 'react';
import { SectionList, Heading, Center } from 'native-base';
export const Example = () => {
  const data = [
    {
      title: 'Cyan',
      data: ['cyan.100', 'cyan.200', 'cyan.300', 'cyan.400', 'cyan.500'],
    },
    {
      title: 'Yellow',
      data: [
        'yellow.100',
        'yellow.200',
        'yellow.300',
        'yellow.400',
        'yellow.500',
      ],
    },
    {
      title: 'Violet',
      data: [
        'violet.100',
        'violet.200',
        'violet.300',
        'violet.400',
        'violet.500',
      ],
    },
  ];

  return (
    <SectionList
      px="12"
      mb="4"
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <Center py="4" minW="64" bg={item}>
          {item.split('.')[1]}
        </Center>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Center bg="gray.50" _dark={{ bg: 'gray.800' }}>
          <Heading fontSize="xl" mt="8" pb="4">
            {title}
          </Heading>
        </Center>
      )}
    />
  );
};
