import React from 'react';
import {
  Button,
  useContrastText,
  useAccessibleColors,
  useTheme,
} from 'native-base';

const ButtonTemplate = ({ shade }: any) => {
  const colorContrast = useContrastText(`teal.${shade}`);
  return (
    <Button
      key={`primary.${shade}`}
      bg={`primary.${shade}`}
      _text={{ color: colorContrast }}
      mb={1}
    >
      NativeBase
    </Button>
  );
};

export const Example = () => {
  let [, , toggleAccessibleColors] = useAccessibleColors();
  const { colors } = useTheme();

  return (
    <>
      {Object.keys(colors.primary).map((key) => (
        <ButtonTemplate shade={key} />
      ))}
      <Button mt={2} onPress={toggleAccessibleColors} colorScheme="indigo">
        Toggle Accessible Colors
      </Button>
    </>
  );
};
