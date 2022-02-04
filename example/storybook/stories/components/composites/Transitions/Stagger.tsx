import React from 'react';
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Icon,
  Center,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Center>
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
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="location-pin"
                _dark={{ color: 'warmGray.50' }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{ color: 'warmGray.50' }}
                size="6"
                name="microphone"
                color="warmGray.50"
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
              <Icon
                as={MaterialCommunityIcons}
                _dark={{ color: 'warmGray.50' }}
                size="6"
                name="video"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="photo-library"
                _dark={{ color: 'warmGray.50' }}
                color="warmGray.50"
              />
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
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{ color: 'warmGray.50' }}
            />
          }
        />
      </HStack>
    </Center>
  );
};
