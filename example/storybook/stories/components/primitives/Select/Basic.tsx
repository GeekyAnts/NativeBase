import React from 'react';
import { Select } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState<string>('');
  return (
    <Select
      selectedValue={language}
      minWidth={200}
      onValueChange={(itemValue: string) => setLanguage(itemValue)}
    >
      <Select.Item label="Pick something" value="" />
      <Select.Item label="JavaScript" value="js" />
      <Select.Item label="TypeScript" value="ts" />
      <Select.Item label="C" value="c" />
      <Select.Item label="Python" value="py" />
      <Select.Item label="Java" value="java" />
    </Select>
  );
}
