import React from 'react';
import type { NextPage } from 'next';
import { Text } from 'react-native';
import { Box, Stack, Button } from 'native-base';

const Home: NextPage = () => {
  return (
    <Stack
      // space={[10, 20, 32]}
      space={[10, 20, 24]}
      // space={'10'}
      direction={['row', 'column', 'row']}
      // direction={'column'}
      // flexWrap={'wrap'}
    >
      {/* <Text>hi</Text> */}
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>

      {/* <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button> */}
      {/* <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>
      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>
      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>
      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>
      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>
      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>
      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>
      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>

      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>

      <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button> */}
      {/* 
 <Button
        w="16"
        bg={['red.900', 'light.200', 'lightBlue.100']}
        // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button> */}
      {/* <Box boxSize="20" bg="red.100"></Box> */}
    </Stack>
  );
};

export default Home;
