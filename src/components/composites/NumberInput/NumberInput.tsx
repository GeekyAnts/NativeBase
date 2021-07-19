import React from 'react';
import { useFormControlContext } from '../FormControl';
import type { INumberInputProps } from './types';
import { NumberInputContext } from './Context';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { numberOfDecimals } from './utils';

const NumberInput = ({ children, ...props }: INumberInputProps, ref?: any) => {
  const {
    defaultValue,
    keepWithinRange = true,
    value,
    min,
    max,
    clampValueOnBlur = true,
    focusInputOnChange = true,
    precision,
    isReadOnly,
    onChange,
    step,
    ...newProps
  } = usePropsResolution('NumberInput', props);
  const formControlContext = useFormControlContext();

  const _ref = React.useRef();
  // setting initial state of numberInputValue
  // if value exists then value with precision , else default value, else empty string
  const [numberInputValue, setNumberInputValue] = React.useState(
    value
      ? parseFloat(value.toString()).toFixed(
          precision ?? numberOfDecimals(parseFloat(value), step)
        )
      : defaultValue
      ? parseFloat(defaultValue).toFixed(
          precision ?? numberOfDecimals(parseFloat(defaultValue), step)
        )
      : ''
  );
  const [numberInputStepper, setNumberInputStepper] = React.useState('');
  const handleChange = (newValue: any) => {
    let temp = newValue.toString();

    //Pseudo code for understanding conditions

    //     if keepwithinrange
    //     if precision
    //         if valueclamp == false
    //             setNumberInputValue= parseFloat(stringvalue).toFixed(precision)

    //         else
    //             if inconditions
    //                 setNumberInputValue= parseFloat(stringvalue).toFixed(precision)
    //             else
    //                 if less than min
    //                     setNumberInputValue= minvalue.toFixed(precision));
    //                 if less than min
    //                     setNumberInputValue= maxvalue.toFixed(precision));

    //     else
    //         if valueclamp ==false
    //             setNumberInputValue = stringvalue
    //         else
    //             if less than min
    //                  setNumberInputValue= min
    //             else if greater than max
    //                  setNumberInputValue= max
    //             else
    //                 setNumberInputValue=value;

    // else
    //     if valueclamp== false
    //         setNumberInputValue= value
    //     else
    //         if less than min
    //                  setNumberInputValue= min
    //             else if greater than max
    //                  setNumberInputValue= max
    //             else
    //                 setNumberInputValue=value;

    if (keepWithinRange) {
      if (precision) {
        if (clampValueOnBlur == false) {
          setNumberInputValue(parseFloat(temp).toFixed(precision));
        } else {
          if (
            parseFloat(temp) >= min &&
            parseFloat(temp) <= max &&
            parseFloat(parseFloat(temp).toFixed(precision)) >= min &&
            parseFloat(parseFloat(temp).toFixed(precision)) <= max
          ) {
            setNumberInputValue(parseFloat(temp).toFixed(precision));
          } else {
            if (
              temp < min ||
              parseFloat(parseFloat(temp).toFixed(precision)) < min
            )
              setNumberInputValue(min.toFixed(precision));
            else if (
              temp > max ||
              parseFloat(parseFloat(temp).toFixed(precision)) > max
            )
              setNumberInputValue(max.toFixed(precision));
          }
        }
      } else {
        if (clampValueOnBlur == false) {
          setNumberInputValue(temp);
        } else {
          if (temp < min) setNumberInputValue(min.toString());
          else if (temp > max) setNumberInputValue(max.toString());
          else {
            setNumberInputValue(temp);
          }
        }
      }
    } else {
      if (clampValueOnBlur == false) {
        setNumberInputValue(temp);
      } else {
        if (temp < min) setNumberInputValue(min.toString());
        else if (temp > max) setNumberInputValue(max.toString());
        else {
          setNumberInputValue(temp);
        }
      }
    }

    //NOTE: only calling onChange on stepper click or blur event of input.
    onChange && onChange(temp);
  };
  const handleChangeWithoutCheck = (newValue: number) => {
    const temp = newValue.toString();
    setNumberInputValue(temp);
  };

  React.useEffect(() => {
    if (value !== undefined && value != numberInputValue)
      setNumberInputValue(value);
  }, [value, numberInputValue, setNumberInputValue]);
  return (
    <NumberInputContext.Provider
      value={{
        ...formControlContext,
        ...newProps,
        ref,
        _ref,
        min,
        max,
        step,
        precision,
        defaultValue: defaultValue ?? null,
        clampValueOnBlur,
        isReadOnly,
        handleChange,
        handleChangeWithoutCheck,
        numberInputValue: numberInputValue ?? '',
        numberInputStepper,
        setNumberInputStepper,
        focusInputOnChange,
        isControlled: value !== undefined,
      }}
    >
      {children}
    </NumberInputContext.Provider>
  );
};

export default React.memo(React.forwardRef(NumberInput));
