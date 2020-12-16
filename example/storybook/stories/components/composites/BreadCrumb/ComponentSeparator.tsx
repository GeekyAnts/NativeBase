import React from 'react';
import {
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  Box,
  Heading,
  Icon,
} from 'native-base';
export default function () {
  return (
    <Box>
      <Heading mb={4}>BreadCrumb with Custom Separator</Heading>
      <BreadCrumb
        spacing={1}
        separator={<Icon name="keyboard-arrow-right" size={5} />}
      >
        <BreadCrumbItem isCurrentPage>
          <BreadCrumbLink>Home (This is currently active)</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink>Docs</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadCrumbLink>
        </BreadCrumbItem>
      </BreadCrumb>
    </Box>
  );
}
