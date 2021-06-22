import React from 'react';
import { Typeahead, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const animals = [
  { id: 1, value: 'Aardvark' },
  { id: 2, value: 'Kangaroo' },
  { id: 3, value: 'Snake' },
  { id: 4, value: 'Pikachu' },
  { id: 5, value: 'Tiger' },
  { id: 6, value: 'Godzilla' },
];

export function UsingComponent() {
  const [filterText, setFilterText] = React.useState('');

  const filteredItems = React.useMemo(() => {
    return animals.filter(
      (item) => item.value.toLowerCase().indexOf(filterText.toLowerCase()) > -1
    );
  }, [filterText]);

  return (
    <Typeahead
      options={filteredItems}
      onChange={setFilterText}
      onSelectedItemChange={console.log}
      getOptionKey={(item) => item.key}
      getOptionLabel={(item) => item.value}
      label="Select your favorite animal"
      toggleIcon={({ isOpen }: any) => {
        return isOpen ? (
          <Icon as={MaterialIcons} name="arrow-drop-up" size={12} />
        ) : (
          <Icon as={MaterialIcons} name="arrow-drop-down" size={12} />
        );
      }}
    />
  );
}
