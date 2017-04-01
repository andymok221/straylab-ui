import React from 'react';

const TableFooter = ({
  className = '',
  children
}) => {
  const finalClassName = `table__footer ${className}`.trim();
  return (
    <tfoot className={finalClassName}>
      {children}
    </tfoot>
  );
};

export default TableFooter;
