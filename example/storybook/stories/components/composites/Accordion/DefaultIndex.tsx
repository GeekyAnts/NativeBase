import React from 'react';
import { Accordion, Box } from 'native-base';
export default function () {
  return (
    <Box m={3}>
      <Accordion allowMultiple defaultIndex={[0, 2]}>
        <Accordion.AccordionItem>
          <Accordion.AccordionSummary>
            <Box>Section 1 title</Box>
            <Accordion.AccordionIcon />
          </Accordion.AccordionSummary>
          <Accordion.AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.AccordionDetails>
        </Accordion.AccordionItem>
        <Accordion.AccordionItem>
          <Accordion.AccordionSummary>
            <Box>Section 2 title</Box>
            <Accordion.AccordionIcon />
          </Accordion.AccordionSummary>
          <Accordion.AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.AccordionDetails>
        </Accordion.AccordionItem>
        <Accordion.AccordionItem>
          <Accordion.AccordionSummary>
            <Box>Section 3 title</Box>
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
