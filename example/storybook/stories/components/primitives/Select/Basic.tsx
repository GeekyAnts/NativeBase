import React from 'react';
import { Select, VStack, Switch, HStack, Text } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState<string>('');
  let [type, setType] = React.useState<'custom' | 'native' | undefined>(
    'custom'
  );
  return (
    <VStack alignItems="center" space={4}>
      <Select
        type={type}
        selectedValue={language}
        minWidth={200}
        accessibilityLabel="Select your favorite programming language"
        placeholder="Select your favorite programming language"
        onValueChange={(itemValue: string) => setLanguage(itemValue)}
      >
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
        <Select.Item label="Java" value="java" />
      </Select>
      <HStack space={2} alignItems="center">
        <Switch
          isChecked={type === 'native'}
          onToggle={() => {
            setType(type === 'custom' ? 'native' : 'custom');
          }}
        />
        <Text fontSize="md">{`Switch to ${
          type === 'custom' ? 'Native' : 'Custom'
        } Select`}</Text>
      </HStack>
    </VStack>
  );
}
