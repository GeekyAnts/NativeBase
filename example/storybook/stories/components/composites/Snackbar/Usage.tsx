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
          <Alert variant="solid">
            <Alert.Icon />
            <Alert.Title> Hello World</Alert.Title>
          </Alert>
          <Alert status="success" variant="solid">
            <Alert.Icon />
            <Alert.Title>Account Created</Alert.Title>
            <Alert.Description mt={3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </Alert.Description>
          </Alert>
        </VStack>
      </Snackbar>
    </>
  );
}
