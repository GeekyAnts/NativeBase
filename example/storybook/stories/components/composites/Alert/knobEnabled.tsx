import React from 'react';
import { Alert, Box, Icon, IconButton } from 'native-base';
import { select } from '@storybook/addon-knobs';

export default function () {
  return (
    <Box mx={3} w="90%">
      <Alert
        status={select(
          'status',
          ['success', 'green', 'error', 'red', 'warning'],
          'error'
        )}
        colorScheme={'error'}
        variant={select(
          'variant',
          ['left-accent', 'solid', 'subtle', 'top-accent'],
          'subtle'
        )}
        action={
          <IconButton icon={<Icon name="close" color="gray.400" size="md" />} />
        }
        actionProps={{ alignSelf: 'center' }}
      >
        <Alert.Icon />
        <Alert.Title>Error Alert</Alert.Title>
        <Alert.Description>Description </Alert.Description>
      </Alert>
    </Box>
  );
}
