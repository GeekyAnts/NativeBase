import React from 'react';
import { render } from '@testing-library/react-native';
import { theme as defaultTheme } from '../../theme';
import { NativeBaseProvider } from '../../core/NativeBaseProvider';
import {
  Box,
  Button,
  Pressable,
  // Select,
  Image,
  Spinner,
  Text,
  Input,
  Checkbox,
  Slider,
  // Icon,
  HStack,
  Heading,
} from '../../components/primitives';
// import { Ionicons } from '@expo/vector-icons';
import { FormControl, Menu } from '../../components/composites';
import { Platform } from 'react-native';
import { extendTheme } from '../../core/extendTheme';
import { fireEvent } from '@testing-library/react-native';
// import { InfoIcon } from '../../components/primitives/Icon/Icons';

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

function CheckBoxGroup() {
  const [groupValue, setGroupValue] = React.useState(['Item 1 ', 'Item 3 ']);
  return (
    <Checkbox.Group
      colorScheme="green"
      defaultValue={groupValue}
      onChange={(values) => {
        setGroupValue(values || []);
      }}
    >
      <Checkbox value="Item 1 ">
        <Text mx={2}>Item 1</Text>
      </Checkbox>
      <Checkbox value="Item 2 ">
        <Text mx={2}>Item 2</Text>
      </Checkbox>
      <Checkbox value="Item 3 ">
        <Text mx={2}>Item 3</Text>
      </Checkbox>
      <Checkbox colorScheme="orange" value="Indeterminate Item ">
        <Text mx={2}>Indeterminate Item</Text>
      </Checkbox>
    </Checkbox.Group>
  );
}

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
        <Box m={-5} mt={'-10'} testID="test">
          hello world
        </Box>
      </Provider>
    );
    const box = getByTestId('test');
    expect(box.props.style).toEqual({
      marginTop: -defaultTheme.space['10'],
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
          />
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
        />
      </Provider>
    );
    const imageElement = getByTestId('test');
    expect(imageElement.props.style).toEqual({
      height: defaultTheme.space['20'],
      maxWidth: '100%',
      width: defaultTheme.space['20'],
    });
  });

  it('Input: Basic check', () => {
    const { getByTestId } = render(
      <Provider>
        <Input
          testID="test"
          w="100%"
          mx={3}
          placeholder="Default Input"
          placeholderTextColor="blueGray.400"
        />
      </Provider>
    );
    const inputElement = getByTestId('test');
    expect(inputElement.props.style[0].width).toBe('100%');

    expect(inputElement.props.placeholderTextColor).toBe(
      defaultTheme.colors.blueGray['400']
    );
    expect(inputElement.props.style[0].marginLeft).toBe(
      defaultTheme.space['3']
    );
    expect(inputElement.props.style[0].marginRight).toBe(
      defaultTheme.space['3']
    );
  });

  it('Input: color mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Input
          testID="test"
          _light={{
            placeholderTextColor: 'blueGray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />
      </Provider>
    );
    const inputElement = getByTestId('test');
    expect(inputElement.props.placeholderTextColor).toBe(
      defaultTheme.colors.blueGray['50']
    );
  });

  it('Input: size', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Input
          testID="test"
          size="sm"
          variant="outline"
          _dark={{
            size: 'md',
          }}
        />
      </Provider>
    );
    const inputElement = getByTestId('test');
    expect(inputElement.props.style[0].fontSize).toBe(
      defaultTheme.fontSizes.sm
    );
  });

  it('Input: variant', () => {
    const { getByTestId } = render(
      <Provider>
        <Input testID="test" variant="underlined" />
      </Provider>
    );
    const inputElement = getByTestId('test');
    expect(inputElement.props.style[0].borderBottomWidth).toBe(1);
  });

  // it('Input: inputElements', () => {
  //   const { getByTestId } = render(
  //     <Provider>
  //       <Input
  //         testID="test1"
  //         InputLeftElement={<Button testID="test2">leftIcon</Button>}
  //         placeholder="Input"
  //       />
  //     </Provider>
  //   );
  //   const inputElement = getByTestId('test1');
  //   const iconElement = getByTestId('test2');
  //   console.log(inputElement, '!!!!!');
  //   console.log('===========');
  //   console.log(inputElement.props, '!!!!!');
  //   expect(inputElement.props.InputLeftElement).toBe(iconElement);
  // });
  it('Input: style props test on ios with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    Platform.OS = 'ios';
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Input
          testID="test"
          _ios={{ _dark: { variant: 'underlined', size: 'sm' } }}
          variant="outline"
          size="lg"
        />
      </Provider>
    );
    const inputElement = getByTestId('test');
    expect(inputElement.props.style[0].borderBottomWidth).toBe(1);
    // as input of 'sm' size is mapped to 'xs' fontsize
    expect(inputElement.props.style[0].fontSize).toBe(
      defaultTheme.fontSizes.xs
    );
  });

  // it('Input: inputElemets', () => {
  //   const { getByTestId } = render(
  //     <Provider>
  //       <Input
  //         testID="test1"
  //         InputLeftElement={<Button testID="test2">leftIcon</Button>}
  //         placeholder="Input"
  //       />
  //     </Provider>
  //   );
  //   const inputElement = getByTestId('test1');
  //   const iconElement = getByTestId('test2');
  //   console.log(inputElement, '!!!!!');
  //   console.log('===========');
  //   console.log(inputElement.props, '!!!!!');
  //   expect(inputElement.props.InputLeftElement).toBe(iconElement);
  // });

  it('Input: disabled', () => {
    const { getByTestId } = render(
      <Provider>
        <Input
          testID="test"
          type="password"
          isDisabled={true}
          isRequired={true}
        />
      </Provider>
    );
    const inputElement = getByTestId('test');
    expect(inputElement.props.disabled).toBe(true);
    expect(inputElement.props.required).toBe(true);
  });

  // ==========================================

  it('handles defaults and onChange on checkBoxGroup', () => {
    const { getAllByRole } = render(
      <Provider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <CheckBoxGroup />
      </Provider>
    );
    const checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(4);
    expect(checkbox[0].props.accessibilityState.checked).toBe(true);
    expect(checkbox[1].props.accessibilityState.checked).toBe(false);
    expect(checkbox[2].props.accessibilityState.checked).toBe(true);
    expect(checkbox[3].props.accessibilityState.checked).toBe(false);
    fireEvent.press(checkbox[1]);
    expect(checkbox[1].props.accessibilityState.checked).toBe(true);
  });

  it('checkBox: disabled, checked', () => {
    const { getAllByRole } = render(
      <Provider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Checkbox value="Item 1 ">
          <Text mx={2}>Item 1</Text>
        </Checkbox>
        <Checkbox value="Item 2 " isDisabled>
          <Text mx={2}>Item 2</Text>
        </Checkbox>
        <Checkbox value="Item 3" isChecked>
          <Text mx={2}>Item 3</Text>
        </Checkbox>
        <Checkbox colorScheme="orange" value="Indeterminate Item" isInvalid>
          <Text mx={2}>Indeterminate Item</Text>
        </Checkbox>
      </Provider>
    );
    const checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(4);
    expect(checkbox[1].props.accessibilityState.disabled).toBe(true);
    expect(checkbox[2].props.accessibilityState.checked).toBe(true);
    // expect(checkbox[3].props.accessibilityState.invalid).toBe(true);
  });

  // it('Checkbox: style props test with dark mode', () => {
  //   const newTheme = extendTheme({
  //     config: { initialColorMode: 'dark' },
  //   });
  //   const { getAllByRole } = render(
  //     <Provider theme={newTheme}>
  //       <Checkbox
  //         value="Item 1"
  //         isChecked={true}
  //         isDisabled={false}
  //         _dark={{
  //           isChecked: false,
  //           isDisabled: true,
  //         }}
  //       >
  //         <Text mx={2}>Item 1</Text>
  //       </Checkbox>
  //     </Provider>
  //   );

  //   let checkbox = getAllByRole('checkbox');
  //   console.log(checkbox[0].props.accessibilityState, '@@@@');
  //   expect(checkbox[0].props.accessibilityState.checked).toBe(false);
  //   expect(checkbox[0].props.accessibilityState.disabled).toBe(true);
  // });

  // it('Checkbox: style props test on ios with dark mode', () => {
  //   const newTheme = extendTheme({
  //     config: { initialColorMode: 'dark' },
  //   });
  //   Platform.OS = 'ios';
  //   const { getAllByRole } = render(
  //     <Provider theme={newTheme}>
  //       <Checkbox
  //         value="Item 1"
  //         isChecked={true}
  //         isDisabled={false}
  //         _ios={{
  //           _dark: {
  //             isChecked: false,
  //             isDisabled: true,
  //           },
  //         }}
  //       >
  //         <Text mx={2}>Item 1</Text>
  //       </Checkbox>
  //     </Provider>
  //   );

  //   let checkbox = getAllByRole('checkbox');
  //   console.log(checkbox[0].props.accessibilityState, '@@@@');
  //   expect(checkbox[0].props.accessibilityState.checked).toBe(false);
  //   expect(checkbox[0].props.accessibilityState.disabled).toBe(true);
  // });

  it('onChange on checkBox', () => {
    const { getAllByRole } = render(
      <Provider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Checkbox value="item 1" />
      </Provider>
    );
    const checkbox = getAllByRole('checkbox');
    expect(checkbox.length).toBe(1);
    fireEvent.press(checkbox[0]);
    expect(checkbox[0].props.accessibilityState.checked).toBe(true);
  });

  // it('CustomIcon checkBox', () => {
  //   let { getAllByRole, getByTestId } = render(
  //     <Provider>
  //       <Checkbox
  //         value="orange"
  //         colorScheme="orange"
  //         size="md"
  //         icon={<Icon testID="icon" as={<InfoIcon />} />}
  //         defaultIsChecked
  //       >
  //         Info
  //       </Checkbox>
  //     </Provider>
  //   );
  //   let checkbox = getAllByRole('checkbox');
  //   let nestedIcon = getByTestId('icon');

  //   expect(checkbox[0].props.icon).toBe(nestedIcon);
  // });

  //  ==========================================
  it('Slider: basic', () => {
    const { getByTestId } = render(
      <Provider>
        <Slider
          testID="slider"
          // Need to test
          // defaultValue={70}
          minValue={0}
          maxValue={100}
          accessibilityLabel="hello world"
          step={10}
          colorScheme="red"
          size="sm"
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Provider>
    );
    const sliderElement = getByTestId('slider');
    expect(sliderElement.props.minValue).toBe(0);
    expect(sliderElement.props.maxValue).toBe(100);
    expect(sliderElement.props.step).toBe(10);
    expect(sliderElement.props.thumbSize).toBe(4);
    expect(sliderElement.props.sliderSize).toBe(4);
    expect(sliderElement.props.colorScheme).toBe('red');
  });

  //  ==========================================
  // it('Modal: size', () => {
  //   const { getByTestId } = render(
  //     <Provider>
  //       <Modal isOpen={true} size="sm">
  //         <Modal.Content testID="size">
  //           <Modal.Header>Modal Title</Modal.Header>
  //           <Modal.Body>
  //             Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
  //             ullamco deserunt aute id consequat veniam incididunt duis in sint
  //             irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
  //             officia tempor esse quis. Sunt ad dolore quis aute consequat.
  //             Magna exercitation reprehenderit magna aute tempor cupidatat
  //             consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
  //             incididunt cillum quis. Velit duis sit officia eiusmod Lorem
  //             aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
  //             consectetur esse laborum eiusmod pariatur
  //           </Modal.Body>
  //         </Modal.Content>
  //       </Modal>
  //     </Provider>
  //   );
  //   const modalElement = getByTestId('size');
  //   // console.log(modalElement, 'jdj');
  //   expect(modalElement.props.style.width).toBe('60%');
  // });
  it('Slider: style props test with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Slider
          testID="test"
          _dark={{
            minValue: 20,
            maxValue: 120,
            step: 25,
            colorScheme: 'blue',
            size: 'md',
          }}
          minValue={0}
          maxValue={100}
          accessibilityLabel="hello world"
          step={10}
          colorScheme="red"
          size="sm"
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Provider>
    );

    const sliderElement = getByTestId('test');
    expect(sliderElement.props.minValue).toBe(20);
    expect(sliderElement.props.maxValue).toBe(120);
    expect(sliderElement.props.step).toBe(25);
    expect(sliderElement.props.thumbSize).toBe(5);
    expect(sliderElement.props.sliderSize).toBe(5);
    expect(sliderElement.props.colorScheme).toBe('blue');
  });
  it('tests lineHeight & letterspacing in text ', () => {
    const { getByTestId } = render(
      <Provider>
        <Text
          /* @ts-ignore */
          fontSize="20px"
          lineHeight="5xl"
          letterSpacing="xl"
          testID="test"
        >
          This is a text
        </Text>
      </Provider>
    );

    const text = getByTestId('test');
    expect(text.props.style.lineHeight).toBe(80);
    expect(text.props.style.letterSpacing).toBe(1);
  });

  it('Slider: style props test on ios with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    Platform.OS = 'ios';
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Slider
          testID="test"
          _ios={{
            _dark: {
              minValue: 10,
              maxValue: 110,
              step: 15,
              colorScheme: 'green',
              size: 'md',
            },
          }}
          minValue={0}
          maxValue={100}
          accessibilityLabel="hello world"
          step={10}
          colorScheme="red"
          size="sm"
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Provider>
    );

    const sliderElement = getByTestId('test');
    expect(sliderElement.props.minValue).toBe(10);
    expect(sliderElement.props.maxValue).toBe(110);
    expect(sliderElement.props.step).toBe(15);
    expect(sliderElement.props.thumbSize).toBe(5);
    expect(sliderElement.props.sliderSize).toBe(5);
    expect(sliderElement.props.colorScheme).toBe('green');
  });

  it('HStack: basic', () => {
    const { getByTestId } = render(
      <Provider>
        <HStack testID="hstack">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </Provider>
    );
    const hstackElement = getByTestId('hstack');
    expect(hstackElement.props.style.flexDirection).toBe('row');
  });

  it('HStack: direction', () => {
    const { getByTestId } = render(
      <Provider>
        <HStack testID="test" direction="column">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </Provider>
    );
    const hstackElement = getByTestId('test');
    expect(hstackElement.props.style.flexDirection).toBe('column');
  });

  // it('Icon: basic', () => {
  //   const { getByTestId } = render(
  //     <Provider>
  //       <Icon as={<Ionicons name="md-checkmark-circle" />} />
  //     </Provider>
  //   );
  //   const iconElement = getByTestId('test123');
  //   expect(iconElement.props.style.backgroundColor).toBe(
  //     defaultTheme.colors.red['200']
  //   );
  // });

  // it('Icon: Nativebase icons', () => {
  //   const { getByTestId } = render(
  //     <Provider>
  //       <MoonIcon testId="test" />
  //     </Provider>
  //   );
  //   const iconElement = getByTestId('test');
  //   expect(pressableElement.props.style.backgroundColor).toBe(
  //     defaultTheme.colors.red['200']
  //   );
  // });

  it('Pressable: style props test', () => {
    const { getByTestId } = render(
      <Provider>
        <Pressable testID="test" bg="red.200" _hover={{ bg: 'teal.300' }}>
          <Text>hello world</Text>
        </Pressable>
      </Provider>
    );
    const pressableElement = getByTestId('test');
    expect(pressableElement.props.style.backgroundColor).toBe(
      defaultTheme.colors.red['200']
    );
  });

  // it('Pressable: style props test on ios with dark mode', () => {
  //   const newTheme = extendTheme({
  //     config: { initialColorMode: 'dark' },
  //   });

  //   Platform.OS = 'ios';
  //   const { getByTestId } = render(
  //     <Provider theme={newTheme}>
  //       <Pressable testID="test" _ios={{ _dark: { bg: 'pink.900' } }}>
  //         PRIMARY
  //       </Pressable>
  //     </Provider>
  //   );
  //   const buttonElement = getByTestId('test');
  //   expect(buttonElement.props.style.backgroundColor).toBe(
  //     defaultTheme.colors.pink['900']
  //   );
  // });

  // it('Pressable: style responsive props test on ios with dark mode', () => {
  //   const newTheme = extendTheme({
  //     config: { initialColorMode: 'dark' },
  //   });
  //   Platform.OS = 'ios';
  //   const { getByTestId } = render(
  //     <Provider theme={newTheme}>
  //       <Pressable
  //         testID="test"
  //         _ios={{ _dark: { bg: ['pink.900', 'blue.900', 'cyan.900'] } }}
  //       >
  //         PRIMARY
  //       </Pressable>
  //     </Provider>
  //   );
  //   const buttonElement = getByTestId('test');
  //   expect(buttonElement.props.style.backgroundColor).toBe(
  //     defaultTheme.colors.blue['900']
  //   );
  // });
  // });
  it('HStack: style props test with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <HStack
          testID="test"
          direction="column"
          _dark={{
            direction: 'row',
          }}
        >
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </Provider>
    );

    const hstackElement = getByTestId('test');
    expect(hstackElement.props.style.flexDirection).toBe('row');
  });

  it('HStack: style props test on ios & dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Box>
          <Text
            // @ts-ignore
            fontSize="12px"
            testID="test"
            lineHeight="4xl"
            letterSpacing="xl"
            _ios={{
              _dark: {
                fontSize: '15px',
                letterSpacing: 'lg',
                lineHeight: '3xl',
              },
            }}
          >
            This is a text
          </Text>
          <Text
            testID="responsiveLineHeight"
            lineHeight="3xl"
            fontSize={['12px', '13px']}
          >
            hello world
          </Text>
        </Box>
      </Provider>
    );
    const text = getByTestId('test');
    const responsiveLineHeight = getByTestId('responsiveLineHeight');
    expect(text.props.style.lineHeight).toBe(37.5);
    expect(text.props.style.letterSpacing).toBe(0.375);
    expect(responsiveLineHeight.props.style.lineHeight).toBe(32.5);
  });

  it('Heading: style props test on ios with dark mode', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
    });
    Platform.OS = 'ios';
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Box>
          <Heading
            // @ts-ignore
            fontSize="12px"
            testID="test"
            lineHeight="4xl"
            letterSpacing="xl"
            _ios={{
              _dark: {
                fontSize: '15px',
                letterSpacing: 'lg',
                lineHeight: '3xl',
              },
            }}
          >
            This is a Heading
          </Heading>
        </Box>
      </Provider>
    );
    const heading = getByTestId('test');
    expect(heading.props.style.lineHeight).toBe(37.5);
    expect(heading.props.style.letterSpacing).toBe(0.375);
  });

  it('Pseudo props test: importatnt on Button', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
      components: {
        Button: {
          baseStyle: {
            _important: {
              bg: 'green.400',
            },
          },
        },
      },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Button bg="amber.500" testID="test">
          Button
        </Button>
      </Provider>
    );
    const button = getByTestId('test');
    expect(button.props.style.backgroundColor).toBe(
      defaultTheme.colors.green['400']
    );
  });

  it('Pseudo props test: normal prop on light and dark', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
      components: {
        Button: {
          baseStyle: {
            _light: {
              bg: 'green.700',
            },
            _dark: {
              bg: 'green.100',
            },
          },
        },
      },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Button bg="amber.500" testID="test">
          Button
        </Button>
      </Provider>
    );
    const button = getByTestId('test');
    expect(button.props.style.backgroundColor).toBe(
      defaultTheme.colors.amber['500']
    );
  });

  it('Pseudo props test: _important overrided', () => {
    const newTheme = extendTheme({
      config: { initialColorMode: 'dark' },
      components: {
        Button: {
          baseStyle: {
            _important: {
              bg: 'green.400',
            },
          },
          variants: {
            solid: {
              _important: {
                bg: 'emerald.800',
                _text: {
                  color: 'white',
                },
              },
            },
          },
        },
      },
    });
    const { getByTestId } = render(
      <Provider theme={newTheme}>
        <Button bg="amber.500" testID="test">
          Button
        </Button>
      </Provider>
    );
    const button = getByTestId('test');
    expect(button.props.style.backgroundColor).toBe(
      defaultTheme.colors.emerald['800']
    );
  });
});

// =========================================================
// it('Modal: size', () => {
//   const { getByTestId } = render(
//     <Provider>
//       <Modal isOpen={true} size="sm">
//         <Modal.Content testID="size">
//           <Modal.Header>Modal Title</Modal.Header>
//           <Modal.Body>
//             Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
//             ullamco deserunt aute id consequat veniam incididunt duis in sint
//             irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
//             officia tempor esse quis. Sunt ad dolore quis aute consequat.
//             Magna exercitation reprehenderit magna aute tempor cupidatat
//             consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
//             incididunt cillum quis. Velit duis sit officia eiusmod Lorem
//             aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
//             consectetur esse laborum eiusmod pariatur
//           </Modal.Body>
//         </Modal.Content>
//       </Modal>
//     </Provider>
//   );
//   const modalElement = getByTestId('size');

//   expect(modalElement.props.style.width).toBe('60%');
// });
