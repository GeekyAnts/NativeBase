import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
} from 'native-base';
import { text } from '@storybook/addon-knobs';
export default function () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb with String Separator</Heading>
      <Breadcrumb bold italic separator={text('Separator', '-')}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Home (This is currently active)</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}
