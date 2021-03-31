import React from 'react';
import { Button, Actionsheet, useDisclose, Icon } from 'native-base';

export default function () {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={
              <Icon
                name="bat"
                type="MaterialCommunityIcons"
                color="muted.500"
                mr={5}
              />
            }
          >
            Movie
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                name="campfire"
                type="MaterialCommunityIcons"
                color="muted.500"
                mr={5}
              />
            }
          >
            Camping
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                name="chess-knight"
                type="MaterialCommunityIcons"
                color="muted.500"
                mr={5}
              />
            }
          >
            Chess
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
