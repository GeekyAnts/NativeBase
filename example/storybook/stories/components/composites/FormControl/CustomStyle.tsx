import React from 'react';
import {
  FormControl,
  Input,
  Stack,
  Text,
  Divider,
  Box,
  WarningOutlineIcon,
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Example = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <KeyboardAwareScrollView style={{ width: '100%' }}>
      <Stack
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{ base: '100%', md: '25%' }}
      >
        <Box>
          <Text bold fontSize="xl" mb="4">
            Default
          </Text>
          <FormControl mb="5">
            <FormControl.Label>Project Title</FormControl.Label>
            <Input />
            <FormControl.HelperText>
              Give your project a title.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
        <Box>
          <Text bold fontSize="xl" mb="4">
            Disabled
          </Text>
          <FormControl isDisabled mb="5">
            <FormControl.Label
              _disabled={{
                _text: {
                  color: 'gray.400',
                  fontWeight: 'bold',
                },
              }}
            >
              Project Title
            </FormControl.Label>
            <Input placeholder="Title" />
            <FormControl.HelperText>
              Give your project a title.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
        <Box>
          <Text bold fontSize="xl" mb="4">
            Invalid
          </Text>
          <FormControl isInvalid>
            <FormControl.Label>Project Title</FormControl.Label>
            <Input placeholder="Title" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Something is wrong.
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
      </Stack>
    </KeyboardAwareScrollView>
  );
};
