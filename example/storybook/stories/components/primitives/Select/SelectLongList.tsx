import React from 'react';
import { FormControl, Select, Container, CheckIcon } from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('');
  const colorNames = [
    'Pink',
    'Crimson',
    'Red',
    'Maroon',
    'Brown',
    'Misty-Rose',
    'Salmon',
    'Coral',
    'Orange-Red',
    'Chocolate',
    'Orange',
    'Gold',
    'Ivory',
    'Yellow',
    'Olive',
    'Yellow-Green',
    'Lawngreen',
    'Chartreuse',
    'Lime',
    'Green',
    'Spring-green',
    'Aquamarine',
    'Turquoise',
    'Azure',
    'Aqua/Cyan',
    'Teal',
    'Lavender',
    'Blue',
    'Navy',
    'Blue-Violet',
    'Indigo',
    'Dark-Violet',
    'Plum',
    'Magenta',
    'Purple',
    'Red-Violet',
    'Tan',
    'Beige',
    'Slate-gray',
    'White',
    'White-Smoke',
    'Light-Gray',
    'Silver',
    'Dark-Gray',
    'Gray',
    'Dim-Gray',
    'Black',
  ];
  return (
    <Container>
      <FormControl>
        <FormControl.Label>Select Color</FormControl.Label>
        <Select
          selectedValue={value}
          minWidth="200"
          accessibilityLabel="Select a Color"
          placeholder="Select a Color"
          onValueChange={(itemValue) => {
            setValue(itemValue);
          }}
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          {colorNames.map((value, ind) => {
            return <Select.Item label={value} value={`${ind}`} />;
          })}
        </Select>
      </FormControl>
    </Container>
  );
};
