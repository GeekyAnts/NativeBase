import React from 'react';
import { render } from '@testing-library/react-native';
import { theme as defaultTheme } from '../../theme';
import { NativeBaseProvider } from '../../core/NativeBaseProvider';
import {
  Box,
  Button,
  Pressable,
  Select,
  Image,
  Spinner,
  Text,
  Heading,
} from '../../components/primitives';
import { FormControl, Menu } from '../../components/composites';
import { Platform } from 'react-native';
import { extendTheme } from '../../core/extendTheme';
import { fireEvent } from '@testing-library/react-native';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const Provider = ({ children, theme = defaultTheme }: any) => {
  return (
    <NativeBaseProvider initialWindowMetrics={inset} theme={theme}>
      {children}
    </NativeBaseProvider>
  );
};

describe('props resolution', () => {
  it('tests simple resolution', () => {
    const { getByTestId } = render(
      <Provider>
        <Box p={2} testID="test">
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style.paddingLeft).toBe(defaultTheme.space['2']);
    expect(box.props.style.paddingRight).toBe(defaultTheme.space['2']);
    expect(box.props.style.paddingTop).toBe(defaultTheme.space['2']);
    expect(box.props.style.paddingBottom).toBe(defaultTheme.space['2']);
  });

  it('tests simple resolution with responsive props', () => {
    const { getByTestId } = render(
      <Provider>
        <Box p={[2, 4, 5]} testID="test">
          hello world
        </Box>
        <Box p={{ base: 1, sm: 5, lg: 10 }} testID="test2">
          hello world
        </Box>
      </Provider>
    );

    const box = getByTestId('test');
    expect(box.props.style.paddingLeft).toBe(defaultTheme.space['4']);
    expect(box.props.style.paddingRight).toBe(defaultTheme.space['4']);
    expect(box.props.style.paddingTop).toBe(defaultTheme.space['4']);
    expect(box.props.style.paddingBottom).toBe(defaultTheme.space['4']);
    const box2 = getByTestId('test2');
    expect(box2.props.style.paddingLeft).toBe(defaultTheme.space['5']);
    expect(box2.props.style.paddingRight).toBe(defaultTheme.space['5']);
    expect(box2.props.style.paddingTop).toBe(defaultTheme.space['5']);
    expect(box2.props.style.paddingBottom).toBe(defaultTheme.space['5']);
  });

  it('resolves platform props', () => {
    Platform.OS = 'android';
    const { getByTestId } = render(
      <Provider>
        <Box p={5} _android={{ p: 10 }} testID="test">
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style.paddingLeft).toBe(defaultTheme.space['10']);
    expect(box.props.style.paddingRight).toBe(defaultTheme.space['10']);
    expect(box.props.style.paddingTop).toBe(defaultTheme.space['10']);
    expect(box.props.style.paddingBottom).toBe(defaultTheme.space['10']);
  });

  it('resolves base style with props', () => {
    const newTheme = extendTheme({
      components: {
        Box: {
          baseStyle: {
            py: 10,
            bg: 'cyan.500',
          },
        },
      },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Box p={5} testID="test">
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style).toEqual({
      paddingTop: newTheme.space['5'],
      paddingBottom: newTheme.space['5'],
      paddingLeft: newTheme.space['5'],
      paddingRight: newTheme.space['5'],
      backgroundColor: newTheme.colors.cyan['500'],
    });
  });

  it('resolves base style and variants with props', () => {
    const newTheme = extendTheme({
      components: {
        Box: {
          baseStyle: {
            py: 10,
            bg: 'cyan.500',
          },
          variants: {
            myBox: () => ({
              mt: 10,
            }),
          },
        },
      },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Box
          p={5}
          testID="test"
          //@ts-ignore
          variant="myBox"
        >
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style).toEqual({
      marginTop: newTheme.space['10'],
      paddingTop: newTheme.space['5'],
      paddingBottom: newTheme.space['5'],
      paddingLeft: newTheme.space['5'],
      paddingRight: newTheme.space['5'],
      backgroundColor: newTheme.colors.cyan['500'],
    });
  });

  it('resolves base style, variants and sizes with props', () => {
    const newTheme = extendTheme({
      components: {
        Box: {
          baseStyle: {
            py: 10,
            bg: 'cyan.500',
          },
          variants: {
            myBox: () => ({
              mt: 10,
            }),
          },
          sizes: {
            xs: {
              height: 10,
            },
          },
        },
      },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Box
          p={5}
          testID="test"
          //@ts-ignore
          variant="myBox"
          size="xs"
        >
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style).toEqual({
      marginTop: newTheme.space['10'],
      paddingTop: newTheme.space['5'],
      paddingBottom: newTheme.space['5'],
      paddingLeft: newTheme.space['5'],
      paddingRight: newTheme.space['5'],
      height: newTheme.sizes['10'],
      backgroundColor: newTheme.colors.cyan['500'],
    });
  });

  it('tests component sizes resolution', () => {
    const { getByTestId } = render(
      <Provider>
        <Image
          source={{ uri: 'https://nativebase.io/img/nativebase-logo.svg' }}
          alt="test-image"
          size="md"
          testID="image"
        />
        <Spinner size="sm" testID="spinner" />
      </Provider>
    );
    const image = getByTestId('image');
    const spinner = getByTestId('spinner');
    expect(image.props.style).toEqual({
      height: defaultTheme.space['20'],
      maxWidth: '100%',
      width: defaultTheme.space['20'],
    });

    expect(spinner.props.style).toEqual(undefined);
  });

  it('resolves base style and variants, sizes and default props with props', () => {
    const newTheme = extendTheme({
      components: {
        Box: {
          baseStyle: {
            py: 10,
            bg: 'cyan.500',
          },
          variants: {
            myBox: () => ({
              mt: 10,
            }),
          },
          sizes: {
            xs: {
              height: 10,
            },
          },
          defaultProps: {
            size: 'xs',
          },
        },
      },
    });

    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Box
          p={5}
          testID="test"
          //@ts-ignore
          variant="myBox"
        >
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style).toEqual({
      marginTop: newTheme.space['10'],
      paddingTop: newTheme.space['5'],
      paddingBottom: newTheme.space['5'],
      paddingLeft: newTheme.space['5'],
      paddingRight: newTheme.space['5'],
      height: newTheme.sizes['10'],
      backgroundColor: newTheme.colors.cyan['500'],
    });
  });

  it('tests alpha opacity resolution', () => {
    const { getByTestId } = render(
      <Provider>
        <Box p={2} bg="primary.400:alpha.50" testID="test">
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style.backgroundColor).toBe(
      'rgba(34, 211, 238, ' + defaultTheme.opacity['50'] + ')'
    );
  });

  it('resolves negative margins', () => {
    const { getByTestId } = render(
      <Provider>
        <Box m={-5} testID="test">
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style).toEqual({
      marginTop: -defaultTheme.space['5'],
      marginRight: -defaultTheme.space['5'],
      marginBottom: -defaultTheme.space['5'],
      marginLeft: -defaultTheme.space['5'],
    });
  });

  it('resolves shadow from theme', () => {
    const { getByTestId } = render(
      <Provider>
        <Box shadow={9} testID="test">
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style).toEqual(defaultTheme.shadows[9]);
  });

  it('FormControl: pseudo props test ', () => {
    const { getByTestId } = render(
      <Provider>
        <FormControl isDisabled>
          <FormControl.HelperText
            testID="test"
            _disabled={{
              borderLeftWidth: 1,
              mt: 1,
              px: 1,
              pl: 2,
              borderColor: 'gray.400',
            }}
          ></FormControl.HelperText>
        </FormControl>
      </Provider>
    );
    const formControl = getByTestId('test');
    expect(formControl.props.style).toEqual({
      borderLeftWidth: 1,
      marginTop: defaultTheme.space['1'],
      paddingLeft: defaultTheme.space['2'],
      paddingRight: defaultTheme.space['1'],
      borderColor: defaultTheme.colors.gray['400'],
    });
  });

  it('Menu: style props test', () => {
    const { getByTestId } = render(
      <Provider>
        <Menu
          trigger={(triggerProps) => {
            return (
              <Pressable
                testID="pressableTest"
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                Open menu
              </Pressable>
            );
          }}
        >
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item bg="blue.300" testID="test">
            Nunito Sans
          </Menu.Item>
          <Menu.Item testID="test1" isDisabled _disabled={{ bg: 'pink.300' }}>
            Tahoma
          </Menu.Item>
        </Menu>
      </Provider>
    );
    const triggerElement = getByTestId('pressableTest');
    fireEvent.press(triggerElement);
    const menuItem = getByTestId('test');
    const disabledMenuItem = getByTestId('test1');
    expect(menuItem.props.style.backgroundColor).toBe(
      defaultTheme.colors.blue['300']
    );
    expect(disabledMenuItem.props.style.backgroundColor).toBe(
      defaultTheme.colors.pink['300']
    );
  });
  it('Menu: style props test', () => {
    const { getByTestId } = render(
      <Provider>
        <Select
          selectedValue={'js'}
          testID="selectTest"
          minWidth={200}
          accessibilityLabel="Select your favorite programming language"
          placeholder="Select your favorite programming language"
          _selectedItem={{
            bg: 'cyan.600',
          }}
        >
          <Select.Item testID="test" label="JavaScript" value="js" />
          <Select.Item
            testID="test1"
            isDisabled
            label="TypeScript"
            value="ts"
            _disabled={{ bg: 'blue.700' }}
          />
        </Select>
      </Provider>
    );
    const selectElement = getByTestId('selectTest');
    fireEvent.press(selectElement);
    const selectItem = getByTestId('test');
    // const disabledSelectItem = getByTestId('test1');
    expect(selectItem.props.style.backgroundColor).toBe(
      defaultTheme.colors.cyan['600']
    );
    //TODO: Need to discuss
    // expect(disabledSelectItem.props.style.backgroundColor).toBe(
    //   defaultTheme.colors.blue['700']
    // );
  });
  it('Button: style props test', () => {
    const { getByTestId } = render(
      <Provider>
        <Button
          testID="test"
          bg="pink.900"
          _text={{ color: 'cyan.100', testID: 'test1' }}
        >
          PRIMARY
        </Button>
      </Provider>
    );
    const buttonElement = getByTestId('test');
    const buttonText = getByTestId('test1');
    expect(buttonText.props.style.color).toBe(defaultTheme.colors.cyan['100']);
    expect(buttonElement.props.style.backgroundColor).toBe(
      defaultTheme.colors.pink['900']
    );
  });
  it('Button: style props test on ios with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    Platform.OS = 'ios';
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Button
          testID="test"
          _ios={{ _dark: { bg: 'pink.900' } }}
          _text={{ color: 'cyan.100', testID: 'test1' }}
        >
          PRIMARY
        </Button>
      </Provider>
    );
    const buttonElement = getByTestId('test');
    const buttonText = getByTestId('test1');
    expect(buttonText.props.style.color).toBe(defaultTheme.colors.cyan['100']);
    expect(buttonElement.props.style.backgroundColor).toBe(
      defaultTheme.colors.pink['900']
    );
  });
  it('Button: style responsive props test on ios with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    Platform.OS = 'ios';
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Button
          testID="test"
          _ios={{ _dark: { bg: ['pink.900', 'blue.900', 'cyan.900'] } }}
          _text={{ color: 'cyan.100', testID: 'test1' }}
        >
          PRIMARY
        </Button>
      </Provider>
    );
    const buttonElement = getByTestId('test');
    const buttonText = getByTestId('test1');
    expect(buttonText.props.style.color).toBe(defaultTheme.colors.cyan['100']);
    expect(buttonElement.props.style.backgroundColor).toBe(
      defaultTheme.colors.blue['900']
    );
  });
  it('Image: style responsive props test on ios with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    Platform.OS = 'ios';
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Image
          testID="test"
          source={{
            uri: 'https://wallpaperaccess.com/full/317501jpg',
          }}
          alt="Alternate Text"
          _ios={{
            _dark: {
              source: {
                uri: 'https://www.w3schools.com/css/img_lightsjpg',
              },
              size: ['sm', 'md', 'xl'],
            },
          }}
        ></Image>
      </Provider>
    );
    const imageElement = getByTestId('test');
    expect(imageElement.props.style).toEqual({
      height: defaultTheme.space['20'],
      maxWidth: '100%',
      width: defaultTheme.space['20'],
    });
  });

  it('verifies string numbers', () => {
    const { getByTestId } = render(
      <Provider>
        <Box testID="123" mt={'29'} />
      </Provider>
    );

    const box = getByTestId('123');

    expect(box.props.style).toEqual({
      marginTop: 29,
    });
  });

  it('tests absolute em lineHeight in text ', () => {
    const { getByTestId } = render(
      <Provider>
        <Text lineHeight="3em" testID="test">
          This is a text
        </Text>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.lineHeight).toBe(48);
  });

  it('tests relative em lineHeight in text ', () => {
    const { getByTestId } = render(
      <Provider>
        {/* @ts-ignore */}
        <Text fontSize="20px" lineHeight="3em" testID="test">
          This is a text
        </Text>
      </Provider>
    );
    const text = getByTestId('test');

    expect(text.props.style.lineHeight).toBe(60);
  });

  it('tests letterSpacing from token in text ', () => {
    const { getByTestId } = render(
      <Provider>
        <Box>
          <Text letterSpacing="0.1em" testID="test">
            This is a text
          </Text>
        </Box>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.letterSpacing).toBe(1.6);
  });

  it('tests letterSpacing from token in text ', () => {
    const { getByTestId } = render(
      <Provider>
        <Box>
          {/* @ts-ignore */}
          <Text fontSize="12px" letterSpacing="2em" testID="test">
            This is a text
          </Text>
        </Box>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.letterSpacing).toBe(24);
  });

  it('Text: style props test on ios with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    Platform.OS = 'ios';
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Box>
          <Text
            // @ts-ignore
            fontSize="12px"
            testID="test"
            letterSpacing="3em"
            _ios={{
              _dark: {
                fontSize: '15px',
              },
            }}
          >
            This is a text
          </Text>
        </Box>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.letterSpacing).toBe(45);
  });

  it('tests absolute em lineHeight in Heading ', () => {
    const { getByTestId } = render(
      <Provider>
        <Heading lineHeight="3em" testID="test">
          This is a Heading.
        </Heading>
      </Provider>
    );
    const heading = getByTestId('test');
    expect(heading.props.style.lineHeight).toBe(9);
  });

  it('tests relative em lineHeight in Heading ', () => {
    const { getByTestId } = render(
      <Provider>
        {/* @ts-ignore */}
        <Heading fontSize="20px" lineHeight="3em" testID="test">
          This is a Heading.
        </Heading>
      </Provider>
    );
    const heading = getByTestId('test');

    expect(heading.props.style.lineHeight).toBe(60);
  });

  it('tests letterSpacing from token in Heading ', () => {
    const { getByTestId } = render(
      <Provider>
        <Heading letterSpacing="2em" testID="test">
          This is a Heading.
        </Heading>
      </Provider>
    );
    const heading = getByTestId('test');
    expect(heading.props.style.letterSpacing).toBe(6);
  });

  it('tests letterSpacing from token in Heading ', () => {
    const { getByTestId } = render(
      <Provider>
        {/* @ts-ignore */}
        <Heading fontSize="12px" letterSpacing="1em" testID="test">
          This is a Heading.
        </Heading>
      </Provider>
    );
    const heading = getByTestId('test');
    expect(heading.props.style.letterSpacing).toBe(12);
  });

  it('tests letterSpacing from token in Heading ', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        {/* @ts-ignore */}
        <Heading
          letterSpacing="1em"
          testID="test"
          //@ts-ignore
          fontSize="12px"
          _dark={{
            fontSize: '6px',
          }}
        >
          This is a Heading.
        </Heading>
      </Provider>
    );
    const heading = getByTestId('test');
    expect(heading.props.style.letterSpacing).toBe(6);
  });
});
