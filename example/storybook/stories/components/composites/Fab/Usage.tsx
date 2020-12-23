import React from 'react';
import { Box, FabList, FabItem, Fab, Icon } from 'native-base';

export default function () {
  return (
    <Box flex={1} width="100%">
      <Box m={3}>Rest of the components.</Box>
      <Fab placement="bottom-right" slide="up" bottom={20} right={10}>
        <FabList>
          <FabItem bg="teal.200">
            <Icon name="headset" type="MaterialIcons" size={6} />
          </FabItem>
          <FabItem bg="red.200">
            <Icon name="palette" type="MaterialIcons" size={6} />
          </FabItem>
          <FabItem bg="green.200">
            <Icon name="push-pin" type="MaterialIcons" size={6} />
          </FabItem>
        </FabList>
        <FabItem bg="purple.200">
          <Icon name="gear" type="Octicons" size={6} />
        </FabItem>
      </Fab>
    </Box>
  );
}
