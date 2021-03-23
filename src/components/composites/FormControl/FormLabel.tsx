import React from 'react';
import Box from '../../primitives/Box';
import Text from '../../primitives/Text';
import { useToken } from '../../../hooks';
import { useFormControlContext } from './useFormControl';
import type { IFormControlLabelProps } from './types';
import { mergeRefs } from '../../../utils';

const FormLabel = (
  { children, _disabled, _invalid, ...props }: IFormControlLabelProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();
  const textColor = useToken('colors', 'red.300');
  const _ref = React.useRef<HTMLLabelElement>(null);
  const requiredAsterisk = () => (
    <Text
      //@ts-ignore web only role
      accessibilityRole="presentation"
      accessibilityHidden
      color={textColor}
    >
      *
    </Text>
  );

  const mergedRef = mergeRefs([_ref, ref]);

  React.useEffect(() => {
    if (_ref.current) {
      // RN web doesn't support htmlFor for Label element yet
      if (props.htmlFor) {
        _ref.current.htmlFor = props.htmlFor;
      } else if (formControlContext?.nativeID) {
        _ref.current.htmlFor = formControlContext.nativeID;
      }
    }
  }, [formControlContext?.nativeID, props.htmlFor]);

  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      _text={{ fontSize: 'md' }}
      accessibilityRole="label"
      nativeID={formControlContext?.labelId}
      {...props}
      ref={mergedRef}
      {...(formControlContext?.isInvalid && _invalid)}
      {...(formControlContext?.isDisabled && _disabled)}
    >
      {children}
      {formControlContext?.isRequired && requiredAsterisk()}
    </Box>
  );
};
export default React.memo(React.forwardRef(FormLabel));
