import React from 'react';

export function useControllableProp<T>(prop: T | undefined, state: T) {
  const { current: isControlled } = React.useRef(prop !== undefined);
  const value = isControlled && typeof prop !== 'undefined' ? prop : state;
  return [isControlled, value] as const;
}

export interface UseControllableStateProps<T> {
  /**
   * The value to used in controlled mode
   */
  value?: T;
  /**
   * The initial value to be used, in uncontrolled mode
   */
  defaultValue?: T | (() => T);
  /**
   * The callback fired when the value changes
   */
  onChange?: (value: T) => void;
  /**
   * The component name (for warnings)
   */
  name?: string;
}

/**
 * React hook for using controlling component state.
 * @param props
 */
export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const { value: valueProp, defaultValue, onChange } = props;

  const [valueState, setValue] = React.useState(defaultValue as T);
  const isControlled = valueProp !== undefined;

  const value = isControlled ? (valueProp as T) : valueState;

  const updateValue = React.useCallback(
    (next: any) => {
      const nextValue = typeof next === 'function' ? next(value) : next;
      if (!isControlled) {
        setValue(nextValue);
      }
      onChange && onChange(nextValue);
    },
    [isControlled, onChange, value]
  );

  return [value, updateValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
