import React from 'react';
import { Typeahead, Icon, Spinner, Center } from 'native-base';

const animals = [
  { key: 1, value: 'Aardvark' },
  { key: 2, value: 'Kangaroo' },
  { key: 3, value: 'Snake' },
  { key: 4, value: 'Pikachu' },
  { key: 5, value: 'Tiger' },
  { key: 6, value: 'Godzilla' },
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
      items={items}
      onInputChange={setInputValue}
      isLoading={loading}
      onSelectionChange={(value) => console.log(value)}
      label="Select your favorite animal"
      toggleIcon={({ isOpen, isLoading }: any) => {
        if (isLoading) {
          return (
            <Center height={10} width={10}>
              <Spinner size="sm" />
            </Center>
          );
        } else if (isOpen) {
          return (
            <Center height={10} width={10}>
              <Icon name="arrow-drop-up" type="MaterialIcons" size={12} />
            </Center>
          );
        }
        return (
          <Center height={10} width={10}>
            <Icon name="arrow-drop-down" type="MaterialIcons" size={12} />
          </Center>
        );
      }}
    />
  );
}
