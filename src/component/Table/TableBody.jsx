import React from 'react';

const TableBody = ({
  className = '',
  children
}) => {
  const finalClassName = `table__body ${className}`.trim();
  return (
    <tbody className={finalClassName}>
      {children}
    </tbody>
  );
};

export default TableBody;
