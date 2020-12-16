import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Button,
  Input,
} from 'native-base';
import type { TextInput } from 'react-native';

export default function () {
  const initialFocusRef = React.useRef<TextInput>(null);
  return (
    <Popover initialFocusRef={initialFocusRef} closeOnBlur={false}>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent width={250}>
        <PopoverCloseButton />
        <PopoverHeader fontSize={20} fontWeight={700}>
          Header
        </PopoverHeader>
        <PopoverBody>
          <Input
            mb={3}
            backgroundColor="white"
            ref={initialFocusRef}
            placeholder="I will get focused on Popover opening"
          />
          This Popover won't close on clicking outside the popover area.
        </PopoverBody>
        <PopoverFooter>This is the footer</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
