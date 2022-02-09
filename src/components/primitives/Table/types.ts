import type { IColors } from '../../../theme/base/colors';
import type { ResponsiveValue } from '../../../components/types';

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
export interface ITableRowDataProps {}
export interface ITableHeaderProps {}
export interface ITableHeaderDataProps {}
