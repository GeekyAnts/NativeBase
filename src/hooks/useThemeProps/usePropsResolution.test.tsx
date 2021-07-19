import React from 'react';
import { render } from '@testing-library/react-native';
import { theme as defaultTheme } from '../../theme';
import { NativeBaseProvider } from '../../core/NativeBaseProvider';
import Box from '../../components/primitives/Box';
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
    expect(box.props.style.padding).toBe(defaultTheme.space['2']);
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
    expect(box.props.style.padding).toBe(defaultTheme.space['4']);
    const box2 = getByTestId('test2');
    expect(box2.props.style.padding).toBe(defaultTheme.space['5']);
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
    expect(box.props.style.padding).toBe(defaultTheme.space['10']);
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
      paddingTop: newTheme.space['10'],
      paddingBottom: newTheme.space['10'],
      padding: newTheme.space['5'],
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
      paddingTop: newTheme.space['10'],
      paddingBottom: newTheme.space['10'],
      padding: newTheme.space['5'],
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
      paddingTop: newTheme.space['10'],
      paddingBottom: newTheme.space['10'],
      padding: newTheme.space['5'],
      height: newTheme.sizes['10'],
      backgroundColor: newTheme.colors.cyan['500'],
    });
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
      paddingTop: newTheme.space['10'],
      paddingBottom: newTheme.space['10'],
      padding: newTheme.space['5'],
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
});
