import React from 'react';
import {
  Box,
  VStack,
  ScrollView,
  HStack,
  Icon,
  Text,
  Divider,
  Button,
  Image,
  IconButton,
} from 'native-base';

const list = [
  {
    iconName: 'list',
    iconText: 'Watchlist',
  },
  {
    iconName: 'timer',
    iconText: 'Orders',
  },
  {
    iconName: 'insights',
    iconText: 'Portfolio',
  },
  {
    iconName: 'rupee',
    iconText: 'Funds',
  },
];
export default function Sidebar() {
  return (
    <Box
      w="80"
      borderRightWidth="1"
      display="flex"
      _light={{
        bg: 'backgroundLight.0',
        borderRightColor: 'borderLight.200',
      }}
      _dark={{
        bg: 'backgroundDark.900',
        borderRightColor: 'borderDark.800',
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <VStack
          pb="4"
          mt="10"
          alignItems="center"
          borderBottomWidth="1"
          _light={{
            borderBottomColor: 'borderLight.200',
          }}
          _dark={{
            borderBottomColor: 'borderDark.800',
          }}
        >
          <Image
            width={{
              base: 20,
              md: 140,
            }}
            height={{
              base: 20,
              md: 140,
            }}
            source={require('../assets/pannel.png')?.default?.src}
            alt="Alternate Text"
            size="xs"
          />
          <HStack alignItems="center" justifyContent="center" space="2" pt={3}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              _light={{
                color: 'textLight.800',
              }}
            >
              Jane Doe
            </Text>
            <IconButton
              icon={<MoonIcon />}
              onPress={() => {
                console.log('hello');
              }}
            />
          </HStack>
          <Text
            fontSize="sm"
            fontWeight="medium"
            textAlign="center"
            pt={1}
            _light={{
              color: 'textLight.500',
            }}
            _dark={{
              color: 'textDark.400',
            }}
          >
            janedoe2@mydomain.com
          </Text>
        </VStack>

        <VStack px="4" py="4">
          {list.map((item, idx) => {
            return (
              <Button
                key={idx}
                variant="ghost"
                justifyContent="flex-start"
                py="3"
                px="5"
                _text={{
                  fontSize: 'md',
                  fontWeight: 'medium',
                }}
                _light={{
                  _hover: {
                    _text: {
                      color: 'primary.900',
                    },
                    bg: 'primary.100',
                  },
                  _text: {
                    color: 'textLight.800',
                  },
                }}
                _dark={{
                  _hover: {
                    _text: {
                      color: 'primary.500',
                    },
                    bg: 'backgroundDark.800',
                  },
                  _text: {
                    color: 'textDark.0',
                  },
                }}
                leftIcon={
                  item.iconName === 'rupee' ? (
                    <Icon
                      size="5"
                      mr="2"
                      as={FontAwesome}
                      name={item.iconName}
                    />
                  ) : (
                    <MoonIcon />
                  )
                }
              >
                {item.iconText}
              </Button>
            );
          })}
        </VStack>
      </ScrollView>
      <Divider
        _dark={{
          bgColor: 'backgroundDark.800',
        }}
      />
      <Box px="6" py="4">
        <Button
          variant="ghost"
          justifyContent="flex-start"
          py="3"
          leftIcon={<MoonIcon />}
          _text={{
            fontSize: 'md',
            fontWeight: 'medium',
          }}
          _light={{
            _hover: {
              _text: {
                color: 'primary.900',
              },
              bg: 'primary.100',
            },
            _text: {
              color: 'textLight.800',
            },
          }}
          _dark={{
            _hover: {
              _text: {
                color: 'primary.500',
              },
              bg: 'backgroundDark.800',
            },
            _text: {
              color: 'textDark.0',
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
