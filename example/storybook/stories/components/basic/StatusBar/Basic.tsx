import React, { useState } from 'react';
import { StatusBar, Box, Text, Button } from 'native-base';

export const Example = () => {
  const [hidden, setHidden] = useState(false);
  const changeStatusBarVisibility = () => setHidden(!hidden);
  return (
    <Box flex={1} justifyContent="center" safeArea>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="default"
        showHideTransition="fade"
        hidden={hidden}
      />
      <Text textAlign="center" mb={3}>
        StatusBar Visibility:{'\n'}
        {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Box p={10}>
        <Button onPress={changeStatusBarVisibility}>Toggle StatusBar</Button>
      </Box>
    </Box>
  );
};
