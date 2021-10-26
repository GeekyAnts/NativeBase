import React from 'react';
import {
  Button,
  useContrastText,
  useAccessibleColors,
  useTheme,
} from 'native-base';

const ButtonTemplate = ({ shade }: any) => {
  const colorContrast = useContrastText(`yellow.${shade}`);
  return (
    <Button
      colorScheme="yellow"
      key={`yellow.${shade}`}
      bg={`yellow.${shade}`}
      _text={{ color: colorContrast }}
      mb={1}
    >
      Save Changes
    </Button>
  );
};

export const Example = () => {
  let [, , toggleAccessibleColors] = useAccessibleColors();
  const { colors } = useTheme();

  return (
    <>
      {Object.keys(colors.yellow).map((key, index) => {
        if (index > 2 && index < 9) return <ButtonTemplate shade={key} />;
      })}
      <Button mt="10" onPress={toggleAccessibleColors} colorScheme="primary">
        Toggle Accessible Colors
      </Button>
    </>
  );
};
