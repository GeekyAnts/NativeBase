import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  Icon,
  Text,
} from 'native-base';
export default function () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb Composition</Heading>
      <Breadcrumb spacing={2} fontSize="lg">
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Icon name="home" mr={1} />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Icon name="file-document" type="MaterialCommunityIcons" mr={1} />
            Docs
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            <Icon name="github" type="AntDesign" mr={1} />
            <Text>Github (This is currently active)</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}
