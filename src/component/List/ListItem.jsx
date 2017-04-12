import React, { Component }  from 'react';

const ListItem = ({
  className = '',
  children
}) => {
  const finalClassName = `list__item ${className}`.trim();
  return (
    <li className={finalClassName}>
      {children}
    </li>
  );
};

export default ListItem;
