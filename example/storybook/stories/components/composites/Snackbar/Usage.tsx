import React from 'react';
import {
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Snackbar,
  VStack,
} from 'native-base';
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
            <AlertIcon />
            <AlertTitle> Hello World</AlertTitle>
          </Alert>
          <Alert status="success">
            <AlertIcon />
            <AlertTitle>Account created</AlertTitle>
            <AlertDescription mt={2} ml={12}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </AlertDescription>
          </Alert>
        </VStack>
      </Snackbar>
    </>
  );
}
