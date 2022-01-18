import React from 'react';
import {
  Button,
  useContrastText,
  useAccessibleColors,
  useTheme,
  Center,
  HStack,
  Switch,
  Text,
} from 'native-base';

const ButtonTemplate = ({ shade }: any) => {
  const colorContrast = useContrastText(`emerald.${shade}`);
  return (
    <Center>
      <Button
        colorScheme="emerald"
        key={`emerald.${shade}`}
        bg={`emerald.${shade}`}
        _text={{
          color: colorContrast,
        }}
        mb={1}
      >
        Save
      </Button>
    </Center>
  );
};

export const Example = () => {
  let [, , toggleAccessibleColors] = useAccessibleColors();
  const { colors } = useTheme();
  return (
    <Center>
      <HStack space="3">
        {Object.keys(colors.yellow).map((key, index) => {
          if (index > 2 && index < 9) return <ButtonTemplate shade={key} />;
        })}
      </HStack>
      <HStack mt="6" space="3">
        <Text>Toggle Accessible Colors</Text>
        <Switch onToggle={toggleAccessibleColors} colorScheme="coolGray" />
      </HStack>
    </Center>
  );
};
