import type { IBoxProps } from '../../primitives';

export interface IFormControlProps extends IBoxProps<IFormControlProps> {
  /**
   * If provided, this prop is passed to its children.
   */
  nativeID?: string;
  /**
   * If true, this prop is passed to its children.
   */
  isInvalid?: boolean;
  /**
   * If true, this prop is passed to its children.
   */
  isRequired?: boolean;
  /**
   * If true, this prop is passed to its children.
   */
  isDisabled?: boolean;
  /**
   * If true, this prop is passed to its children.
   */
  isReadOnly?: boolean;
}

export interface IFormControlLabelProps extends IFormControlProps {
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: IBoxProps<IFormControlLabelProps>;
  // _focus?: any;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: IBoxProps<IFormControlLabelProps>;
  /**
   * Reflects the value of the 'for' content property.
   */
  htmlFor?: string;
}
export interface IFormControlErrorMessageProps extends IFormControlProps {
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: IBoxProps<IFormControlLabelProps>;
}
export interface IFormControlHelperTextProps extends IFormControlProps {
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: IBoxProps<IFormControlLabelProps>;
  // _focus?: any;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: IBoxProps<IFormControlLabelProps>;
}

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
