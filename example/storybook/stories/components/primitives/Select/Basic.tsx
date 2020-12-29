import React from 'react';
import { Icon, Select } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState('ts');
  return (
    <Select
      label="Pick language"
      placeholder="Pick language"
      selectedValue={language}
      width={200}
      onValueChange={(itemValue: string, itemIndex?: number) =>
        setLanguage(itemValue)
      }
      itemStyle={{ fontSize: 'lg' }} // Text styles
      selectedItemBg={'red.200'}
      // isDisabled
      dropdownIcon={<Icon name="menu" />}
    >
      <Select.Item label="JavaScript" value="js" />
      <Select.Item label="TypeScript" value="ts" />
      <Select.Item
        // isDisabled
        label="Java"
        value="java"
      />
    </Select>
    // Selected item should have different bg
  );
}
