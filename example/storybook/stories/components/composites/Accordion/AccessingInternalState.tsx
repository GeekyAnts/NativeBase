import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon,
} from 'native-base';
export default function () {
  return (
    <Box m={3}>
      <Accordion allowMultiple defaultIndex={[1]}>
        <AccordionItem>
          <AccordionButton>
            <Box textAlign="left">Section 1 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }: any) => (
            <>
              <AccordionButton>
                <Box textAlign="left">{isExpanded ? 'Fire' : 'Snow'}</Box>
                {isExpanded ? (
                  <Icon name="fire" type="MaterialCommunityIcons" />
                ) : (
                  <Icon name="snowflake" type="MaterialCommunityIcons" />
                )}
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
