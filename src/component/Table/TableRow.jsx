import React from 'react';

const TableRow = ({
  className = '',
  children
}) => {
  const finalClassName = `table__row ${className}`.trim();
  return (
    <tr className={finalClassName}>
      {children}
    </tr>
  );
};

export default TableRow;
