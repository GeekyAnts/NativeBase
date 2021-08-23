import React from 'react';
import { render } from '@testing-library/react-native';
import { theme as defaultTheme } from '../../theme';
import { NativeBaseProvider } from '../../core/NativeBaseProvider';
import Box from '../../components/primitives/Box';
import Image from '../../components/primitives/Image';
import Spinner from '../../components/primitives/Spinner';
import Text from '../../components/primitives/Text';
import { Platform } from 'react-native';
import { extendTheme } from '../../core/extendTheme';

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
    expect(box.props.style.paddingTop).toBe(defaultTheme.space['2']);
    expect(box.props.style.paddingBottom).toBe(defaultTheme.space['2']);
    expect(box.props.style.paddingLeft).toBe(defaultTheme.space['2']);
    expect(box.props.style.paddingRight).toBe(defaultTheme.space['2']);
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
    expect(box.props.style.paddingTop).toBe(defaultTheme.space['4']);
    expect(box.props.style.paddingBottom).toBe(defaultTheme.space['4']);
    expect(box.props.style.paddingRight).toBe(defaultTheme.space['4']);
    expect(box.props.style.paddingLeft).toBe(defaultTheme.space['4']);
    const box2 = getByTestId('test2');
    expect(box2.props.style.paddingTop).toBe(defaultTheme.space['5']);
    expect(box2.props.style.paddingBottom).toBe(defaultTheme.space['5']);
    expect(box2.props.style.paddingLeft).toBe(defaultTheme.space['5']);
    expect(box2.props.style.paddingRight).toBe(defaultTheme.space['5']);
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
    expect(box.props.style.paddingTop).toBe(defaultTheme.space['10']);
    expect(box.props.style.paddingBottom).toBe(defaultTheme.space['10']);
    expect(box.props.style.paddingLeft).toBe(defaultTheme.space['10']);
    expect(box.props.style.paddingRight).toBe(defaultTheme.space['10']);
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
      paddingRight: newTheme.space['5'],
      paddingLeft: newTheme.space['5'],
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
    console.log(spinner.props.style, 'spinner props');

    expect(spinner.props.style).toEqual({});
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
      marginLeft: -defaultTheme.space['5'],
      marginRight: -defaultTheme.space['5'],
      marginBottom: -defaultTheme.space['5'],
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
  it('tests lineHeight from token in text ', () => {
    const { getByTestId } = render(
      <Provider>
        <Text lineHeight="md" testID="test">
          This is a text
        </Text>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.lineHeight).toBe(22);
  });

  it('tests absolute lineHeight in text ', () => {
    const { getByTestId } = render(
      <Provider>
        <Text lineHeight={5} testID="test">
          This is a text
        </Text>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.lineHeight).toBe(80);
  });

  it('tests letterSpacing from token in text ', () => {
    const { getByTestId } = render(
      <Provider>
        <Text letterSpacing="2xl" testID="test">
          This is a text
        </Text>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.letterSpacing).toBe(6.4);
  });

  it('tests user props overrides baseStyle padding ', () => {
    const newTheme = extendTheme({
      components: {
        Box: {
          baseStyle: {
            px: 10,
            py: 10,
          },
        },
      },
    });

    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Box testID="test" px={0}>
          This is a text
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style.paddingTop).toBe(newTheme.space['10']);
    expect(box.props.style.paddingBottom).toBe(newTheme.space['10']);
    expect(box.props.style.paddingLeft).toBe(0);
    expect(box.props.style.paddingRight).toBe(0);
  });

  it('resolves more specific prop in user props', () => {
    const { getByTestId } = render(
      <Provider>
        <Box testID="test" pr={20} p={10} px={0}>
          This is a text
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style.paddingTop).toBe(defaultTheme.space['10']);
    expect(box.props.style.paddingBottom).toBe(defaultTheme.space['10']);
    expect(box.props.style.paddingLeft).toBe(defaultTheme.space['0']);
    expect(box.props.style.paddingRight).toBe(defaultTheme.space['20']);
  });
});
