import React from 'react';
import { ScrollView } from '../../basic/ScrollView/ScrollView';
import Box from '../Box/index';
import type { ITableProps } from './types';
import TableData from './TableData';
import TableHeaderData from './TableHeaderData';

const Table = ({ children, ...props }: ITableProps) => {
  const tableComponents: JSX.Element[] = [];
  const notTableComponents: JSX.Element[] = [];
  let max_col = -1;

  React.Children.map(children, (child: any) => {
    if (child?.props?.children?.length)
      max_col = Math.max(max_col, child.props.children.length);
  });

  const maxWidthArr: any = [];

  const getTable = () => {
    getAllMaxWidth();
    React.Children.map(children, (child, index) => {
      const extraColumns: JSX.Element[] = [];
      const columns: JSX.Element[] = [];
      if (typeof child === 'string') {
        notTableComponents.push(child);
        return;
      }

      if (!child.props.children.length) {
        const tableRow = React.cloneElement(
          child,
          {
            bg: index % 2 ? 'gray.200' : child?.props?.bg,
            key: `.${index}`,
            ...child.props,
          },
          child.props.children
        );
        tableComponents.push(tableRow);
      } else {
        /**To maintain table columns */
        if (child.props.children.length < max_col) {
          for (let i = 0; i < max_col - child.props.children.length; i++) {
            let width = '';
            if (maxWidthArr[i] && maxWidthArr[i].percentage !== -1) {
              width = `${maxWidthArr[i].percentage}%`;
            } else if (maxWidthArr[i] && maxWidthArr[i].px) {
              width = `${maxWidthArr[i].px}px`;
            }
            extraColumns.push(
              React.cloneElement(
                <TableData />,
                {
                  key: `...${i + child.props.children.length}`,
                  width,
                },
                null
              )
            );
          }
        }

        /**For existing children (column) */
        let columnsIndex = 0;
        for (let i = 0; i < child.props.children.length; i++) {
          const restProps = { ...child.props.children[i].props };
          restProps.width = '';
          let width = '';
          if (
            maxWidthArr[columnsIndex] &&
            maxWidthArr[columnsIndex].percentage !== -1
          ) {
            width = `${maxWidthArr[columnsIndex].percentage}%`;
          } else if (maxWidthArr[columnsIndex] && maxWidthArr[i].px !== -1) {
            width = `${maxWidthArr[columnsIndex].px}px`;
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
                  width,
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
            bg: index % 2 ? 'gray.200' : child?.props?.bg,
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
    React.Children.map(children, (child) => {
      if (typeof child === 'string') return;
      if (!child.props.children.length) {
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
        child.props.children.map((c: any, index: number) => {
          if (!maxWidthArr[index])
            maxWidthArr[index] = { px: -1, percentage: -1 };
          if (
            c?.props?.width &&
            (c?.type === TableHeaderData || c?.type === TableData)
          ) {
            const width = c.props.width;
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
          }
        });
      }
    });
  }

  return (
    <>
      {notTableComponents}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        mb="6"
      >
        <Box {...props} borderRadius={10} p="4">
          {getTable()}
        </Box>
      </ScrollView>
    </>
  );
};

export default Table;
