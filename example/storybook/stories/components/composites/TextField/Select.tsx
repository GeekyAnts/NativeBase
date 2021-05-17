import React from 'react';
import { TextField, Select } from 'native-base';

export const Example = () => {
  let [language, setLanguage] = React.useState<string>('');
  return (
    <TextField
      component="select"
      variant="filled"
      selectedValue={language}
      w="90%"
      accessibilityLabel="Select your favorite programming language"
      placeholder="Select your favorite programming language"
      onValueChange={(itemValue: string) => setLanguage(itemValue)}
      helperText="Sample helper text"
      errorMessage="Sample error message"
    >
      <Select.Item label="JavaScript" value="js" />
      <Select.Item label="TypeScript" value="ts" />
      <Select.Item label="C" value="c" />
      <Select.Item label="Python" value="py" />
      <Select.Item label="Java" value="java" />
    </TextField>
  );
};
