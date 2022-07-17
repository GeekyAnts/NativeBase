import React from 'react';
import { Switch, HStack, Text } from 'native-base';

export const Example = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <HStack alignItems="center" space={4}>
      <Text>Bluetooth</Text>
      <Switch
        value={isEnabled}
        onToggle={(value) => {
          setIsEnabled(value);
        }}
        size="sm"
      />
    </HStack>
  );
};
