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
    <Box>
      <Popover
        trigger={(triggerProps: any) => {
          return (
            <Button {...triggerProps} bg="teal.200">
              Trigger
            </Button>
          );
        }}
      >
        {/* <PopoverTrigger>
          <Button>Trigger</Button>
        </PopoverTrigger> */}
        {/* <PopoverContent> */}
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        {/* </PopoverContent> */}
      </Popover>
    </Box>
  );
}
