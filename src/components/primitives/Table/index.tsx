import TableMain from './Table';
import TableHeader from './TableHeader';
import TableHeaderData from './TableHeaderData';
import TableData from './TableData';
import TableRow from './TableRow';
import type { ITableComponentType } from './types';

const TableTemp: any = TableMain;
TableTemp.Header = TableHeader;
TableTemp.HeaderData = TableHeaderData;
TableTemp.Row = TableRow;
TableTemp.Data = TableData;

const Table = TableTemp as ITableComponentType;

export default Table;
