import React from 'react';
import { Typeahead, Icon, Box, Text } from 'native-base';

const animals = [
  { key: 1, value: 'Aardvark' },
  { key: 2, value: 'Kangaroo' },
  { key: 3, value: 'Snake' },
  { key: 4, value: 'Pikachu' },
  { key: 5, value: 'Tiger' },
  { key: 6, value: 'Godzilla' },
];

export function UsingComponentWithRenderItem() {
  return (
    <Typeahead
      items={animals}
      disabledKeys={[1]}
      width={400}
      onSelectionChange={console.log}
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
          <Icon name="arrow-drop-up" type="MaterialIcons" size={12} />
        ) : (
          <Icon name="arrow-drop-down" type="MaterialIcons" size={12} />
        );
      }}
    />
  );
}
