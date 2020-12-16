import React from 'react';
import {
  Button,
  Divider,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  useDisclose,
} from 'native-base';

export default function () {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetContent>
          <ActionsheetHeader>Header</ActionsheetHeader>
          <ActionsheetItem>Option 1</ActionsheetItem>
          <Divider />
          <ActionsheetItem>Option 2</ActionsheetItem>
          <Divider />
          <ActionsheetItem>Option 3</ActionsheetItem>
        </ActionsheetContent>
        <ActionsheetFooter>
          <ActionsheetItem onPress={onClose}>Cancel</ActionsheetItem>
        </ActionsheetFooter>
      </Actionsheet>
    </>
  );
}
