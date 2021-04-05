import type { ITextProps, IBoxProps } from '../../primitives';

export type IAlertProps = IBoxProps & {
  style?: any;
  status?: 'info' | 'warning' | 'success' | 'error' | string;
  colorScheme?: string;
  children?: JSX.Element | JSX.Element[] | any;
  variant?:
    | 'subtle'
    | 'solid'
    | 'left-accent'
    | 'top-accent'
    | 'outline'
    | 'outline-light';
  fontSize?: number;
  action?: JSX.Element;
  actionProps?: IBoxProps;
};
export type IAlertContext = {
  status?: string;
  variant?: string;
  iconColor?: string;
  textColor?: string;
};
export type IAlertComponentType = ((
  props: IAlertProps & { ref?: any }
) => JSX.Element) & {
  Description: React.MemoExoticComponent<
    (props: { _text?: any } & ITextProps & { ref?: any }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<(props: any & { ref?: any }) => JSX.Element>;
  Title: React.MemoExoticComponent<
    (props: { _text?: any } & ITextProps & { ref?: any }) => JSX.Element
  >;
};
