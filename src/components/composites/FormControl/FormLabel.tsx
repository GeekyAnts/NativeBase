import React from 'react';
import Box from '../../primitives/Box';
import Text from '../../primitives/Text';
import { useFormControlContext } from './useFormControl';
import { useThemeProps } from '../../../hooks';
import type { IFormControlLabelProps } from './types';
import { mergeRefs } from '../../../utils';

const FormLabel = (
  { children, _disabled, _invalid, ...props }: IFormControlLabelProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();
  const _ref = React.useRef<HTMLLabelElement>(null);
  const { astrickColor, ...themedProps } = useThemeProps(
    'FormControlLabel',
    props
  );

  const requiredAsterisk = () => (
    <Text
      //@ts-ignore web only role
      accessibilityRole="presentation"
      accessibilityHidden
      color={astrickColor}
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
      accessibilityRole="label"
      {...themedProps}
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
