import React from 'react';
import { Select, VStack, CheckIcon } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState<string>('');

  return (
    <VStack alignItems="center" space={4}>
      <Select
        selectedValue={language}
        minWidth={200}
        accessibilityLabel="Select your favorite programming language"
        placeholder="Select your favorite programming language"
        onValueChange={(itemValue: string) => setLanguage(itemValue)}
        _selectedItem={{
          stackProps: { reversed: true },
          bg: 'primary.200',
          icon: <CheckIcon size={5} />,
        }}
      >
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
        <Select.Item label="Java" value="java" />
      </Select>
    </VStack>
  );
}
