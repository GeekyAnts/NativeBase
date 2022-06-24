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
  Stack,
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
  const [, , toggleAccessibleColors] = useAccessibleColors();
  const { colors } = useTheme();
  return (
    <Center>
      <Stack space="3" direction={['column', 'row']}>
        {Object.keys(colors.yellow).map((key, index) => {
          if (index > 2 && index < 9) return <ButtonTemplate shade={key} />;
        })}
      </Stack>
      <HStack mt="6" space="3">
        <Text>Toggle Accessible Colors</Text>
        <Switch onToggle={toggleAccessibleColors} colorScheme="coolGray" />
      </HStack>
    </Center>
  );
};
