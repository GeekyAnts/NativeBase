import React from 'react';
import {
  Box,
  VStack,
  ScrollView,
  StatusBar,
  HStack,
  Pressable,
  Icon,
  Image,
  Text,
  Hidden,
  useColorMode,
  IconButton,
  Divider,
  Menu,
  Input,
  MoonIcon,
  useColorModeValue,
  SunIcon,
  Button,
} from 'native-base';
import Sidebar from '../components/Sidebar';
import logo_light from '../assets/header_light.png';
import logo_dark from '../assets/header_dark.png';
import menu_light from '../assets/menu_light.png';
import menu_dark from '../assets/menu_dark.png';
import { Platform } from 'react-native';
import SidebarHomeAndMenu from '../components/SidebarHomeAndMenu';
import SidebarPodcastScreen from '../components/SidebarPodcastScreen';
import SidebarTopPerformingStocks from '../components/SidebarTopPerformingStocks';
export function Header(props) {
  const { toggleColorMode } = useColorMode();
  const menuImageKey = useColorModeValue(
    'assets/menu_light.png',
    'assets/menu_dark.png'
  );
  const logoImageKey = useColorModeValue('logo_light', 'logo_dark');
  const menuImage = useColorModeValue(menu_light, menu_dark);
  const logoImage = useColorModeValue(logo_light, logo_dark);
  const icon = useColorModeValue(<MoonIcon size="6" />, <SunIcon size="6" />);
  return (
    <Box
      px="6"
      pt="3"
      pb="5"
      _dark={{
        bg: 'backgroundDark.900',
        borderColor: 'borderDark.800',
      }}
      _light={{
        bg: {
          base: 'primary.900',
          md: 'backgroundLight.0',
        },
        borderColor: 'borderLight.200',
      }}
    >
      <VStack alignSelf="center" width="100%">
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="3" alignItems="center">
            <Pressable
              onPress={() => {
                console.log('hello');
              }}
            >
              <Image
                key={menuImageKey}
                h="3"
                w="18"
                alt="Menu"
                resizeMode="contain"
                source={menuImage}
              />
            </Pressable>

            <Image
              key={logoImageKey}
              h="10"
              w="56"
              alt="NativeBase Startup+"
              resizeMode="contain"
              source={logoImage}
            />
          </HStack>
          {props.searchbar && (
            <Input px="4" w="30%" size="sm" placeholder="Search" />
          )}

          <HStack space="3" alignItems="center">
            <Pressable onPress={toggleColorMode}>{icon}</Pressable>
            {props.rightPanel && (
              <Button p={0} variant="unstyled" colorScheme="light" />
            )}

            <Menu
              closeOnSelect={false}
              w="200"
              placement="bottom right"
              onOpen={() => console.log('opened')}
              onClose={() => console.log('closed')}
              trigger={(triggerProps) => {
                return (
                  <Button variant="unstyled" p="0" {...triggerProps}>
                    <Image
                      w="8"
                      h="8"
                      source={require('../assets/pannel.png')?.default?.src}
                      alt="Alternate Text"
                      size="xs"
                    />
                  </Button>
                );
              }}
              _dark={{
                bg: 'backgroundDark.800',
                borderColor: 'borderDark.700',
              }}
            >
              <Menu.Group title="Profile">
                <Menu.Item>Account</Menu.Item>
              </Menu.Group>
              <Divider
                mt="3"
                w="100%"
                _dark={{
                  bg: 'backgroundDark.700',
                }}
              />
              <Menu.Group title="Shortcuts">
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </Menu.Group>
            </Menu>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}

function MainContent(props) {
  return (
    <VStack
      maxW={props.maxWidth}
      flex={1}
      width="100%"
      _light={{
        bg: 'backgroundLight.100',
      }}
      _dark={{
        bg: 'backgroundDark.700',
      }}
    >
      {props.displayScreenTitle && (
        <Hidden till="md">
          <HStack mb={4} space={4}>
            <Pressable
              onPress={() => {
                console.log('hello');
              }}
            >
              Helo
            </Pressable>
            <Box>
              <Text
                fontSize="lg"
                fontWeight="medium"
                _dark={{
                  color: 'textDark.50',
                }}
                _light={{
                  color: 'textLight.800',
                }}
              >
                {props.title}
              </Text>
              {props.subTitle ? (
                <Text
                  _dark={{
                    color: 'textDark.50',
                  }}
                  _light={{
                    color: 'textLight.800',
                  }}
                  fontSize="sm"
                  fontWeight="normal"
                >
                  {props.subTitle}
                </Text>
              ) : (
                <></>
              )}
            </Box>
          </HStack>
        </Hidden>
      )}
      {props.children}
    </VStack>
  );
}

export function MobileHeader(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      px="1"
      pt="2"
      pb="2"
      _dark={{
        bg: 'backgroundDark.900',
        borderColor: 'borderDark.800',
      }}
      _light={{
        bg: 'primary.900',
        borderColor: 'borderLight.200',
      }}
      bg="amber.300"
    >
      <HStack space="2" justifyContent="space-between">
        <HStack
          flex="1"
          space="2"
          justifyContent="space-between"
          alignItems="center"
        >
          <>
            <HStack alignItems="center" space="1">
              {props.backButton && (
                <IconButton
                  variant="ghost"
                  colorScheme="light"
                  _icon={{
                    color: 'textLight.50',
                  }}
                  icon={<></>}
                />
              )}
              <VStack>
                <Text color="textLight.50" fontSize="lg">
                  {props.title}
                </Text>
                {props.subTitle ? (
                  <Text color="textLight.50" fontSize="sm" fontWeight="normal">
                    {props.subTitle}
                  </Text>
                ) : undefined}
              </VStack>
            </HStack>
            {/* right panel */}

            <HStack space="1">
              <IconButton
                variant="unstyled"
                colorScheme="light"
                onPress={toggleColorMode}
                _icon={{
                  color: 'textLight.0',
                }}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              />
              {props.rightPanel && (
                <IconButton
                  variant="unstyled"
                  colorScheme="light"
                  icon={<MoonIcon />}
                />
              )}
            </HStack>
          </>
        </HStack>
      </HStack>
    </Box>
  );
}

