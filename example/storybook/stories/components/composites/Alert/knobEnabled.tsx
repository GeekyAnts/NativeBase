import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  CloseButton,
} from 'native-base';
import { select } from '@storybook/addon-knobs';

export default function () {
  return (
    <Alert
      status={select(
        'status',
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
      <AlertIcon />
      <AlertTitle>Error Alert</AlertTitle>
      <AlertDescription>description goes here </AlertDescription>
      <CloseButton position="absolute" right="8px" />
    </Alert>
  );
}
