import type { IColors } from '../../../theme/base/colors';
import type { ResponsiveValue } from '../../../components/types';
import type { MutableRefObject } from 'react';

export interface ITableProps {
  /**
   * Renders components as Tabel children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
  /**
   * Size of the table
   * @default md
   */
  size?: 'sm' | 'md' | 'ld';
  /**
   * color of table
   * @default gray
   */
  color?: ResponsiveValue<IColors | (string & {})>;
}

export interface ITableRowProps {}
export interface ITableRowDataProps {
  children?: JSX.Element | JSX.Element[] | string | any;

  width?: string | number;
}
export interface ITableHeaderProps {}
export interface ITableHeaderDataProps {
  children?: JSX.Element | JSX.Element[] | string | any;

  width?: string | number;
}

export type ITableComponentType = ((
  props: ITableProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Row: React.MemoExoticComponent<
    (props: ITableRowProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Data: React.MemoExoticComponent<
    (props: ITableRowDataProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (props: ITableRowDataProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  HeaderData: React.MemoExoticComponent<
    (props: ITableRowDataProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
