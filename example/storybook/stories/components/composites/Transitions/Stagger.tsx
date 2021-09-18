import React from 'react';
import { Box, useDisclose, IconButton, Stagger, HStack } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Box>
      <Box alignItems="center" minH="220">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
        >
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.400"
            colorScheme="indigo"
            borderRadius="full"
            icon={<MaterialIcons size={24} name="location-pin" color="white" />}
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <MaterialCommunityIcons
                size={24}
                name="microphone"
                color="white"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
            icon={
              <MaterialCommunityIcons size={24} name="video" color="white" />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.400"
            colorScheme="red"
            borderRadius="full"
            icon={
              <MaterialIcons size={24} name="photo-library" color="white" />
            }
          />
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <MaterialCommunityIcons
              size={24}
              name="dots-horizontal"
              color="white"
            />
          }
        />
      </HStack>
    </Box>
  );
};
