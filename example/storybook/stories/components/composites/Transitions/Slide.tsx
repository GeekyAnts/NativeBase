import React from 'react';
import { Slide, Button, Alert, Text, Box } from 'native-base';
export const Example = () => {
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const str = `${isOpenTop ? 'Hide' : 'Check Internet Connection'}`;
  return (
    <Box h="32" w="300">
      <Slide in={isOpenTop} placement="top">
        <Alert justifyContent="center" status="error">
          <Alert.Icon />
          <Text color="error.600" fontWeight="medium">
            No Internet Connection
          </Text>
        </Alert>
      </Slide>
      <Button
        mt="auto"
        onPress={() => setIsOpenTop(!isOpenTop)}
        variant="unstyled"
        bg="coolGray.700:alpha.30"
      >
        {str}
      </Button>
    </Box>
  );
};
