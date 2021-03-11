import React from 'react';
import { Box, Heading, Icon, AspectRatio, Image, Text } from 'native-base';
export const Composition = () => {
  return (
    <Box width={72} bg="gray.50" p={2}>
      <Box bg="white" shadow={1}>
        <Box>
          <AspectRatio ratio={16 / 9}>
            <Image
              source={{
                uri:
                  'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
          <Box
            bg="red.500"
            _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
            position="absolute"
            bottom={0}
            px={2}
            py={1}
          >
            PHOTOS
          </Box>
          <Box
            p={2}
            rounded="full"
            justifyContent="center"
            alignItems="center"
            bg="red.500"
            boxSize={10}
            position="absolute"
            right={0}
            m={2}
            _text={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: '8',
            }}
          >
            27 MAR
          </Box>
        </Box>
        <Box p={4}>
          <Heading size="md">Life in the Garden City</Heading>
          <Heading size="sm" mt={2} color="red.500" fontWeight="500">
            The Silicon Valley of India.
          </Heading>
          <Text mt={4} lineHeight={6} fontWeight={400}>
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <Box flexDirection="row" mt={4}>
            <Box flexDirection="row" alignItems="center">
              <Icon name="access-time" color="gray.500" />
              <Text ml={1} color="gray.500" fontWeight="500">
                6 mins ago
              </Text>
            </Box>
            <Box ml={4} flexDirection="row" alignItems="center">
              <Icon name="ios-chatbubbles" type="Ionicons" color="gray.500" />
              <Text ml={1} color="gray.500" fontWeight="500">
                39 comments
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
