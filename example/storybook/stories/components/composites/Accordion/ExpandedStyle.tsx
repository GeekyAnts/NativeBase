import React from 'react';
import { Accordion, Box } from 'native-base';
export default function () {
  return (
    <Box m={3}>
      <Accordion allowMultiple>
        <Accordion.AccordionItem>
          <Accordion.AccordionSummary
            _expanded={{ backgroundColor: 'orange.300' }}
          >
            <Box>Click me to see a different style</Box>
            <Accordion.AccordionIcon />
          </Accordion.AccordionSummary>
          <Accordion.AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.AccordionDetails>
        </Accordion.AccordionItem>
        <Accordion.AccordionItem id={9} isDisabled>
          <Accordion.AccordionSummary
            _disabled={{ backgroundColor: 'gray.300' }}
          >
            <Box>I'm Disabled 😢</Box>
            <Accordion.AccordionIcon />
          </Accordion.AccordionSummary>
          <Accordion.AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.AccordionDetails>
        </Accordion.AccordionItem>
      </Accordion>
    </Box>
  );
}
