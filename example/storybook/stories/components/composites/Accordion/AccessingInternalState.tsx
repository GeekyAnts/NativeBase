import React from 'react';
import { Accordion, Box, Icon } from 'native-base';
export default function () {
  return (
    <Box m={3}>
      <Accordion allowMultiple defaultIndex={[1]}>
        <Accordion.AccordionItem>
          <Accordion.AccordionSummary>
            <Box textAlign="left">Section 1 title</Box>
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
          {({ isExpanded }: any) => (
            <>
              <Accordion.AccordionSummary>
                <Box textAlign="left">{isExpanded ? 'Fire' : 'Snow'}</Box>
                {isExpanded ? (
                  <Icon name="fire" type="MaterialCommunityIcons" />
                ) : (
                  <Icon name="snowflake" type="MaterialCommunityIcons" />
                )}
              </Accordion.AccordionSummary>
              <Accordion.AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.AccordionDetails>
            </>
          )}
        </Accordion.AccordionItem>
      </Accordion>
    </Box>
  );
}
