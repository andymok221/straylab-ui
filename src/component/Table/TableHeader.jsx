import React from 'react';

const TableHeader = ({
  className = '',
  children
}) => {
  const finalClassName = `table__header ${className}`.trim();
  return (
    <thead className={finalClassName}>
      {children}
    </thead>
  );
};

export default TableHeader;
