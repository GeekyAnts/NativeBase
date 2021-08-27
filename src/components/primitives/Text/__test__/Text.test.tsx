//@ts-nocheck
import React from 'react';
import { render } from '@testing-library/react-native';
import Text from '../../Text';
import { NativeBaseProvider } from '../../../../core/NativeBaseProvider';
import { theme as defaultTheme } from '../../../../theme';
import { Platform } from 'react-native';

jest.useFakeTimers();

const theme = {
  ...defaultTheme,
  fontConfig: {
    Roboto: {
      100: 'Roboto-Light',
      200: 'Roboto-Light',
      300: 'Roboto-Light',
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: 'Roboto-Medium',
      600: 'Roboto-Medium',
      700: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      800: 'Roboto-Bold',
      900: 'Roboto-Black',
    },
  },
  fonts: {
    ...defaultTheme.fonts,
    heading: 'Roboto',
    body: 'Roboto',
  },
};

const Provider = (props: any) => {
  return (
    <NativeBaseProvider
      theme={theme}
      {...props}
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    />
  );
};

describe('Text component', () => {
  it('resolves default custom fonts', () => {
    let { getByTestId } = render(
      <Provider>
        <Text testID="my-text">hello world</Text>
      </Provider>
    );
    let text = getByTestId('my-text');
    expect(text.props.style.fontFamily).toBe('Roboto-Regular');
  });

  it('resolves custom font variants', () => {
    let { getByTestId } = render(
      <Provider>
        <Text testID="my-text" fontStyle="italic">
          hello world
        </Text>
      </Provider>
    );
    let text = getByTestId('my-text');
    expect(text.props.style.fontFamily).toBe('Roboto-Italic');
  });

  it('resolves to bold italic font', () => {
    let { getByTestId } = render(
      <Provider>
        <Text testID="my-text" fontWeight="bold" fontStyle="italic">
          hello world
        </Text>
      </Provider>
    );
    let text = getByTestId('my-text');
    expect(text.props.style.fontFamily).toBe('Roboto-BoldItalic');
  });

  it('resolves to medium font when fontWeight is 500', () => {
    let { getByTestId } = render(
      <Provider>
        <Text testID="my-text" fontWeight={500}>
          hello world
        </Text>
      </Provider>
    );
    let text = getByTestId('my-text');
    expect(text.props.style.fontFamily).toBe('Roboto-Medium');
  });

  it('resolves to medium font when fontWeight is medium', () => {
    let { getByTestId } = render(
      <Provider>
        <Text testID="my-text" fontWeight={'medium'}>
          hello world
        </Text>
      </Provider>
    );
    let text = getByTestId('my-text');
    expect(text.props.style.fontFamily).toBe('Roboto-Medium');
  });

  it('respects fontFamily property', () => {
    let { getByTestId } = render(
      <Provider>
        <Text testID="my-text" fontFamily="Merriweather-Italic">
          hello world
        </Text>
      </Provider>
    );
    let text = getByTestId('my-text');
    expect(text.props.style.fontFamily).toBe('Merriweather-Italic');
  });

  it("doesn't break if custom font is not specified", () => {
    let newTheme = JSON.parse(JSON.stringify(defaultTheme));
    delete newTheme.fontConfig;
    let { getByTestId } = render(
      <Provider theme={newTheme}>
        <Text testID="my-text" fontWeight={400}>
          hello world
        </Text>
      </Provider>
    );
    let text = getByTestId('my-text');
    expect(text.props.style.fontFamily).toBe(undefined);
  });

  it("doesn't pass fontWeight and fontStyle if a custom fontFamily is resolved", () => {
    let { getByTestId } = render(
      <Provider>
        <Text testID="my-text" fontWeight={400}>
          hello world
        </Text>
      </Provider>
    );
    let text = getByTestId('my-text');
    expect(text.props.style.fontWeight).toBe(undefined);
    expect(text.props.style.fontStyle).toBe(undefined);
    expect(text.props.style.fontFamily).toBe('Roboto-Regular');
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

  it('tests absolute non token lineHeight in text ', () => {
    const { getByTestId } = render(
      <Provider>
        <Text lineHeight={'13'} testID="test">
          This is a text
        </Text>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.lineHeight).toBe(208);
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

  it('tests letterSpacing in em from token in text ', () => {
    Platform.OS = 'web';
    try {
      render(
        <Provider>
          <Text letterSpacing="2xl" testID="test">
            This is a text
          </Text>
        </Provider>
      );
    } catch (e) {
      expect(e.message).toContain(`"letterSpacing": "0.4em"`);
    } finally {
      Platform.OS = 'ios';
    }
  });

  it('tests lineHeight and letterSpacing in px', () => {
    const { getByTestId } = render(
      <Provider>
        <Text lineHeight="24px" letterSpacing="12px" testID="test">
          This is a text
        </Text>
      </Provider>
    );
    const text = getByTestId('test');
    expect(text.props.style.lineHeight).toBe(24);
    expect(text.props.style.letterSpacing).toBe(12);
  });
});
