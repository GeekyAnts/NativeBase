import React from 'react';
import { Button, Actionsheet, useDisclose, Icon } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialIcons name="share" />}
                color="muted.500"
                mr={3}
              />
            }
          >
            Share
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="link" />}
                color="muted.500"
                mr={3}
              />
            }
          >
            Link
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialIcons name="edit" />}
                color="muted.500"
                mr={3}
              />
            }
          >
            Edit name
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialIcons name="delete" />}
                color="muted.500"
                mr={3}
              />
            }
          >
            Delete Collection
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
