import type { IBoxProps, IIconProps } from '../../primitives';

export type IAccordionProps = IBoxProps & {
  allowMultiple?: boolean;
  allowToggle?: boolean;
  index?: number[];
  defaultIndex?: number[];
  onChange?: (index?: number[]) => void;
};
export type IAccordionItemProps = IBoxProps & {
  index?: number;
  defaultIsOpen?: boolean;
  isDisabled?: boolean;
  id?: number;
};
export type IAccordionButtonProps = IBoxProps & {
  style?: any;
  _expanded?: any;
  _disabled?: any;
  _hover?: any;
};
export type IAccordionPanelProps = IBoxProps & {};
export type IAccordionContextProps = {
  index?: number[];
  changeHandler?: (isOpening: boolean, id: number) => void;
};
export type IAccordionItemContextProps = {
  index?: number;
  isOpen?: boolean;
  isDisabled?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};
export type IAccordionIconProps = IIconProps & {
  style?: any;
};
