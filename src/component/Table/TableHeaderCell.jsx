import React from 'react';

const TableHeaderCell = ({
  className = '',
  children
}) => {
  const finalClassName = `table__header-cell ${className}`.trim();
  return (
    <th className={finalClassName}>
      {children}
    </th>
  );
};

export default TableHeaderCell;
