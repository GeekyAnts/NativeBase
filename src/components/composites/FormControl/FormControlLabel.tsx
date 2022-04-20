import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import Text from '../../primitives/Text';
import { useFormControlContext } from './useFormControl';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IFormControlLabelProps } from './types';
import { mergeRefs } from '../../../utils';
import { combineContextAndProps } from '../../../utils';

const FormControlLabel = (
  { children, ...props }: IFormControlLabelProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  const _ref = React.useRef<HTMLLabelElement>(null);
  const { _astrick, ...reslovedProps } = usePropsResolution(
    'FormControlLabel',
    combinedProps,
    {
      isDisabled: combinedProps.isDisabled,
      isReadOnly: combinedProps.isReadOnly,
      isInvalid: combinedProps.isInvalid,
      // isRequired: combinedProps.isRequired,
    }
  );

  const requiredAsterisk = () => (
    <Text
      _web={{
        accessibilityHidden: true,
        //@ts-ignore
        accessibilityRole: 'presentation',
      }}
      {..._astrick}
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
      } else if (reslovedProps?.nativeID) {
        _ref.current.htmlFor = reslovedProps.nativeID;
      }
    }
  }, [reslovedProps?.nativeID, props.htmlFor]);

  return (
    <Box
      _web={{
        //@ts-ignore
        accessibilityRole: 'label',
      }}
      {...reslovedProps}
      nativeID={reslovedProps?.labelId}
      ref={mergedRef}
    >
      {children}
      {reslovedProps?.isRequired && requiredAsterisk()}
    </Box>
  );
};
export default memo(forwardRef(FormControlLabel));
