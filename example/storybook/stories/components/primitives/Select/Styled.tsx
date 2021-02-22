import React from 'react';
import { Icon, Select, VStack, Text } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState<string>('js');
  return (
    <VStack alignItems="center" space={2}>
      <Select
        variant="styled"
        placeholder="Pick language"
        _placeholder={{ color: 'teal.500' }}
        selectedValue={language}
        width={150}
        onValueChange={(itemValue: string) => setLanguage(itemValue)}
        selectedItemBg={'blue.500'}
        _selectedItem={{ color: 'white' }}
        // isDisabled
        dropdownOpenIcon={
          <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
        }
        dropdownCloseIcon={
          <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
        }
        _item={{ color: 'red.500' }}
      >
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="Java" value="java" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
      </Select>
      <Text>{language}</Text>
    </VStack>
  );
}
