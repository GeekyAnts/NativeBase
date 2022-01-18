import React from 'react';
import { Pressable, Text, Box, HStack, Spacer, Flex, Badge } from 'native-base';

export function Example() {
  return (
    <Box alignItems="center">
      <Pressable>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              maxW="96"
              borderWidth="1"
              borderColor="coolGray.300"
              shadow="3"
              bg={
                isPressed
                  ? 'coolGray.200'
                  : isHovered
                  ? 'coolGray.200'
                  : 'coolGray.100'
              }
              p="5"
              rounded="8"
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
            >
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{ color: 'white' }}
                  variant="solid"
                  rounded="4"
                >
                  Business
                </Badge>
                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  1 month ago
                </Text>
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl"
              >
                Marketing License
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                {isFocused ? (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    textDecorationLine="underline"
                    color="darkBlue.600"
                    alignSelf="flex-start"
                  >
                    Read More
                  </Text>
                ) : (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    color="darkBlue.600"
                  >
                    Read More
                  </Text>
                )}
              </Flex>
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
}
