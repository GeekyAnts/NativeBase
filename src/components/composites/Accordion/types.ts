import type { IBoxProps, IIconProps } from '../../primitives';
import type { ITextProps } from '../../primitives/Text/types';

export type IAccordionProps = IBoxProps & {
  allowMultiple?: boolean;
  allowToggle?: boolean;
  index?: number[];
  defaultIndex?: number[];
  onChange?: (index?: number[]) => void;
  _text?: ITextProps;
};
export type IAccordionItemProps = IBoxProps & {
  index?: number;
  defaultIsOpen?: boolean;
  isDisabled?: boolean;
  id?: number;
  _text?: ITextProps;
};
export type IAccordionSummaryProps = IBoxProps & {
  style?: any;
  _expanded?: any;
  _disabled?: any;
  _hover?: any;
  _text?: ITextProps;
};
export type IAccordionDetailsProps = IBoxProps & {};
export type IAccordionContextProps = {
  index?: number[];
  changeHandler?: (isOpening: boolean, id: number) => void;
  _text?: ITextProps;
};
export type IAccordionItemContextProps = {
  index?: number;
  isOpen?: boolean;
  isDisabled?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  _text?: ITextProps;
};
export type IAccordionIconProps = IIconProps & {
  style?: any;
  _text?: ITextProps;
};
