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

export function UsingComponent() {
  const [items] = React.useState(animals);
  const [filterText, setFilterText] = React.useState('');

  const filteredItems = React.useMemo(() => {
    return items.filter(
      (item) => item.value.toLowerCase().indexOf(filterText.toLowerCase()) > -1
    );
  }, [items, filterText]);

  return (
    <Typeahead
      items={filteredItems}
      onInputChange={setFilterText}
      onSelectionChange={console.log}
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
