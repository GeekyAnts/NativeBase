import React from 'react';
import { Accordion, Box, Icon } from 'native-base';
export default function () {
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
                  <Icon
                    name="fire"
                    color="white"
                    type="MaterialCommunityIcons"
                  />
                ) : (
                  <Icon name="snowflake" type="MaterialCommunityIcons" />
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
}
