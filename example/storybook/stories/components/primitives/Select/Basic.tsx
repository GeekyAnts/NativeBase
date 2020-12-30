import React from 'react';
import { Icon, Select } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState<string>('');
  return (
    <Select
      placeholder="Pick language"
      selectedValue={language}
      width={150}
      onValueChange={(itemValue: string) => setLanguage(itemValue)}
      // itemStyle={{ fontSize: 'lg' }}
      selectedItemBg={'teal.400'}
      // isDisabled
      dropdownOpenIcon={
        <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
      }
      dropdownCloseIcon={
        <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
      }
    >
      <Select.Item label="JavaScript" value="js" />
      <Select.Item label="TypeScript" value="ts" />
      <Select.Item
        // isDisabled
        label="Java"
        value="java"
      />
    </Select>
  );
}
