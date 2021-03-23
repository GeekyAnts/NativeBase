import React from 'react';
import { Alert, CloseButton } from 'native-base';
import { select } from '@storybook/addon-knobs';

export default function () {
  return (
    <Alert
      status={select(
        'status',
        ['success', 'green', 'error', 'red', 'warning'],
        'error'
      )}
      colorScheme={select(
        'colorScheme',
        [
          'success',
          'green',
          'error',
          'red',
          'warning',
          'yellow',
          'light',
          'white',
          'dark',
          'black',
          'muted',
          'secondary',
          'comment',
          'grey',
          'default',
        ],
        'error'
      )}
      variant={select(
        'variant',
        ['left-accent', 'solid', 'subtle', 'top-accent'],
        'subtle'
      )}
    >
      <Alert.Icon />
      <Alert.Title>Error Alert</Alert.Title>
      <Alert.Description>description goes here </Alert.Description>
      <CloseButton position="absolute" right="8px" size="xs" />
    </Alert>
  );
}
