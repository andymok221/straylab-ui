import React from 'react';

const PaginationItem = ({
  className = '',
  active,
  disabled,
  children
}) => {
  let state = '';
  if (active) state = 'pagination__item--active';
  if (disabled) state = 'pagination__item--disabled';
  const finalClassName = `pagination__item ${className} ${state}`.trim();
  return (
    <li
      className={finalClassName}
    >
      {children}
    </li>
  );
};

export default PaginationItem;
