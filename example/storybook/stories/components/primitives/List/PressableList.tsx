import React from 'react';
import { List, Heading, Box } from 'native-base';

export const Example = () => {
  const [defaultColor, setDefaultColor] = React.useState('primary.400');
  return (
    <Box w="80%">
      <Heading
        px={2}
        py={4}
        bg={defaultColor}
        fontSize={24}
        color={defaultColor === 'primary.400' ? 'white' : 'gray.800'}
      >
        Default Theme Color (Pressable List Items)
      </Heading>
      <List my={2} py={0}>
        <List.Item
          _text={{ color: 'white' }}
          py={4}
          bg="primary.400"
          onPress={() => setDefaultColor('primary.400')}
        >
          primary.400
        </List.Item>
        <List.Item
          py={4}
          bg="secondary.400"
          onPress={() => setDefaultColor('secondary.400')}
        >
          secondary.400
        </List.Item>
        <List.Item
          py={4}
          bg="emerald.400"
          onPress={() => setDefaultColor('emerald.400')}
        >
          emerald.400
        </List.Item>
        <List.Item
          py={4}
          bg="blue.400"
          onPress={() => setDefaultColor('blue.400')}
        >
          blue.400
        </List.Item>
      </List>
    </Box>
  );
};
