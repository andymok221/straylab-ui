import React from 'react';

const TableCell = ({
  className = '',
  children
}) => {
  const finalClassName = `table__cell ${className}`.trim();
  return (
    <td className={finalClassName}>
      {children}
    </td>
  );
};

export default TableCell;
