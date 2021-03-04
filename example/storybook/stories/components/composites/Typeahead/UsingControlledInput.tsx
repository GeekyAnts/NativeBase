import React from 'react';
import { Typeahead, Icon } from 'native-base';

const animals = [
  { id: 1, value: 'Aardvark' },
  { id: 2, value: 'Kangaroo' },
  { id: 3, value: 'Snake' },
  { id: 4, value: 'Pikachu' },
  { id: 5, value: 'Tiger' },
  { id: 6, value: 'Godzilla' },
];

export function UsingControlledInput() {
  const [items] = React.useState(animals);
  const [inputValue, setInputValue] = React.useState('');

  const filteredItems = React.useMemo(() => {
    return items.filter(
      (item) => item.value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  }, [items, inputValue]);

  return (
    <Typeahead
      options={filteredItems}
      getOptionLabel={(item) => item.value}
      getOptionKey={(item) => item.key}
      onChange={setInputValue}
      inputValue={inputValue}
      onSelectedItemChange={console.log}
      label="Select your favorite animal"
      toggleIcon={({ isOpen }: any) => {
        return isOpen ? (
          <Icon name="arrow-drop-up" type="MaterialIcons" size={12} />
        ) : (
          <Icon name="arrow-drop-down" type="MaterialIcons" size={12} />
        );
      }}
    />
  );
}
