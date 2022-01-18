import React from 'react';
import {
  FormControl,
  Checkbox,
  Text,
  Container,
  WarningOutlineIcon,
  Box,
} from 'native-base';

export const Example = () => {
  const [groupValue, setGroupValue] = React.useState(['Phone', 'Email']);

  return (
    <Box alignItems="center">
      <Container>
        <FormControl isInvalid>
          <FormControl.Label _text={{ fontSize: 'lg', bold: true }}>
            Preferred contact method
          </FormControl.Label>
          <Text fontSize="md">Selected Values: </Text>
          <Checkbox.Group
            mt="2"
            colorScheme="green"
            defaultValue={groupValue}
            accessibilityLabel="choose multiple items"
            onChange={(values) => {
              setGroupValue(values || []);
            }}
            alignItems="flex-start"
          >
            <Checkbox value="Phone" my="1">
              Phone
            </Checkbox>
            <Checkbox value="Email" my="1">
              Email
            </Checkbox>
            <Checkbox value="Message" my="1">
              Message
            </Checkbox>
            <Checkbox value="Fax" my="1">
              Fax
            </Checkbox>
          </Checkbox.Group>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            You must select at least three methods
          </FormControl.ErrorMessage>
        </FormControl>
      </Container>
    </Box>
  );
};
