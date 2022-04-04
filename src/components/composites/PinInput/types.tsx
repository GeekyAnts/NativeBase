import type { MutableRefObject } from 'react';
import type { InterfaceInputProps } from '../../primitives/Input/types';
import type { CustomProps, ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';

export type IPinInputProps = (InterfaceInputProps & {
  onChange?: (value: string) => void;
  children?: JSX.Element[] | JSX.Element;
  manageFocus?: boolean;
}) &
  CustomProps<'PinInput'>;

export type IPinInputFieldProps = InterfaceInputProps & {
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
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  defaultValue?: string[] | string;
  setRefList?: (ref: any, index: number) => void;
};
