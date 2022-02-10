import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { useFormControlContext } from '../../composites/FormControl';
import type { IRadioContext, IRadioGroupProps } from './types';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-native-aria/radio';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export const RadioContext = React.createContext<IRadioContext>(
  {} as IRadioContext
);
const RadioWrapper = React.memo((props: any) => {
  // console.log('hello here group');
  return (
    <Box alignItems="flex-start" {...props.radioGroupProps} {...props}>
      {props.children}
    </Box>
  );
});

const RadioGroup = (
  { size, colorScheme, _radio, ...props }: IRadioGroupProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  const state = useRadioGroupState(props);
  const radioGroupState = useRadioGroup(
    { ...formControlContext, ...props, 'aria-label': props.accessibilityLabel },
    state
  );
  const [propsState] = React.useState(props);
  const contextValue: any = React.useMemo(() => {
    return {
      formControlContext,
      size,
      colorScheme,
      ..._radio,
      state,
    };
  }, [size, colorScheme, formControlContext, state, _radio]);

  const radioGroupProps = React.useMemo(
    () => radioGroupState.radioGroupProps,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // console.log(radioGroupState);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({ ...props, size, colorScheme })) {
    return null;
  }

  // return null;
  return (
    <Box ref={ref}>
      <RadioContext.Provider value={contextValue}>
        <RadioWrapper {...radioGroupProps} {...propsState} ref={ref} />
      </RadioContext.Provider>
    </Box>
  );
};

export default memo(forwardRef(RadioGroup));
