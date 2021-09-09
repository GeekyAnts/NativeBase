import React from 'react';
import { usePropsResolution } from '../../../hooks';
import type { ITextFieldProps } from './types';
import { Stack } from '../../primitives/Stack';
import { Input } from '../../primitives/Input';
import Text from '../../primitives/Text';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import Select from '../../primitives/Select';
import TextArea from '../../primitives/TextArea';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

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

  const {
    divider,
    _errorMessageProps,
    _helperTextProps,
    component,
    ...resolvedProps
  } = usePropsResolution('TextField', props);

  const [layoutProps, componentProps] = extractInObject(resolvedProps, [
    'space',
    'reversed',
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
  ]);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
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
