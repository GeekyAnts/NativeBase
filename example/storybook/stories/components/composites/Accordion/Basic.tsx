import React from 'react';
import { Accordion } from 'native-base';
export default function () {
  return (
    <Accordion index={[0, 1]}>
      <Accordion.AccordionItem>
        <Accordion.AccordionSummary>
          Section 1 title
          <Accordion.AccordionIcon />
        </Accordion.AccordionSummary>
        <Accordion.AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.AccordionDetails>
      </Accordion.AccordionItem>
      <Accordion.AccordionItem>
        <Accordion.AccordionSummary>
          Section 2 title
          <Accordion.AccordionIcon />
        </Accordion.AccordionSummary>
        <Accordion.AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.AccordionDetails>
      </Accordion.AccordionItem>
      <Accordion.AccordionItem>
        <Accordion.AccordionSummary>
          Section 3 title
          <Accordion.AccordionIcon />
        </Accordion.AccordionSummary>
        <Accordion.AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.AccordionDetails>
      </Accordion.AccordionItem>
    </Accordion>
  );
}
