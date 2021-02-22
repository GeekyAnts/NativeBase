import React from 'react';
import { Select, VStack, Text } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState<string>('js');
  return (
    <VStack alignItems="center" space={2}>
      <Select
        variant="native" //defaultValue
        selectedValue={language}
        minWidth={200}
        onValueChange={(itemValue: string) => setLanguage(itemValue)}
        androidIconColor="gray.500"
        androidPrompt="Language you love:"
      >
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
        <Select.Item label="Java" value="java" />
      </Select>
      <Text>{language}</Text>
    </VStack>
  );
}
