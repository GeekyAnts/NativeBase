import React from 'react';
import {
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  Snackbar,
} from 'native-base';
export default function () {
  return (
    <>
      <Text>Snackbar will stay for 10 secs, default is 5 sec.</Text>
      <Snackbar
        duration={10000}
        accessibilityAnnouncement="Sample warning message"
      >
        <Alert status="warning">
          <AlertIcon />
          <AlertDescription> Sample Warning message</AlertDescription>
        </Alert>
      </Snackbar>
    </>
  );
}
