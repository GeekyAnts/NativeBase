import React from 'react';
import { Accordion, Box } from 'native-base';
export const Example = () => {
  return (
    <Box m={3}>
      <Accordion allowMultiple>
        <Accordion.Item>
          <Accordion.Summary _expanded={{ backgroundColor: 'orange.300' }}>
            Click me to see a different style
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item id={9} isDisabled>
          <Accordion.Summary>
            I'm Disabled 😢
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};
