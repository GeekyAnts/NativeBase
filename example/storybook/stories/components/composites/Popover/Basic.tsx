import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
  Box,
} from 'native-base';

export default function () {
  return (
    <Box position="absolute" top={0}>
      <Popover>
        <PopoverTrigger>
          <Button>Trigger</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
