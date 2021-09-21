import React from 'react';
import { Pressable, Text, Box, HStack, Spacer, Flex } from 'native-base';

export function Example() {
  return (
    <Pressable>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            bg={isPressed ? 'cyan.900' : isHovered ? 'cyan.800' : 'cyan.700'}
            p="5"
            rounded="8"
            style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
          >
            <HStack alignItems="flex-start">
              <Text fontSize={12} color="cyan.50" fontWeight="medium">
                Business
              </Text>
              <Spacer />
              <Text fontSize={10} color="cyan.100">
                1 month ago
              </Text>
            </HStack>
            <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
              Marketing License
            </Text>
            <Text mt="2" fontSize={14} color="cyan.100">
              Unlock powerfull time-saving tools for creating email delivery and
              collecting marketing data
            </Text>
            <Flex>
              {isFocused ? (
                <Text
                  mt="2"
                  fontSize={12}
                  fontWeight="medium"
                  bg="cyan.500"
                  color="cyan.200"
                  alignSelf="flex-start"
                >
                  Read More
                </Text>
              ) : (
                <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
                  Read More
                </Text>
              )}
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
}
