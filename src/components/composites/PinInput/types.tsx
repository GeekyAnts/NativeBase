import type { MutableRefObject } from 'react';
import type { IInputProps } from '../../primitives';

export type IPinInputProps = IInputProps & {
  onChange?: (value: string) => void;
  children?: JSX.Element[] | JSX.Element;
  manageFocus?: boolean;
};

export type IPinInputFieldProps = IInputProps & {
  fieldIndex?: number;
  inputSize?: number | string;
};
export type IPinInputComponentType = ((
  props: IPinInputProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Field: React.MemoExoticComponent<
    (
      props: IPinInputFieldProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};
export type IPinInputContext = IPinInputProps & {
  handleChange?: (value: string, index: number) => void;
  handleMultiValueChange?: (value: string, index: number) => void;
  value?: string[] | string;
  size?: string;
  defaultValue?: string[] | string;
  setRefList?: (ref: any, index: number) => void;
};
