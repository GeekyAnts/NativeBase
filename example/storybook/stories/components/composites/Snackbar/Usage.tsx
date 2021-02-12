import React from 'react';
import { Text, Alert, Snackbar, VStack } from 'native-base';
export default function () {
  return (
    <>
      <Text>Snackbar will stay for 10 secs, default is 5 sec.</Text>
      <Snackbar
        autoHideDuration={10000}
        accessibilityAnnouncement="Sample warning message"
      >
        <VStack mx={4} space={4}>
          <Alert>
            <Alert.Icon />
            <Alert.Title> Hello World</Alert.Title>
          </Alert>
          <Alert status="success">
            <Alert.Icon />
            <Alert.Title>Account created</Alert.Title>
            <Alert.Description mt={2} ml={12}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </Alert.Description>
          </Alert>
        </VStack>
      </Snackbar>
    </>
  );
}
