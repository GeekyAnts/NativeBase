import {
  VStack,
  Input,
  Button,
  FormControl,
  Heading,
  Box,
  Text,
  Divider,
  HStack,
  TextArea,
  Avatar,
  Select,
  Checkbox,
  Icon,
} from 'native-base';
import React from 'react';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';

export const Example = () => {
  const [language, setLanguage] = React.useState('eng');
  const [currency, setCurrency] = React.useState('usd');
  return (
    <VStack width="60%" space={4} my={6}>
      <Heading bold fontSize="2xl" pb={4}>
        Account Settings
      </Heading>
      <Divider />
      <Box py={4}>
        <HStack space={6}>
          <Box flex={1}>
            <Text fontSize="lg" fontWeight="semibold">
              Personal Info
            </Text>
          </Box>
          <Box flex={2}>
            <VStack space={6}>
              <FormControl>
                <FormControl.Label
                  _text={{ fontWeight: 'medium', fontSize: 'md' }}
                >
                  Name
                </FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{ fontWeight: 'medium', fontSize: 'md' }}
                >
                  Email
                </FormControl.Label>
                <Input editable={false} value="joe@nativebase.io" />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{ fontWeight: 'medium', fontSize: 'md' }}
                >
                  Bio
                </FormControl.Label>
                <TextArea resize="vertical" />
                <FormControl.HelperText>
                  Brief description for your profile. URLs are hyperlinked.
                </FormControl.HelperText>
              </FormControl>
            </VStack>
          </Box>
        </HStack>
      </Box>
      <Divider />
      <Box py={4}>
        <HStack space={6}>
          <Box flex={1}>
            <Text fontSize="lg" fontWeight="semibold">
              Profile Photo
            </Text>
          </Box>
          <Box flex={2}>
            <HStack alignItems="center" space={6}>
              <Avatar
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                }}
                size={'24'}
              >
                JD
              </Avatar>
              <FormControl>
                <Button.Group space={5}>
                  <Button
                    startIcon={
                      <Icon
                        as={Ionicons}
                        name="md-cloud-upload-sharp"
                        size={5}
                      />
                    }
                    colorScheme="light"
                  >
                    Change photo
                  </Button>
                  <Button colorScheme="red" variant="ghost">
                    Delete
                  </Button>
                </Button.Group>
                <FormControl.HelperText>
                  .jpg, .gif, or .png. Max file size 700K.
                </FormControl.HelperText>
              </FormControl>
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Divider />
      <Box py={4}>
        <HStack space={6}>
          <Box flex={1}>
            <Text fontSize="lg" fontWeight="semibold">
              Language
            </Text>
          </Box>
          <Box flex={2}>
            <VStack space={6}>
              <FormControl>
                <FormControl.Label
                  _text={{ fontWeight: 'medium', fontSize: 'md' }}
                >
                  Display Language
                </FormControl.Label>
                <Select
                  w={64}
                  selectedValue={language}
                  accessibilityLabel="Select your Language"
                  placeholder="Select your Language"
                  onValueChange={(itemValue: string) => {
                    setLanguage(itemValue);
                  }}
                >
                  <Select.Item label="English" value="eng" />
                  <Select.Item label="Hebrew" value="heb" />
                  <Select.Item label="Arabic" value="arb" />
                </Select>
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{ fontWeight: 'medium', fontSize: 'md' }}
                >
                  Display currency
                </FormControl.Label>
                <Select
                  w={64}
                  selectedValue={currency}
                  accessibilityLabel="Select your Currency"
                  placeholder="Select your Currency"
                  onValueChange={(itemValue: string) => {
                    setCurrency(itemValue);
                  }}
                >
                  <Select.Item label="USD ($)" value="usd" />
                  <Select.Item label="AED (dh)" value="aed" />
                  <Select.Item label="EUR (€)" value="eur" />
                </Select>
              </FormControl>
            </VStack>
          </Box>
        </HStack>
      </Box>
      <Divider />
      <Box py={4}>
        <HStack space={6}>
          <Box flex={1}>
            <Text fontSize="lg" fontWeight="semibold">
              Notifications
            </Text>
          </Box>
          <Box flex={2}>
            <VStack space={6}>
              <Checkbox value="updates">
                Get updates about the latest meetups.
              </Checkbox>
              <Checkbox value="notifications">
                Get notifications about your account activites.
              </Checkbox>
            </VStack>
          </Box>
        </HStack>
      </Box>
      <Divider />
      <Box py={4}>
        <HStack space={6}>
          <Box flex={1}>
            <Text fontSize="lg" fontWeight="semibold">
              Connect accounts
            </Text>
          </Box>
          <Box flex={2}>
            <Button.Group variant="outline" colorScheme="light" space={2}>
              <Button startIcon={<Icon as={EvilIcons} name="sc-github" />}>
                Connect Github
              </Button>
              <Button
                startIcon={
                  <Icon as={AntDesign} name="google" color="red.400" size={5} />
                }
              >
                Connect Google
              </Button>
            </Button.Group>
          </Box>
        </HStack>
      </Box>
      <Box py={4}>
        <HStack space={6}>
          <Box flex={1}></Box>
          <Box flex={2}>
            <Button.Group space={2}>
              <Button _text={{ color: 'white' }}>Save Changes</Button>
              <Button variant="outline" colorScheme="light">
                Cancel
              </Button>
            </Button.Group>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
};
