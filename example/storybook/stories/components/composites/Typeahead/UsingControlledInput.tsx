import React from 'react';
import { Typeahead, Icon } from 'native-base';

const animals = [
  { key: 1, value: 'Aardvark' },
  { key: 2, value: 'Kangaroo' },
  { key: 3, value: 'Snake' },
  { key: 4, value: 'Pikachu' },
  { key: 5, value: 'Tiger' },
  { key: 6, value: 'Godzilla' },
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
      items={filteredItems}
      onInputChange={setInputValue}
      inputValue={inputValue}
      onSelectionChange={(value) => console.log(value)}
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
