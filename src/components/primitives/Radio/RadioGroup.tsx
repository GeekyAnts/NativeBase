import React, { memo, forwardRef } from 'react';
import { Stack } from '../Stack';
import { useFormControlContext } from '../../composites/FormControl';
import type { IRadioContext, IRadioGroupProps } from './types';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-native-aria/radio';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export const RadioContext = React.createContext<IRadioContext>(
  {} as IRadioContext
);
const RadioWrapper = memo((props: any) => {
  const resolvedProps = usePropsResolution('RadioGroup', props);
  return <Stack {...resolvedProps} {...props.radioGroupProps} {...props} />;
});

const RadioGroup = (
  { size, colorScheme, _radio, children, ...props }: IRadioGroupProps,
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

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({ ...props, size, colorScheme })) {
    return null;
  }

  return (
    <RadioContext.Provider value={contextValue}>
      <RadioWrapper {...radioGroupProps} {...propsState} ref={ref}>
        {children}
      </RadioWrapper>
    </RadioContext.Provider>
  );
};

export default memo(forwardRef(RadioGroup));
