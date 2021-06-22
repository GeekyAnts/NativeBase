import React from 'react';
import { Typeahead, Icon, Box, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const animals = [
  { id: 1, value: 'Aardvark' },
  { id: 2, value: 'Kangaroo' },
  { id: 3, value: 'Snake' },
  { id: 4, value: 'Pikachu' },
  { id: 5, value: 'Tiger' },
  { id: 6, value: 'Godzilla' },
];

export function UsingComponentWithRenderItem() {
  const [filterText, setFilterText] = React.useState('');

  const filteredItems = React.useMemo(() => {
    return animals.filter(
      (item) => item.value.toLowerCase().indexOf(filterText.toLowerCase()) > -1
    );
  }, [filterText]);

  return (
    <Typeahead
      options={filteredItems}
      disabledKeys={[1]}
      width={400}
      onChange={setFilterText}
      getOptionLabel={(item) => item.value}
      getOptionKey={(item) => item.key}
      onSelectedItemChange={console.log}
      label="Select your favorite animal"
      renderItem={(item: any) => {
        return (
          <Box flexDirection="row" justifyContent="space-between" p={4}>
            <Box
              backgroundColor="black"
              height={10}
              width={10}
              borderRadius={9999}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="white">{item.value[0]}</Text>
            </Box>
            <Box>{item.value}</Box>
          </Box>
        );
      }}
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
