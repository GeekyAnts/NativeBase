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
    iconName: 'home',
    iconText: 'Home',
  },
  {
    iconName: 'menu-book',
    iconText: 'Syllabus',
  },
  {
    iconName: 'speed',
    iconText: 'Test',
  },
  {
    iconName: 'subscriptions',
    iconText: 'Subscribe',
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
            <IconButton icon={<MoonIcon />} />
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
                _light={{
                  _text: {
                    color: 'textLight.800',
                  },
                  _icon: {
                    color: 'textLight.800',
                  },
                }}
                _dark={{
                  _text: {
                    color: 'textDark.50',
                  },
                  _icon: {
                    color: 'textDark.50',
                  },
                }}
                _text={{
                  fontSize: 'md',
                  fontWeight: 'medium',
                }}
                _hover={{
                  _text: {
                    _light: {
                      color: 'primary.900',
                    },
                    _dark: {
                      color: 'primary.500',
                    },
                  },
                  _icon: {
                    _light: {
                      color: 'primary.900',
                    },
                    _dark: {
                      color: 'primary.500',
                    },
                  },
                  _light: {
                    bg: 'primary.100',
                  },
                  _dark: {
                    bg: 'backgroundDark.800',
                  },
                }}
                leftIcon={<MoonIcon />}
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
      <Box mx={4}>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          py="3"
          px="5"
          _light={{
            _text: {
              color: 'textLight.800',
            },
            _icon: {
              color: 'textLight.800',
            },
          }}
          _dark={{
            _text: {
              color: 'textDark.50',
            },
            _icon: {
              color: 'textDark.50',
            },
          }}
          _text={{
            fontSize: 'md',
            fontWeight: 'medium',
          }}
          _hover={{
            _text: {
              _light: {
                color: 'primary.900',
              },
              _dark: {
                color: 'primary.500',
              },
            },
            _icon: {
              _light: {
                color: 'primary.900',
              },
              _dark: {
                color: 'primary.500',
              },
            },
            _light: {
              bg: 'primary.100',
            },
            _dark: {
              bg: 'backgroundDark.800',
            },
          }}
          leftIcon={<MoonIcon />}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
