import React from 'react';
import PaginationItem from './PaginationItem';

const Pagination = ({
  className = '',
  children
}) => {
  const finalClassName = `pagination ${className}`.trim();
  return (
    <ul
      className={finalClassName}
    >
      {children}
    </ul>
  );
};

Pagination.Item = PaginationItem;

export default Pagination;
