import type { IBoxProps, IIconProps } from '../../primitives';
import type { ICollapseProps } from '../../composites/Collapse';

export type IAccordionProps = ICollapseProps & {
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
export type IAccordionSummaryProps = IBoxProps & {
  style?: any;
  _expanded?: any;
  _disabled?: any;
  _hover?: any;
};
export type IAccordionDetailsProps = ICollapseProps & {};
export type IAccordionContextProps = {
  index?: number[];
  changeHandler?: (isOpening: boolean, id: number) => void;
  AnimationProps?: any;
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

export type IAccordionComponentType = ((
  props: IAccordionProps & { ref?: any }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: IAccordionItemProps & { ref?: any }) => JSX.Element
  >;
  Summary: React.MemoExoticComponent<
    (props: IAccordionSummaryProps & { ref?: any }) => JSX.Element
  >;
  Details: React.MemoExoticComponent<
    (props: IAccordionDetailsProps & { ref?: any }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: IAccordionIconProps & { ref?: any }) => JSX.Element
  >;
};
