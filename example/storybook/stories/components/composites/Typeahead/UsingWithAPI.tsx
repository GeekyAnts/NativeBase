import React from 'react';
import { Typeahead, Icon, Spinner, Center } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const animals = [
  { id: 1, value: 'Aardvark' },
  { id: 2, value: 'Kangaroo' },
  { id: 3, value: 'Snake' },
  { id: 4, value: 'Pikachu' },
  { id: 5, value: 'Tiger' },
  { id: 6, value: 'Godzilla' },
];

const getAnimalsByTerm = (term: string) => {
  return animals.filter(
    (item) => item.value.toLowerCase().indexOf(term.toLowerCase()) > -1
  );
};

export function UsingWithAPI() {
  const [items, setItems] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setItems(getAnimalsByTerm(inputValue));
      setLoading(false);
    }, 1000);
  }, [inputValue]);

  return (
    <Typeahead
      options={items}
      getOptionLabel={(item) => item.value}
      onChange={setInputValue}
      onSelectedItemChange={console.log}
      label="Select your favorite animal"
      toggleIcon={({ isOpen }: any) => {
        if (loading) {
          return (
            <Center height={10} width={10}>
              <Spinner size="sm" />
            </Center>
          );
        } else if (isOpen) {
          return (
            <Center height={10} width={10}>
              <Icon as={MaterialIcons} name="arrow-drop-up" size={12} />
            </Center>
          );
        }
        return (
          <Center height={10} width={10}>
            <Icon as={MaterialIcons} name="arrow-drop-down" size={12} />
          </Center>
        );
      }}
    />
  );
}
