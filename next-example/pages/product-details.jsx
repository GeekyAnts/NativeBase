import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { useState } from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  ScrollView,
  Pressable,
  Button,
  Stack,
  Link,
  Hidden,
  IconButton,
  useColorModeValue,
} from 'native-base';
import DashboardLayout from '../layouts/DashboardLayout';
import { MoonIcon } from 'native-base';
const product = {
  title: 'Body Suit',
  category: 'Mother care',
  rate: '500',
  rating: 4.9,
  numberOfRatings: 120,
  description: `Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.Your Body suit has a round neck with detail along the shoulder,short sleeves and snap button closer along the front.`,
};
const tabs = [
  {
    id: 1,
    title: 'Description',
    component: <Description productDescription={product.description} />,
  },
  {
    id: 2,
    title: 'Review',
    component: <Review />,
  },
];
const sizeOptions = [
  {
    size: 'New Born',
  },
  {
    size: 'Tiny Baby',
  },
  {
    size: '0-3 M',
  },
];
const reviews = [
  {
    imageUrl: require('../assets/laura.png')?.default?.src,
    name: 'Laura Jones',
    time: '02 Jan 2021',
    review:
      "I ordered this product for my 2 M old baby but it's too small. Go for 3-6M size even if you're ordering for a 3M old. Product quality is good.",
  },
  {
    imageUrl: require('../assets/wade.png')?.default?.src,
    name: 'Wade Warren',
    time: '02 Jan 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
];

function SizeOptions({ options }) {
  return (
    <HStack space="2" alignItems="center">
      {options.map((item, index) => {
        return (
          <Button
            p={3}
            key={index + ''}
            variant="unstyled"
            _text={{
              _light: {
                color: 'textDark.800',
              },
              _dark: {
                color: 'textDark.50',
              },
              fontSize: 'sm',
              fontWeight: 'normal',
            }}
            _light={{
              bg: 'primary.50',
              _hover: {
                bg: 'primary.200',
              },
              _pressed: {
                bg: 'primary.300',
              },
            }}
            _dark={{
              bg: 'backgroundDark.700',
              _hover: {
                bg: 'backgroundDark.600',
              },
              _pressed: {
                bg: 'backgroundDark.500',
              },
            }}
          >
            {item.size}
          </Button>
        );
      })}
    </HStack>
  );
}

function ProductInfo({ productInfo }) {
  const textColorA = useColorModeValue('textLight.800', 'textDark.50');
  const textColorB = useColorModeValue('textLight.500', 'textDark.400');
  return (
    <Box>
      <HStack
        alignItems="center"
        space="1"
        mt={{
          base: 4,
          md: 0,
        }}
      >
        <Text fontSize="lg" color={textColorA} fontWeight="medium">
          {productInfo.title}
        </Text>
        <MoonIcon />
        <Text
          fontSize="sm"
          fontWeight="normal"
          color={textColorA}
          lineHeight="21"
        >
          {productInfo.rating}
        </Text>
        <Text
          fontSize="sm"
          fontWeight="normal"
          color={textColorB}
          lineHeight="21"
        >
          {productInfo.numberOfRatings}
        </Text>
      </HStack>
      <Text
        fontSize="md"
        fontWeight="normal"
        color={textColorB}
        lineHeight="24"
      >
        {productInfo.category}
      </Text>
      <Text
        fontSize="xl"
        fontWeight="medium"
        color={textColorA}
        lineHeight="30"
      >
        ₹{productInfo.rate}
      </Text>
    </Box>
  );
}

function Description({ productDescription }) {
  return (
    <Text
      mt="4"
      fontSize="sm"
      fontWeight="normal"
      lineHeight="21"
      _light={{
        color: 'textLight.800',
      }}
      _dark={{
        color: 'textDark.50',
      }}
    >
      {productDescription}
    </Text>
  );
}

function Review() {
  return (
    <VStack mt="5" space="8">
      {reviews.map((item, idx) => {
        return (
          <VStack key={idx} space="3">
            <HStack space="2">
              <Avatar height="10" width="10" source={item.imageUrl} />
              <VStack space="1">
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _dark={{
                    color: 'textDark.50',
                  }}
                  _light={{
                    color: 'textLight.800',
                  }}
                  lineHeight="21"
                >
                  {item.name}
                </Text>
                <HStack>
                  {Array.from(
                    {
                      length: 5,
                    },
                    (_, index) => (
                      <MoonIcon />
                    )
                  )}
                </HStack>
              </VStack>
              <Text
                fontSize="sm"
                ml="auto"
                _light={{
                  color: 'textLight.500',
                }}
                _dark={{
                  color: 'textDark.400',
                }}
                lineHeight="21"
              >
                {item.time}
              </Text>
            </HStack>
            <Text
              alignItems="center"
              _light={{
                color: 'textLight.800',
              }}
              _dark={{
                color: 'textDark.50',
              }}
              fontSize="sm"
              lineHeight="21"
            >
              {item.review}
            </Text>
          </VStack>
        );
      })}
    </VStack>
  );
}

function TabItem({ tabName, currentTab, handleTabChange }) {
  return (
    <Pressable onPress={() => handleTabChange(tabName)}>
      <Text
        fontSize="sm"
        fontWeight="medium"
        letterSpacing="0.4"
        _light={{
          color: tabName === currentTab ? 'primary.900' : 'textLight.500',
        }}
        _dark={{
          color: tabName === currentTab ? 'primary.500' : 'textDark.400',
        }}
        px={4}
        py={2}
      >
        {tabName}
      </Text>
      {tabName === currentTab && (
        <Box
          borderTopLeftRadius="sm"
          borderTopRightRadius="sm"
          _light={{
            bg: 'primary.900',
          }}
          _dark={{
            bg: 'primary.500',
          }}
          h="1"
        />
      )}
    </Pressable>
  );
}

function Tabs() {
  const [tabName, setTabName] = React.useState('Description');
  const [tabChildren, setTabChildren] = useState(
    <Description productDescription={product.description} />
  );
  return (
    <>
      <HStack space="5" borderRadius="sm">
        {tabs.map(({ id, title, component }) => (
          <TabItem
            key={id}
            tabName={title}
            currentTab={tabName}
            handleTabChange={(tab) => {
              setTabName(tab);
              setTabChildren(component);
            }}
          />
        ))}
      </HStack>
      {tabChildren}
    </>
  );
}

export default function ProductDetails() {
  return (
    <DashboardLayout
      title="Body Suit"
      displaySidebar={false}
      header={{
        searchbar: false,
      }}
    >
      <ScrollView bounces={false}>
        <Stack
          px={{
            base: '4',
            md: '8',
          }}
          py={{
            base: '5',
            md: '8',
          }}
          flex={1}
          rounded={{
            md: 'sm',
          }}
          _light={{
            bg: 'backgroundLight.0',
          }}
          _dark={{
            bg: 'backgroundDark.800',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            p={2}
            _light={{
              bg: 'backgroundLight.100',
            }}
            _dark={{
              bg: 'backgroundDark.700',
            }}
            borderRadius="md"
            alignItems="center"
            w={{
              md: '55%',
            }}
            // flex="1"
            h={{
              base: '262',
              md: '652',
            }}
            justifyContent="center"
            mr={{
              base: 0,
              md: 4,
            }}
          >
            <Box
              bg="yellow.400"
              w={{ base: 100, md: '100%' }}
              h="100%"
              rounded={{
                base: 'none',
                md: 'lg',
              }}
            />
          </Stack>

          <VStack space="5" flex={1} bg="red.500">
            <Box height="500px" width="500px"></Box>
          </VStack>
        </Stack>
      </ScrollView>
    </DashboardLayout>
  );
}
