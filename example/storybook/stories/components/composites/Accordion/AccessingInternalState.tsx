import React from 'react';
import { Accordion, Box, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box m={3}>
      <Accordion allowMultiple defaultIndex={[1]}>
        <Accordion.Item>
          <Accordion.Summary>
            Section 1 title
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>

        <Accordion.Item>
          {({ isExpanded }: any) => (
            <>
              <Accordion.Summary>
                {isExpanded ? 'Fire' : 'Snow'}
                {isExpanded ? (
                  <Icon color="white" as={MaterialCommunityIcons} name="fire" />
                ) : (
                  <Icon as={MaterialCommunityIcons} name="snowflake" />
                )}
              </Accordion.Summary>
              <Accordion.Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Details>
            </>
          )}
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};
