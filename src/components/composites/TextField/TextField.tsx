import React from 'react';
import { useThemeProps, usePlatformProps } from '../../../hooks';
import type { ITextFieldProps } from './types';
import { Stack } from '../../primitives/Stack';
import { Input } from '../../primitives/Input';
import Text from '../../primitives/Text';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import Select from '../../primitives/Select';
import TextArea from '../../primitives/TextArea';

const TextField = (mainProps: ITextFieldProps, ref?: any) => {
  //TODO: Remove `any`
  const {
    children,
    helperText,
    errorMessage,
    InputLeftElement,
    InputRightElement,
    dropdownIcon,
    ...props
  }: any = mainProps;

  const { divider, ...themedProps } = useThemeProps('TextField', props);

  // usePlatformProps is merging Platform specific props to themedProps
  const {
    _errorMessageProps,
    _helperTextProps,
    component,
    ...platformProps
  } = usePlatformProps(themedProps);

  const [layoutProps, componentProps] = extractInObject(platformProps, [
    'space',
    'reversed',
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
  ]);

  const activeComponent = () => {
    switch (component) {
      case 'select':
        return (
          <Select {...componentProps} dropdownIcon={dropdownIcon}>
            {children}
          </Select>
        );
      case 'textarea':
        return <TextArea {...componentProps} ref={ref} />;
      default:
        return (
          <Input
            InputLeftElement={InputLeftElement}
            InputRightElement={InputRightElement}
            {...componentProps}
            ref={ref}
          />
        );
    }
  };

  return (
    <Stack divider={divider} {...layoutProps}>
      {activeComponent()}
      {componentProps.isInvalid && (
        <Text {..._errorMessageProps}>{errorMessage}</Text>
      )}
      {!componentProps.isInvalid && (
        <Text {..._helperTextProps}>{helperText}</Text>
      )}
    </Stack>
  );
};

export default React.memo(React.forwardRef(TextField));