function getSidebar(title) {
  switch (title) {
    case 'Class 12th':
      return <SidebarHomeAndMenu />;

    case 'Podcasts':
      return <SidebarPodcastScreen />;

    case 'Video Library':
      return <SidebarPodcastScreen />;

    case 'Playlist':
      return <SidebarPodcastScreen />;

    case 'Dashboard':
      return <SidebarTopPerformingStocks />;

    default:
      return <Sidebar />;
  }
}

export default function DashboardLayout({
  displayScreenTitle = true,
  displaySidebar = true,
  header = {
    searchbar: false,
  },
  maxWidth = 1016,
  mobileHeader = {
    backButton: true,
  },
  ...props
}) {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{
          bg: 'primary.900',
        }}
        _dark={{
          bg: 'backgroundDark.900',
        }}
      />
      <VStack flex={1}>
        <Hidden from="md">
          <MobileHeader
            title={props.title}
            subTitle={props.subTitle}
            backButton={mobileHeader.backButton}
            rightPanel={props.rightPanelMobileHeader}
          />
        </Hidden>
        <Hidden till="md">
          <Header
            toggleSidebar={toggleSidebar}
            title={props.title}
            subTitle={props.subTitle}
            menuButton={displaySidebar}
            searchbar={header.searchbar}
            rightPanel={props.rightHeaderPanel}
          />
        </Hidden>

        <Box
          flex={1}
          safeAreaBottom
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
          _light={{
            borderTopColor: 'borderLight.200',
          }}
          _dark={{
            bg: 'backgroundDark.700',
            borderTopColor: 'borderDark.700',
          }}
        >
          {isSidebarVisible && displaySidebar && Platform.OS === 'web' && (
            <Hidden till="md">{getSidebar(props.title)}</Hidden>
          )}

          <Hidden till="md">
            {Platform.OS === 'web' ? (
              <ScrollView
                flex={1}
                p={{
                  md: 8,
                }}
                contentContainerStyle={{
                  alignItems: 'center',
                  flexGrow: 1,
                }}
                _light={{
                  bg: 'backgroundLight.100',
                }}
                _dark={{
                  bg: 'backgroundDark.700',
                }}
                showsVerticalScrollIndicator={false}
              >
                <MainContent
                  {...props}
                  displayScreenTitle={displayScreenTitle}
                  maxWidth={maxWidth}
                />
              </ScrollView>
            ) : (
              <Box flex={1} alignItems="center">
                <MainContent {...props} maxWidth={maxWidth} />
              </Box>
            )}
          </Hidden>

          <Hidden from="md">
            <MainContent {...props} displayScreenTitle={displayScreenTitle} />
          </Hidden>
        </Box>
      </VStack>
    </>
  );
}
