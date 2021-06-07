import React from 'react';
import { ScrollView, VStack, Box } from 'native-base';
export const Example = () => {
  return (
    <ScrollView
      flex={1}
      bg="pink.200"
      px={90}
      _contentContainerStyle={{ bg: 'lime.300', px: 44 }}
      // style={{ backgroundColor: 'blue' }}
    >
      <VStack flex={1}>
        {[1, 1, 1, , 1, 1, 1, 1, 1, 1, 11, 1].map(() => (
          <Box rounded="lg" p={7} bg="primary.400" mx="auto" mb={3}>
            Hi
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};
