import type { ITextProps } from '../../primitives';
import type { CustomProps } from '../../../components/types/utils';
import type { IBoxProps, IStackProps } from '../../primitives';
import type { InterfaceBoxProps } from '../../../components/primitives/Box';

export interface InterfaceFormControlProps
  extends InterfaceBoxProps<IFormControlProps> {
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
  _disabled?: Partial<IBoxProps<IFormControlLabelProps>>;
  // _focus?: any;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: Partial<IBoxProps<IFormControlLabelProps>>;
  /**
   * Reflects the value of the 'for' content property.
   */
  htmlFor?: string;
  /**
   * Props applied to astrick text
   */
  _astrick?: Partial<ITextProps>;
}
export interface IFormControlErrorMessageProps extends IFormControlProps {
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: Partial<IBoxProps<IFormControlLabelProps>>;
  /**
   * The right icon element to use in the FormControl.ErrorMessage.
   */
  rightIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The left icon element to use in the FormControl.ErrorMessage.
   */
  leftIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The start icon element to use in the FormControl.ErrorMessage.
   */
  startIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The end icon element to use in the FormControl.ErrorMessage.
   */
  endIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * Props to be passed to the HStack used inside of FormControl.ErrorMessage.
   */
  _stack?: Partial<IStackProps>;
}
export interface IFormControlHelperTextProps extends IFormControlProps {
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: Partial<IBoxProps<IFormControlLabelProps>>;
  // _focus?: any;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: Partial<IBoxProps<IFormControlLabelProps>>;
}

export type FormControlComponentType = ((
  props: IFormControlProps
) => JSX.Element) & {
  Label: React.MemoExoticComponent<
    (props: IFormControlLabelProps) => JSX.Element
  >;
  ErrorMessage: React.MemoExoticComponent<
    (props: IFormControlErrorMessageProps) => JSX.Element
  >;
  HelperText: React.MemoExoticComponent<
    (props: IFormControlHelperTextProps) => JSX.Element
  >;
};

export type IFormControlProps = InterfaceFormControlProps &
  CustomProps<'FormControl'>;
