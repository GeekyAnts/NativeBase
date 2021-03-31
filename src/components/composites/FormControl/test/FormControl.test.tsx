import React from 'react';
import { FormControl, useFormControl } from '../index';
import { TextInput } from 'react-native';
import { render } from '@testing-library/react-native';
import { Wrapper } from '../../../../utils/test-utils';

const Input = React.forwardRef((props: any, ref: any) => {
  const inputProps = useFormControl(props);
  return (
    //@ts-ignore
    <TextInput ref={ref} {...inputProps} />
  );
});

it('a11y test in when required', async () => {
  let { getByPlaceholderText } = render(
    <Wrapper>
      <FormControl nativeID="name" isRequired>
        <FormControl.Label>Name</FormControl.Label>
        <Input placeholder="Name" />
        <FormControl.HelperText>Enter your name please!</FormControl.HelperText>
        <FormControl.ErrorMessage>
          Your name is invalid
        </FormControl.ErrorMessage>
      </FormControl>
    </Wrapper>
  );
  const textInput = getByPlaceholderText('Name');
  expect(textInput.props.accessibilityRequired).toBe(true);
  expect(textInput.props.required).toBe(true);
});

it('a11y test in when invalid', async () => {
  let { getByPlaceholderText } = render(
    <Wrapper>
      <FormControl nativeID="name" isInvalid>
        <FormControl.Label>Name</FormControl.Label>
        <Input placeholder="Name" />
        <FormControl.HelperText>Enter your name please!</FormControl.HelperText>
        <FormControl.ErrorMessage>
          Your name is invalid
        </FormControl.ErrorMessage>
      </FormControl>
    </Wrapper>
  );
  const textInput = getByPlaceholderText('Name');
  expect(textInput.props.accessibilityInvalid).toBe(true);
});

it('a11y test in when readOnly', async () => {
  let { getByPlaceholderText } = render(
    <Wrapper>
      <FormControl nativeID="name" isReadOnly>
        <FormControl.Label>Name</FormControl.Label>
        <Input placeholder="Name" />
        <FormControl.HelperText>Enter your name please!</FormControl.HelperText>
        <FormControl.ErrorMessage>
          Your name is invalid
        </FormControl.ErrorMessage>
      </FormControl>
    </Wrapper>
  );
  const textInput = getByPlaceholderText('Name');
  expect(textInput.props.accessibilityReadOnly).toBe(true);
  expect(textInput.props.readOnly).toBe(true);
});

it('a11y test in when disabled', async () => {
  let { getByPlaceholderText } = render(
    <Wrapper>
      <FormControl nativeID="name" isDisabled>
        <FormControl.Label>Name</FormControl.Label>
        <Input placeholder="Name" />
        <FormControl.HelperText>Enter your name please!</FormControl.HelperText>
        <FormControl.ErrorMessage>
          Your name is invalid
        </FormControl.ErrorMessage>
      </FormControl>
    </Wrapper>
  );
  const textInput = getByPlaceholderText('Name');
  expect(textInput.props.disabled).toBe(true);
});

it('a11y test when helper text is present', async () => {
  let { getByPlaceholderText } = render(
    <Wrapper>
      <FormControl nativeID="name" isDisabled>
        <FormControl.Label>Name</FormControl.Label>
        <Input placeholder="Name" />
        <FormControl.HelperText>Enter your name please!</FormControl.HelperText>
      </FormControl>
    </Wrapper>
  );
  const textInput = getByPlaceholderText('Name');
  expect(textInput.props.accessibilityDescribedBy).toBe('name-helptext');
  expect(textInput.props.accessibilityReadOnly).toBeUndefined();
  expect(textInput.props.accessibilityInvalid).toBeUndefined();
  expect(textInput.props.accessibilityRequired).toBeUndefined();
});

it('sets htmlFor of FormLabel ref to nativeID of Input', async () => {
  let ref: HTMLLabelElement;
  const inputID = 'name';
  let { getByPlaceholderText } = render(
    <Wrapper>
      <FormControl nativeID={inputID} isInvalid>
        <FormControl.Label
          //@ts-ignore
          ref={(_ref) => (ref = _ref)}
        >
          Name
        </FormControl.Label>
        <Input placeholder="Name" />
        <FormControl.HelperText>Enter your name please!</FormControl.HelperText>
        <FormControl.ErrorMessage>
          Your name is invalid
        </FormControl.ErrorMessage>
      </FormControl>
    </Wrapper>
  );
  const textInput = getByPlaceholderText('Name');
  //@ts-ignore
  expect(textInput.props.nativeID).toBe(ref.htmlFor);
});
