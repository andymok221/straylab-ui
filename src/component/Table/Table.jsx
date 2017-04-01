import React from 'react';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

const Table = ({
  id,
  className = '',
  children,
  highlight
}) => {
  let extraClass = '';
  if (highlight) {
    extraClass = `table--highlight-${highlight}`;
  }
  const finalClassName = `table ${extraClass} ${className}`.trim();
  return (
    <table
      id={id}
      className={finalClassName}
    >
      {children}
    </table>
  );
};

Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Footer = TableFooter;

export default Table;
