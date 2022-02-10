import type { IColors } from '../../../theme/base/colors';
import type { ResponsiveValue } from '../../../components/types';
import type { MutableRefObject } from 'react';

export interface ITableProps {
  /**
   * Renders components as Tabel children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
  /**
   * color of table
   *
   */
  bg?: ResponsiveValue<IColors | (string & {})>;
  /**
   * align text in Table
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * Width of Table
   */
  width?: string | number;
}

export interface ITableRowProps extends ITableProps {
  /**
   * color of text
   */
  color?: ResponsiveValue<IColors | (string & {})>;
}
export interface ITableRowDataProps extends ITableProps {}
export interface ITableHeaderProps extends ITableProps {
  /**
   * color of text
   */
  color?: ResponsiveValue<IColors | (string & {})>;
}
export interface ITableHeaderDataProps extends ITableProps {}

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
    (props: ITableHeaderProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  HeaderData: React.MemoExoticComponent<
    (
      props: ITableHeaderDataProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};
