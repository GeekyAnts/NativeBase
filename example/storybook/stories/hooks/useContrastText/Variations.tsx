import React from 'react';
import {
  Button,
  useContrastText,
  useAccessibleColors,
  useTheme,
} from 'native-base';
export default function () {
  let [, , toggleAccessibleColors] = useAccessibleColors();
  const { colors } = useTheme();
  return (
    <>
      {Object.keys(colors.teal).map((key) => {
        const colorContrast = useContrastText(`teal.${key}`);
        return (
          <Button
            key={`teal.${key}`}
            bg={`teal.${key}`}
            _text={{ color: colorContrast }}
            mb={1}
          >
            NativeBase
          </Button>
        );
      })}
      <Button mt={2} onPress={toggleAccessibleColors} bg={'indigo.600'}>
        Toggle Accessible Colors
      </Button>
    </>
  );
}
