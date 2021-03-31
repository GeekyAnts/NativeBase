import type { IBoxProps } from '../../primitives';

export type IFormControlProps = IBoxProps & {
  nativeID?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

export type IFormControlLabelProps = IFormControlProps & {
  style?: any;
  _disabled?: any;
  // _focus?: any;
  _invalid?: any;
  htmlFor?: string;
};
export type IFormControlErrorMessageProps = IFormControlProps & {
  _disabled?: any;
};
export type IFormControlHelperTextProps = IFormControlProps & {
  style?: any;
  _disabled?: any;
  // _focus?: any;
  _invalid?: any;
};

export type FormControlComponentType = ((
  props: IFormControlProps
) => JSX.Element) & {
  Label: React.MemoExoticComponent<
    (props: IFormControlLabelProps) => JSX.Element
  >;
  ErrorMessage: React.MemoExoticComponent<
    (props: IFormControlProps) => JSX.Element
  >;
  HelperText: React.MemoExoticComponent<
    (props: IFormControlHelperTextProps) => JSX.Element
  >;
};
