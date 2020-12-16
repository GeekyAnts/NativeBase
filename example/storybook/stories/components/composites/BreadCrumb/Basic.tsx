import React from 'react';
import {
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  Box,
  Heading,
} from 'native-base';
export default function () {
  return (
    <Box>
      <Heading mb={4}>This is a Default BreadCrumb</Heading>
      <BreadCrumb>
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
