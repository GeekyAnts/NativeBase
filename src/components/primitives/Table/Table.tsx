import React from 'react';
// import { ScrollView } from '../../basic/ScrollView/ScrollView';
import Box from '../Box/index';
import type { ITableProps } from './types';
import TableData from './TableData';
import TableHeaderData from './TableHeaderData';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

const Table = ({ children, ...props }: ITableProps) => {
  const tableComponents: any = [];
  const notTableComponents: any = [];
  let max_col = -1;

  /**
   * Calculating maximum columns
   */
  React.Children.map(children, (child: any) => {
    if (
      child?.props?.children?.length &&
      (child.type === TableRow || child.type === TableHeader)
    ) {
      let curr_max_col = 0;
      child.props.children.map((rowChild: any) => {
        if (rowChild.type === TableData || rowChild.type === TableHeaderData) {
          curr_max_col++;
        }
      });
      max_col = Math.max(max_col, curr_max_col);
    }
  });

  const maxWidthArr: any = [];

  const { ...resolvedProps } = usePropsResolution('Table', props);

  const getTable = () => {
    getAllMaxWidth();
    React.Children.map(children, (child, index) => {
      const extraColumns: JSX.Element[] = [];
      const columns: JSX.Element[] = [];
      if (
        typeof child === 'string' ||
        (child.type !== TableRow && child.type !== TableHeader)
      ) {
        notTableComponents.push(child);
        return;
      }

      if (!child.props.children) return;

      if (!child.props.children.length) {
        for (let i = 0; i < max_col - 1; i++) {
          let width = '';
          if (maxWidthArr[i + 1] && maxWidthArr[i + 1].percentage !== -1) {
            width = `${maxWidthArr[i + 1].percentage}%`;
          } else if (maxWidthArr[i + 1] && maxWidthArr[i + 1].px !== -1) {
            width = `${maxWidthArr[i + 1].px}px`;
          }
          extraColumns.push(
            React.cloneElement(
              <TableData />,
              {
                key: `...${i + 1}`,
                width: width ? width : `${100 / max_col}%`,
              },
              null
            )
          );
        }
        let width = '';
        if (maxWidthArr[0] && maxWidthArr[0].percentage !== -1) {
          width = `${maxWidthArr[0].percentage}%`;
        } else if (maxWidthArr[0] && maxWidthArr[0].px !== -1) {
          width = `${maxWidthArr[0].px}px`;
        }
        //TODO: change variable naming
        const rowOne = React.cloneElement(
          child.props.children,
          {
            key: `...0`,
            ...child.props.children,
            width: width ? width : `${100 / max_col}%`,
          },
          child.props.children
        );
        const tableRow = React.cloneElement(
          child,
          {
            key: `.${index}`,
            ...child.props,
          },
          [rowOne, ...extraColumns]
        );
        tableComponents.push(tableRow);
      } else {
        /**To maintain table columns */
        if (child.props.children.length < max_col) {
          for (let i = 0; i < max_col - child.props.children.length; i++) {
            let width = '';
            if (
              maxWidthArr[i + child.props.children.length] &&
              maxWidthArr[i + child.props.children.length].percentage !== -1
            ) {
              width = `${
                maxWidthArr[i + child.props.children.length].percentage
              }%`;
            } else if (
              maxWidthArr[i + child.props.children.length] &&
              maxWidthArr[i + child.props.children.length].px
            ) {
              width = `${maxWidthArr[i + child.props.children.length].px}px`;
            }
            extraColumns.push(
              React.cloneElement(
                <TableData />,
                {
                  key: `...${i + child.props.children.length}`,
                  width: width ?? `${100 / max_col}%`,
                },
                null
              )
            );
          }
        }

        /**For existing children (column) */
        let columnsIndex = 0;
        for (let i = 0; i < child.props.children.length; i++) {
          if (typeof child.props.children[i] === 'string') {
            notTableComponents.push(child.props.children[i]);
            i++;
          }
          const restProps = { ...child.props.children[i].props };
          restProps.width = '';
          let width = '';
          if (
            maxWidthArr[columnsIndex] &&
            maxWidthArr[columnsIndex].px !== -1
          ) {
            width = `${maxWidthArr[columnsIndex].px}px`;
          } else if (
            maxWidthArr[columnsIndex] &&
            maxWidthArr[columnsIndex].percentage !== -1
          ) {
            width = `${maxWidthArr[columnsIndex].percentage}%`;
          }
          if (
            child.props.children[i].type === TableHeaderData ||
            child.props.children[i].type === TableData
          ) {
            columns.push(
              React.cloneElement(
                child.props.children[i],
                {
                  key: `...${i}`,
                  ...restProps,
                  width: width ? width : `${100 / max_col}%`,
                },
                child.props.children[i].props.children
              )
            );
            columnsIndex++;
          } else {
            notTableComponents.push(
              React.cloneElement(
                child.props.children[i],
                {
                  key: `...${i}`,
                  ...restProps,
                },
                child.props.children[i].props.children
              )
            );
          }
        }
        const tableRow = React.cloneElement(
          child,
          {
            key: `.${index}`,
            ...child.props,
          },
          [...columns, ...extraColumns]
        );
        tableComponents.push(tableRow);
      }
    });
    return tableComponents;
  };

  function getAllMaxWidth() {
    /**
     * Iterate throguh children
     */
    React.Children.map(children, (child) => {
      /**
       * Check if just string is passed as child in row
       */
      if (
        typeof child === 'string' ||
        (child.type !== TableRow && child.type !== TableHeader)
      ) {
        return;
      }

      if (!child.props.children) return;

      if (!child.props.children.length) {
        /**
         * if only one child is passed inside row
         */
        if (!maxWidthArr[0]) maxWidthArr[0] = { px: -1, percentage: -1 };
        if (child.props.children.props.width) {
          const width = child.props.children.props.width;
          if (width.slice(-2) === 'px') {
            const curr_width = parseInt(width.substr(0, width.length - 2), 10);
            if (!isNaN(curr_width)) {
              const max_width = Math.max(maxWidthArr[0].px, curr_width);
              maxWidthArr[0].px = max_width;
            }
          } else if (width.slice(-1) === '%') {
            const curr_width = parseInt(width.substr(0, width.length - 1), 10);
            if (!isNaN(curr_width)) {
              const max_width = Math.max(maxWidthArr[0].percentage, curr_width);

              maxWidthArr[0].percentage = max_width;
            }
          } else if (!isNaN(width)) {
            const curr_width = parseInt(width, 10);
            const max_width = Math.max(maxWidthArr[0].px, curr_width);
            maxWidthArr[0].px = max_width;
          }
        }
      } else {
        /**
         * Map through children of row
         */
        let index = 0;

        child.props.children.map((rowChild: any) => {
          /**
           * Initialize array index if not initialized.
           */
          if (!maxWidthArr[index])
            maxWidthArr[index] = { px: -1, percentage: -1 };

          if (typeof rowChild === 'string') return;

          /**
           * Check if width is passed as prop, also check if child type is `TableHeaderData` or `TableData`
           */
          if (
            rowChild?.props?.width &&
            (rowChild?.type === TableHeaderData || rowChild?.type === TableData)
          ) {
            const width = rowChild.props.width;
            if (width.slice(-2) === 'px') {
              const curr_width = parseInt(
                width.substr(0, width.length - 2),
                10
              );
              if (!isNaN(curr_width)) {
                const max_width = Math.max(maxWidthArr[index].px, curr_width);
                maxWidthArr[index].px = max_width;
              }
            } else if (width.slice(-1) === '%') {
              const curr_width = parseInt(
                width.substr(0, width.length - 1),
                10
              );
              if (!isNaN(curr_width)) {
                const max_width = Math.max(
                  maxWidthArr[index].percentage,
                  curr_width
                );

                maxWidthArr[index].percentage = max_width;
              }
            } else if (!isNaN(width)) {
              const curr_width = parseInt(width, 10);
              const max_width = Math.max(maxWidthArr[index].px, curr_width);
              maxWidthArr[index].px = max_width;
            }
            index++;
          }
        });
      }
    });
  }

  return (
    <>
      {notTableComponents}
      {/* <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        mb={6}
      > */}
      <Box
        {...resolvedProps}
        //  borderRadius={10} p="4"
      >
        {getTable()}
      </Box>
      {/* </ScrollView> */}
    </>
  );
};

export default Table;
